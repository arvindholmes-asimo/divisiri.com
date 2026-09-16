/* Divisiri — shared site behavior (vanilla JS, no external libraries) */

document.addEventListener("DOMContentLoaded", function () {
  /* Dynamic footer year */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* Mobile hamburger menu */
  var navToggle = document.querySelector(".nav-toggle");
  var mainNav = document.querySelector(".main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = mainNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && mainNav.classList.contains("open")) {
        mainNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.focus();
      }
    });

    document.addEventListener("click", function (event) {
      if (
        mainNav.classList.contains("open") &&
        !mainNav.contains(event.target) &&
        !navToggle.contains(event.target)
      ) {
        mainNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* Smooth scroll for in-page anchors (respects reduced motion via CSS) */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      var targetId = link.getAttribute("href").slice(1);
      if (!targetId) return;
      var target = document.getElementById(targetId);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      }
    });
  });

  /* Reveal-on-scroll for cards/sections */
  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  var revealTargets = document.querySelectorAll(
    ".card, .process-step, .journey-list li, .value-card"
  );

  revealTargets.forEach(function (el) {
    el.classList.add("reveal");
  });

  if (!prefersReducedMotion && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    revealTargets.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealTargets.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* Generic form-submit interceptor: prevents default, validates required
     fields, and shows a loading -> success/error/empty state message.
     Applies to every <form> with a [data-placeholder-form] attribute. */
  document.querySelectorAll("form[data-placeholder-form]").forEach(function (form) {
    var statusId = form.getAttribute("data-status-target");
    var statusEl = statusId
      ? document.getElementById(statusId)
      : form.querySelector('[id^="form-status"]');

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!statusEl) return;

      statusEl.className = "";
      statusEl.textContent = "";

      var requiredFields = form.querySelectorAll("[required]");
      var missing = false;
      var hasAnyValue = false;

      requiredFields.forEach(function (field) {
        if (field.type === "checkbox") {
          if (!field.checked) missing = true;
          else hasAnyValue = true;
        } else {
          if (!field.value || !field.value.trim()) {
            missing = true;
          } else {
            hasAnyValue = true;
          }
        }
      });

      if (!hasAnyValue && requiredFields.length > 0) {
        statusEl.textContent =
          "⚠ Please fill in the form before submitting — no information was entered.";
        statusEl.className = "form-status-empty";
        return;
      }

      if (missing) {
        statusEl.textContent =
          "⚠ Some required fields are missing or invalid. Please review the highlighted fields and try again.";
        statusEl.className = "form-status-error";
        return;
      }

      var emailField = form.querySelector('input[type="email"]');
      if (emailField && emailField.value) {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailField.value)) {
          statusEl.textContent =
            "⚠ Please enter a valid email address and try again.";
          statusEl.className = "form-status-error";
          return;
        }
      }

      statusEl.textContent = "Sending your information…";
      statusEl.className = "form-status-empty";

      window.setTimeout(function () {
        statusEl.textContent =
          "✓ Thank you — your information has been received. This is a placeholder confirmation; no data has been sent anywhere, since this form is not yet connected to a live backend.";
        statusEl.className = "form-status-success";
        form.reset();
      }, 600);
    });
  });

  /* Read ?type= query param and pre-select the enquiry-type select on
     contact.html / private-label.html, if present. */
  var enquirySelect = document.getElementById("enquiry-type");
  if (enquirySelect) {
    var params = new URLSearchParams(window.location.search);
    var type = params.get("type");
    if (type) {
      Array.prototype.forEach.call(enquirySelect.options, function (option) {
        if (option.value === type) {
          option.selected = true;
        }
      });
    }
  }

  /* Product filter/search (products.html) */
  var productGrid = document.getElementById("product-grid");
  if (productGrid && typeof DIVISIRI_PRODUCTS !== "undefined") {
    renderProducts(DIVISIRI_PRODUCTS);

    var productSearch = document.getElementById("product-search");
    var productCategory = document.getElementById("product-category-filter");

    function applyProductFilters() {
      var term = productSearch ? productSearch.value.trim().toLowerCase() : "";
      var category = productCategory ? productCategory.value : "all";

      var filtered = DIVISIRI_PRODUCTS.filter(function (product) {
        var matchesCategory = category === "all" || product.category === category;
        var haystack = (product.name + " " + product.overview).toLowerCase();
        var matchesTerm = term === "" || haystack.indexOf(term) !== -1;
        return matchesCategory && matchesTerm;
      });

      renderProducts(filtered);
    }

    if (productSearch) productSearch.addEventListener("input", applyProductFilters);
    if (productCategory) productCategory.addEventListener("change", applyProductFilters);
  }

  function renderProducts(products) {
    var grid = document.getElementById("product-grid");
    var emptyState = document.getElementById("product-empty-state");
    if (!grid) return;

    grid.innerHTML = "";

    if (!products.length) {
      if (emptyState) emptyState.style.display = "block";
      return;
    }
    if (emptyState) emptyState.style.display = "none";

    products.forEach(function (product) {
      var card = document.createElement("div");
      card.className = "card reveal is-visible";
      card.innerHTML =
        '<span class="placeholder-badge">Placeholder product — replace with verified Divisiri information.</span>' +
        "<h3>" + escapeHtml(product.name) + "</h3>" +
        '<p class="status-pill">' + escapeHtml(product.category) + "</p>" +
        "<p>" + escapeHtml(product.overview) + "</p>" +
        "<details class=\"product-detail\">" +
        "<summary>View product details</summary>" +
        '<span class="placeholder-badge">Placeholder product — replace with verified Divisiri information.</span>' +
        "<dl>" +
        detailField("Intended use", product.intendedUse) +
        detailField("Key features", product.keyFeatures ? product.keyFeatures.join(" ") : DIVISIRI_PRODUCT_DETAIL_PLACEHOLDER) +
        detailField("Ingredients", DIVISIRI_PRODUCT_DETAIL_PLACEHOLDER) +
        detailField("Nutrition information", DIVISIRI_PRODUCT_DETAIL_PLACEHOLDER) +
        detailField("Directions for use", DIVISIRI_PRODUCT_DETAIL_PLACEHOLDER) +
        detailField("Storage", DIVISIRI_PRODUCT_DETAIL_PLACEHOLDER) +
        detailField("Warnings & precautions", DIVISIRI_PRODUCT_DETAIL_PLACEHOLDER) +
        detailField("Allergen information", DIVISIRI_PRODUCT_DETAIL_PLACEHOLDER) +
        detailField("Certifications", DIVISIRI_PRODUCT_DETAIL_PLACEHOLDER) +
        detailField("FAQs", DIVISIRI_PRODUCT_DETAIL_PLACEHOLDER) +
        "</dl>" +
        '<a class="btn btn-primary" href="contact.html?type=product#enquiry">Enquire</a>' +
        "</details>";
      grid.appendChild(card);
    });
  }

  function detailField(label, value) {
    return (
      '<div class="detail-field"><dt>' +
      escapeHtml(label) +
      "</dt><dd>" +
      escapeHtml(value) +
      "</dd></div>"
    );
  }

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.textContent = str == null ? "" : String(str);
    return div.innerHTML;
  }

  /* Journal category filter (journal.html) */
  var journalGrid = document.getElementById("journal-grid");
  if (journalGrid && typeof DIVISIRI_JOURNAL_ARTICLES !== "undefined") {
    renderJournal(DIVISIRI_JOURNAL_ARTICLES);

    var journalFilter = document.getElementById("journal-category-filter");
    if (journalFilter) {
      journalFilter.addEventListener("change", function () {
        var category = journalFilter.value;
        var filtered =
          category === "all"
            ? DIVISIRI_JOURNAL_ARTICLES
            : DIVISIRI_JOURNAL_ARTICLES.filter(function (a) {
                return a.category === category;
              });
        renderJournal(filtered);
      });
    }
  }

  function renderJournal(articles) {
    var grid = document.getElementById("journal-grid");
    var emptyState = document.getElementById("journal-empty-state");
    if (!grid) return;

    grid.innerHTML = "";

    if (!articles.length) {
      if (emptyState) emptyState.style.display = "block";
      return;
    }
    if (emptyState) emptyState.style.display = "none";

    articles.forEach(function (article) {
      var card = document.createElement("article");
      card.className = "card reveal is-visible";
      card.innerHTML =
        '<span class="draft-badge">Content-review status: ' +
        escapeHtml(article.status) +
        "</span>" +
        "<h3>" + escapeHtml(article.title) + "</h3>" +
        '<p class="status-pill">' + escapeHtml(article.category) + "</p>" +
        "<p>" + escapeHtml(article.excerpt) + "</p>" +
        "<p><strong>Author:</strong> " + escapeHtml(article.author) + "<br>" +
        "<strong>Date:</strong> " + escapeHtml(article.date) + "<br>" +
        "<strong>Reading time:</strong> " + escapeHtml(article.readingTime) + "</p>" +
        '<span aria-disabled="true" style="color:#8a99a8;font-weight:600;">Read more (coming soon)</span>';
      grid.appendChild(card);
    });
  }

  /* FAQ accordion rendering (faq.html) — populated from content.js when present */
  var faqContainer = document.getElementById("faq-accordion");
  if (faqContainer && typeof DIVISIRI_FAQS !== "undefined") {
    DIVISIRI_FAQS.forEach(function (item) {
      var details = document.createElement("details");
      details.className = "accordion-item";
      var summary = document.createElement("summary");
      summary.textContent = item.question;
      var p = document.createElement("p");
      p.textContent = item.answer;
      details.appendChild(summary);
      details.appendChild(p);
      faqContainer.appendChild(details);
    });
  }
});
