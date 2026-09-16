/*
 * Divisiri — central content configuration
 * Editable data used to render navigation, footer links, FAQ, journal
 * previews, and the product catalogue. Keeping this data here means
 * copy can be updated in one place instead of across every page.
 */

/* Primary navigation, shared by every page */
const DIVISIRI_NAV_LINKS = [
  { label: "About Us", href: "about.html" },
  { label: "Solutions", href: "solutions.html" },
  { label: "R&D", href: "research-development.html" },
  { label: "Products", href: "products.html" },
  { label: "Concept to Consumer", href: "concept-to-consumer.html" },
  { label: "Private Label", href: "private-label.html" },
  { label: "Co-Branding", href: "co-branding.html" },
  { label: "Journal", href: "journal.html" },
  { label: "Contact", href: "contact.html" },
];

/* Four core engagement models, shown as an interactive tab strip on the homepage */
const DIVISIRI_PILLARS = [
  {
    label: "Concept to Consumer",
    heading: "Concept to Consumer",
    body: "We help take a promising wellness idea from early concept through formulation, quality review, and market readiness — one connected process rather than disconnected handoffs.",
    cta: "See the journey",
    href: "concept-to-consumer.html",
  },
  {
    label: "Private Label",
    heading: "Private Label",
    body: "Bring your own brand to market on a Divisiri-developed formulation. We work through product concept, packaging direction, and technical documentation with you.",
    cta: "Discuss private label",
    href: "private-label.html",
  },
  {
    label: "Co-Branding",
    heading: "Co-Branding",
    body: "Shared product development for brands that want to co-create — from positioning and packaging planning through to launch collaboration.",
    cta: "Explore co-branding",
    href: "co-branding.html",
  },
  {
    label: "Research & Development",
    heading: "Research & Development",
    body: "Ingredient exploration, formulation strategy, prototyping, and stability planning — the technical foundation behind every Divisiri solution area.",
    cta: "See our R&D approach",
    href: "research-development.html",
  },
];

/* Footer link columns, shared by every page */
const DIVISIRI_FOOTER_GROUPS = [
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "about.html" },
      { label: "Careers", href: "careers.html" },
      { label: "Journal", href: "journal.html" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Solutions", href: "solutions.html" },
      { label: "R&D", href: "research-development.html" },
      { label: "Products", href: "products.html" },
      { label: "Concept to Consumer", href: "concept-to-consumer.html" },
      { label: "Private Label", href: "private-label.html" },
      { label: "Co-Branding", href: "co-branding.html" },
      { label: "Quality & Safety", href: "quality-safety.html" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "FAQ", href: "faq.html" },
      { label: "Contact", href: "contact.html" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "privacy.html" },
      { label: "Terms & Conditions", href: "terms.html" },
      { label: "Shipping Policy", href: "shipping.html" },
      { label: "Returns & Refunds", href: "returns.html" },
      { label: "Wellness Disclaimer", href: "disclaimer.html" },
      { label: "Accessibility Statement", href: "accessibility.html" },
    ],
  },
];

/* FAQ data, rendered on faq.html and mirrored in FAQPage JSON-LD */
const DIVISIRI_FAQS = [
  {
    question: "What is Divisiri?",
    answer:
      "Divisiri is an independent wellness and innovation company that develops nutrition, nutraceutical, personal-care, and product-development solutions for everyday life.",
  },
  {
    question: "What types of wellness solutions does Divisiri develop?",
    answer:
      "Divisiri works across medical nutrition, wellness nutrition, nutraceuticals, Ayurvedic-inspired wellness, cosmeceuticals and personal care, and functional food concepts. See our Solutions page for details on each area.",
  },
  {
    question: "Does Divisiri sell finished products?",
    answer:
      "Divisiri's product catalogue currently shows placeholder examples of the kinds of products we work on. Availability of any finished product depends on verification, review, and market readiness.",
  },
  {
    question: "Does Divisiri provide product-development services?",
    answer:
      "Yes. Product development — from concept exploration through formulation, review, and market preparation — is a core part of what Divisiri does. Visit our Research & Development page to learn more.",
  },
  {
    question: "What is concept-to-consumer development?",
    answer:
      "Concept-to-consumer development is Divisiri's approach to taking a promising idea through positioning, formulation, packaging, technical review, and launch support. See the Concept to Consumer page for the full journey.",
  },
  {
    question: "What is private-label development?",
    answer:
      "Private-label development means Divisiri works with a partner brand to develop a product concept, formulation direction, and supporting materials under that partner's own brand. Visit the Private Label page to start an enquiry.",
  },
  {
    question: "Does Divisiri support co-branding?",
    answer:
      "Yes, Divisiri considers co-branding collaborations on a project-by-project basis, covering shared positioning, packaging, and market-launch planning. See the Co-Branding page for more information.",
  },
  {
    question: "Can Divisiri help with formulation?",
    answer:
      "Formulation strategy and refinement are part of our research-and-development approach. Specific formulation details, ingredients, and outcomes vary by project and are evaluated individually.",
  },
  {
    question: "How long does product development take?",
    answer:
      "Timelines vary widely depending on product category, formulation complexity, regulatory pathway, and market. We do not publish fixed timelines because each project is different.",
  },
  {
    question: "Does Divisiri provide regulatory support?",
    answer:
      "Divisiri includes regulatory review as a step within its development process, but does not claim any specific certifications, approvals, or regulatory guarantees unless official documentation is provided.",
  },
  {
    question: "What information is needed to start a project?",
    answer:
      "Generally we ask about your intended product category, target market, project stage, and general goals. Use the Contact page to share initial details and we will follow up with next steps.",
  },
  {
    question: "Where are Divisiri products available?",
    answer:
      "Divisiri does not currently publish a verified list of retail availability. Any availability information will be confirmed here once finalized.",
  },
  {
    question: "How can I request a product catalogue?",
    answer:
      "You can reach out through the Contact page and select a product enquiry to request more information about our current capabilities.",
  },
  {
    question: "How can I report a product concern?",
    answer:
      "Please use the Contact page and select Customer Support to report a product concern. If your question relates to a medication, medical condition, or personal health decision, please consult a qualified healthcare professional rather than relying on website content.",
  },
];

/* Journal article previews, rendered on journal.html */
const DIVISIRI_JOURNAL_ARTICLES = [
  {
    title: "What Makes a Wellness Product Meaningful?",
    category: "Consumer Wellness",
    author: "[Author placeholder]",
    date: "[Date placeholder]",
    readingTime: "4 min read",
    excerpt:
      "Meaningful wellness products start with a real, well-understood consumer need rather than a passing trend. This piece explores how Divisiri thinks about that starting point.",
    status: "Draft — pending review",
  },
  {
    title: "From Ingredient Idea to Finished Product.",
    category: "Product Development",
    author: "[Author placeholder]",
    date: "[Date placeholder]",
    readingTime: "5 min read",
    excerpt:
      "An ingredient idea has to travel a long way before it becomes a finished product. Here is a general look at the stages that journey tends to involve.",
    status: "Draft — pending review",
  },
  {
    title: "Understanding Nutraceutical Product Development.",
    category: "Nutraceuticals",
    author: "[Author placeholder]",
    date: "[Date placeholder]",
    readingTime: "6 min read",
    excerpt:
      "Nutraceutical development sits at the intersection of nutrition science and product design. This article introduces the basic vocabulary and considerations.",
    status: "Draft — pending review",
  },
  {
    title: "How Consumer Needs Shape Wellness Innovation.",
    category: "Nutrition",
    author: "[Author placeholder]",
    date: "[Date placeholder]",
    readingTime: "4 min read",
    excerpt:
      "Innovation works best when it responds to a clearly understood need. We look at how consumer insight informs the early stages of concept development.",
    status: "Draft — pending review",
  },
  {
    title: "Traditional Knowledge in Modern Wellness Formulation.",
    category: "Ayurveda & Traditional Knowledge",
    author: "[Author placeholder]",
    date: "[Date placeholder]",
    readingTime: "5 min read",
    excerpt:
      "Traditional botanical knowledge can inform modern wellness formats when approached with care, education, and respect for its origins.",
    status: "Draft — pending review",
  },
  {
    title: "What to Look for on a Wellness Product Label.",
    category: "Ingredient Education",
    author: "[Author placeholder]",
    date: "[Date placeholder]",
    readingTime: "3 min read",
    excerpt:
      "Product labels carry a lot of information. This introductory piece walks through the general categories of information consumers often look for.",
    status: "Draft — pending review",
  },
  {
    title: "The Role of Quality Review in Product Development.",
    category: "Quality & Safety",
    author: "[Author placeholder]",
    date: "[Date placeholder]",
    readingTime: "5 min read",
    excerpt:
      "Quality review is woven throughout product development rather than added at the end. We outline where it typically fits into the process.",
    status: "Draft — pending review",
  },
  {
    title: "Designing Better Everyday Nutrition Solutions.",
    category: "Functional Foods",
    author: "[Author placeholder]",
    date: "[Date placeholder]",
    readingTime: "4 min read",
    excerpt:
      "Everyday nutrition solutions need to fit real routines. This article considers how format, convenience, and nutrition intersect in practice.",
    status: "Draft — pending review",
  },
];

const DIVISIRI_JOURNAL_CATEGORIES = [
  "Nutrition",
  "Nutraceuticals",
  "Functional Foods",
  "Ayurveda & Traditional Knowledge",
  "Personal Care",
  "Product Development",
  "Ingredient Education",
  "Quality & Safety",
  "Consumer Wellness",
  "Industry Insights",
];

/* Product catalogue placeholder data, rendered on products.html */
const DIVISIRI_PRODUCTS = [
  {
    id: "daily-nutrition",
    name: "Divisiri Daily Nutrition",
    category: "Wellness Nutrition",
    overview:
      "A placeholder concept for an everyday nutrition product intended to support general wellbeing as part of a balanced routine.",
    intendedUse:
      "To be confirmed — placeholder pending verified product data.",
    keyFeatures: [
      "To be confirmed — placeholder pending verified product data.",
    ],
  },
  {
    id: "botanical-balance",
    name: "Divisiri Botanical Balance",
    category: "Ayurvedic-Inspired Wellness",
    overview:
      "A placeholder concept exploring traditional botanical ingredients in a contemporary wellness format.",
    intendedUse:
      "To be confirmed — placeholder pending verified product data.",
    keyFeatures: [
      "To be confirmed — placeholder pending verified product data.",
    ],
  },
  {
    id: "active-support",
    name: "Divisiri Active Support",
    category: "Nutraceuticals",
    overview:
      "A placeholder concept for a nutraceutical format intended to support active, everyday lifestyles.",
    intendedUse:
      "To be confirmed — placeholder pending verified product data.",
    keyFeatures: [
      "To be confirmed — placeholder pending verified product data.",
    ],
  },
  {
    id: "herbal-care",
    name: "Divisiri Herbal Care",
    category: "Ayurvedic-Inspired Wellness",
    overview:
      "A placeholder concept for a herbal wellness product drawing on traditional plant-based ingredient education.",
    intendedUse:
      "To be confirmed — placeholder pending verified product data.",
    keyFeatures: [
      "To be confirmed — placeholder pending verified product data.",
    ],
  },
  {
    id: "functional-nutrition",
    name: "Divisiri Functional Nutrition",
    category: "Functional Foods",
    overview:
      "A placeholder concept for a fortified, ingredient-led food format designed around everyday convenience.",
    intendedUse:
      "To be confirmed — placeholder pending verified product data.",
    keyFeatures: [
      "To be confirmed — placeholder pending verified product data.",
    ],
  },
  {
    id: "skin-wellness",
    name: "Divisiri Skin Wellness",
    category: "Cosmeceuticals",
    overview:
      "A placeholder concept for a topical wellness product exploring skin-care formulation directions.",
    intendedUse:
      "To be confirmed — placeholder pending verified product data.",
    keyFeatures: [
      "To be confirmed — placeholder pending verified product data.",
    ],
  },
];

const DIVISIRI_PRODUCT_CATEGORIES = [
  "Medical Nutrition",
  "Wellness Nutrition",
  "Nutraceuticals",
  "Functional Foods",
  "Ayurvedic-Inspired Wellness",
  "Cosmeceuticals",
  "Personal Care",
];

/* Shared placeholder detail fields applied to every product card */
const DIVISIRI_PRODUCT_DETAIL_PLACEHOLDER =
  "To be confirmed — placeholder pending verified product data.";
