import type { FAQS } from "@/constants/faqs";
import type { FaqItem, Post, Project, Service, TeamMember, Testimonial } from "@/types";

/** Per-item translations keyed by the item's `id` in src/constants. Missing entries fall back to English. */
type Overrides<T> = Readonly<Record<string, Partial<T>>>;

export type FaqCategory = keyof typeof FAQS;

export interface ContentOverrides {
  services: Overrides<Pick<Service, "title" | "description">>;
  projects: Overrides<Pick<Project, "title" | "category">>;
  posts: Overrides<Pick<Post, "title">>;
  testimonials: Overrides<Pick<Testimonial, "quote" | "author">>;
  team: Overrides<Pick<TeamMember, "name" | "role">>;
  faqs: Partial<Record<FaqCategory, readonly FaqItem[]>>;
}

interface PageText {
  /** Banner heading. */
  title: string;
  /** Last breadcrumb item. */
  crumb: string;
}

/**
 * English UI text. This file defines the shape every other language must match
 * (see am.ts) — add a key here first, then translate it there.
 */
export const en = {
  meta: {
    description:
      "Our experienced team transforms ideas into exceptional residential and commercial developments using premium materials, innovative engineering.",
    /** Browser-tab titles, one per route. */
    titles: {
      about: "About Us",
      blog: "Our Blog",
      blogDetails: "Expert Insights and Latest Trends in Construction Industry",
      contact: "Contact Us",
      faqs: "FAQs",
      homeSlider: "Home - Slider",
      homeVideo: "Home - Video",
      imageGallery: "Image Gallery",
      projectDetails: "Modern Family Villa",
      projects: "Our Projects",
      serviceDetails: "Residential Construction",
      services: "Our Services",
      team: "Our Team",
      teamDetails: "Michael Anderson",
      testimonials: "Testimonials",
      videoGallery: "Video Gallery",
      notFound: "Page Not Found",
    },
  },
  /** Inner-page banners and breadcrumbs. */
  pages: {
    about: { title: "About us", crumb: "About Us" } as PageText,
    blog: { title: "Our blog", crumb: "blog" } as PageText,
    contact: { title: "Contact us", crumb: "Contact Us" } as PageText,
    faqs: { title: "Frequently asked questions", crumb: "FAQ's" } as PageText,
    imageGallery: { title: "Image gallery", crumb: "Image gallery" } as PageText,
    videoGallery: { title: "Video gallery", crumb: "Video gallery" } as PageText,
    projects: { title: "Our projects", crumb: "projects" } as PageText,
    services: { title: "Our services", crumb: "services" } as PageText,
    team: { title: "Our team", crumb: "Team" } as PageText,
    testimonials: { title: "Testimonials", crumb: "Testimonials" } as PageText,
    notFound: { title: "Page Not Found", crumb: "404 Error Page" } as PageText,
    projectDetails: { title: "Modern family villa", crumb: "Modern Family Villa", parent: "Projects" },
    serviceDetails: { title: "Residential construction", crumb: "Residential construction", parent: "Services" },
    teamDetails: { title: "Michael anderson", crumb: "Michael anderson", parent: "Team" },
    blogDetails: { title: "Expert Insights and Latest ..", author: "Admin", date: "8 July, 2026" },
  },
  common: {
    language: "Language",
    home: "Home",
    breadcrumb: "Breadcrumb",
    bookNow: "Book Now",
    toggleMenu: "Toggle menu",
    play: "Play",
    drag: "Drag",
    view: "View",
    readMore: "Read More",
    contactNow: "Contact Now",
    getInTouch: "Get in Touch",
    sidebarCta: "Let's Connect with Our Expert Construction Team and Start Building Today",
    faqTitle: "Frequently asked questions",
    backToTop: "Back to top",
    videoPlayer: "Video player",
    close: "Close (Esc)",
    previous: "Previous (Left arrow key)",
    next: "Next (Right arrow key)",
    address: "Addis Ababa",
    /** Ethiopian clock 3:00–11:00 = 9:00 AM–5:00 PM international time. */
    hours: "9:00 AM – 5:00 PM",
    copyright: "Copyright © 2026 Nigat Fanawi Trading PLC. All Rights Reserved.",
    connect: "Let's connect and start building your project today.",
    teamIntro:
      "Our team of skilled professionals brings experience, precision, and dedication to every project we undertake, ensuring quality results and client satisfaction.",
  },
  nav: {
    home: "Home",
    about: "About Us",
    services: "Services",
    ourServices: "Our Services",
    projects: "Our Projects",
    blog: "Blog",
    contact: "Contact Us",
  },
  footer: {
    quickLinks: "Quick Links",
    ourServices: "Our Services",
    newsletter: "Newsletter",
    newsletterNote: "*Subscribe to get the latest updates,  tips, and project insights.",
    emailPlaceholder: "Enter Email Address*",
    emailLabel: "Email address",
    subscribe: "Subscribe",
  },
  group: {
    tagline: "Nigat Fanawi Trading PLC — one parent company, three sectors.",
    youAreHere: "You are here",
    sectors: "Nigat Group sectors",
  },
  form: {
    firstName: "First Name",
    lastName: "Last Name",
    email: "E-mail Address",
    phone: "Phone No.",
    message: "Write Message Here.......",
    sendMessage: "Send Message",
    submitRequest: "Submit Request",
    requiredFields: "Please fill in all required fields with valid information.",
    messageSent: "Message Sent Successfully!",
    invalidEmail: "Please enter a valid email address.",
    subscribed: "Thank you for subscribing!",
    notConfigured: "Form delivery is not configured yet. Please contact us by phone or email.",
    failed: "Something went wrong. Please try again later.",
  },
  contact: {
    subtitle: "Contact Us",
    title: "Let's build your next project together",
    description:
      "Whether you're planning a new build, renovation, or commercial development, our experienced team is here to help.",
    phoneLabel: "Contact Us",
    emailLabel: "Email Address",
    getInTouch: "Get in touch",
  },
  map: {
    subtitle: "Visit Our Location",
    title: "Visit our office for consultation",
    description:
      "Whether you're planning a residential build, commercial development, or renovation, we're here to provide expert advice and personalized solutions.",
    iframeTitle: "Our office location on Google Maps",
  },
  hero: {
    subtitle: "Built With Trust",
    title: "Building excellence since day one",
    getStarted: "Get Started",
    exploreVideo: "Explore Video",
    yearsBadge: "8+ Years of Trusted Construction Excellence",
  },
  about: {
    yearsText: "Years of Excellence in Construction and Building Solutions",
    subtitle: "About Us",
    title: "Building reliable structures with quality and precision",
    description:
      "Offering comprehensive construction solutions tailored to client needs, driven by precision, transparency & a passion for delivering exceptional & lasting results",
    point1: "Building quality spaces with trust and precision.",
    point2: "Delivering high quality residential and commercial projects.",
    projectsDelivered: "Quality Projects Delivered with Precision",
    moreAbout: "More About Us",
    authorName: "Michael Anderson",
    authorRole: "Co-Founder",
  },
  approach: {
    subtitle: "Our Approach",
    title: "Building excellence through every step we take",
    intro:
      "We believe every successful construction project begins with careful planning, open communication, and expert execution.",
    mission: "Our Mission",
    missionText:
      "To deliver reliable, innovative, and sustainable trading, construction, and investment solutions by creating value for customers, partners, and stakeholders through operational excellence, integrity, and customer-centric services.",
    vision: "Our Vision",
    visionText:
      "We begin by understanding your goals, budget, timeline, and project requirements. Our experts conduct site",
    story: "Our Story",
    storyText:
      "We begin by understanding your goals, budget, timeline, and project requirements. Our experts conduct site",
    cta: "Have a construction project in mind? Our experienced team is here to answer your questions,",
  },
  coreValues: {
    subtitle: "Core Values",
    title: "Our commitment to lasting excellence",
    description:
      "Our core values are the foundation of everything we build. They guide our decisions, strengthen our relationships, and inspire us to deliver exceptional construction services with integrity, quality, safety,",
    years: "Years of Construction Experience",
    projects: "Projects Successfully Completed",
    engineers: "Skilled Engineers & Professionals",
  },
  expertise: {
    discover: "Discover & Consult",
    discoverText:
      "Every project is completed with precision, attention to detail, and the highest construction standards.",
    professionals: "Experienced Professionals",
    professionalsText:
      "Our skilled architects, engineers, and construction specialists bring years of industry expertise to every build.",
    onTime: "On-Time Project Delivery",
    onTimeText:
      "Every project is completed with precision, attention to detail, and the highest construction standards.",
    years: "Years of Industry Experience",
  },
  services: {
    subtitle: "Our Services",
    title: "Construction solutions built around your vision",
    explore: "Explore Services",
    free: "Free",
    journey: "Start Your Construction Journey Today. - ",
    requestQuote: "Request a Quote.",
  },
  serviceDetail: {
    sidebarTitle: "Discover Our Services",
    intro1:
      "We specialize in creating high-quality residential spaces that combine comfort, functionality, style, and lasting value. Whether you're building a custom home from the ground up, renovating an existing property, expanding your living space, or developing a residential community, our experienced team manages every stage with precision, care, and attention to detail.",
    intro2:
      "Our goal is to create residential spaces that are not only visually appealing, but also durable, efficient, and built to provide long-term comfort for years to come.",
    servicesTitle: "Our residential construction services",
    servicesIntro:
      "From concept to completion, our team focuses on creating residential spaces that reflect your lifestyle, meet your functional needs, and stand the test of time.",
    benefits: [
      { title: "Custom Home Construction", text: "Build your dream home with tailored designs and craftsmanship." },
      { title: "Renovations & Remodeling", text: "Upgrade your space with modern, functional renovations." },
      { title: "Luxury Home Development", text: "Create elegant homes with premium finishes and refined details." },
      { title: "Multi-Family Housing", text: "We build durable residential duplexes, townhouses, apartments." },
    ],
    whyTitle: "Why choose our services",
    whyIntro:
      "With skilled professionals, premium materials, and a commitment to excellence, we ensure every home is built with precision, durability, and lasting value.",
    whyList: [
      "Transparent Rates with no hidden cost",
      "Customized solutions for every client",
      "Strict quality and safety standards",
      "Premium materials & trusted suppliers",
    ],
    processTitle: "Our construction process",
    processIntro:
      "Learn how we manage every stage of your project with clear planning, expert execution, and a commitment to quality from start to finish for exceptional results every time.",
    steps: ["Initial Consultation & Planning", "Residential Services", "Final Inspection & Handover"],
    stepText: "We inspect every detail carefully completing the project and handing it over.",
  },
  whyChooseUs: {
    subtitle: "Why Choose Us",
    title: "Excellence that defines our construction services",
    innovation: "Innovation Solutions",
    quality: "Quality Workmanship",
    expertise: "Expertise & Experience",
    itemText: "Simple action make difference. It starts & ends with each employee striving to work",
  },
  projects: {
    subtitle: "Our Projects",
    title: "Creating landmark projects with superior quality",
    viewAll: "View All Projects",
    freeQuote: "Get Free Quote",
    reviews: "Over 3000 Reviews",
  },
  projectDetail: {
    info: "Project Information",
    type: "Project Type:",
    typeValue: "Residential",
    client: "Client Name:",
    clientValue: "The Johnson Family",
    duration: "Duration:",
    durationValue: "10 Months",
    location: "Location:",
    locationValue: "Green Valley Estate",
    share: "Share Project:",
    overviewTitle: "Project overview",
    overview1:
      "The Modern Family Villa is a premium residential project designed to combine contemporary architecture with everyday comfort. Built for a growing family, this custom home features spacious living areas, elegant interiors, and energy-efficient construction that creates a perfect balance between style and functionality.",
    overview2:
      "Every stage of the project was carefully managed to deliver exceptional quality and a comfortable experience. With a thoughtfully planned layout, refined finishes, and attention to architectural detail, the villa offers a modern lifestyle that feels both luxurious and practical.",
    challengesTitle: "Challenges & solutions",
    challengesIntro:
      "Through efficient planning, regular site inspections, and proactive communication, every milestone was completed successfully without compromising quality or safety.",
    challenges: "Project Challenges",
    challengesText:
      "The project required careful coordination of trades, deliveries, and quality control throughout every construction phase.",
    solutions: "Our Solutions",
    solutionsText:
      "We overcame these challenges planning, close supervision, and clear, delivering the home on time with excellent quality.",
    processTitle: "Construction process",
    processIntro:
      "From initial consultation to final handover, we manage every stage with careful planning, skilled execution, and consistent quality control to ensure a smooth and successful build.",
    steps: ["Planning & Design", "Additional Finishing", "Final Inspection"],
    stepText: "Created architectural drawings, plans, project schedules.",
    contactTitle: "Contact our construction team",
    contactText:
      "Explore the complete journey of this project—from initial planning and architectural design to expert construction and final completion. Discover how our commitment to ideas into exceptional spaces built to last.",
    turnIdeas: "We turn your ideas into reality with quality workmanship every time.",
    requestConsultation: "Request a Consultation",
  },
  introVideo: {
    subtitle: "Let's Build Together",
    title: "Ready to build your next dream project?",
    description:
      "From concept to completion, our expert team delivers high-quality construction solutions tailored to your vision.",
    requestConsultation: "Request Consultation",
    callUs: "Call us 24/7 on",
  },
  team: {
    subtitle: "Our Team",
    title: "Professionals committed to building better spaces",
    viewTeam: "View Our Team",
    footer: "Strong, Stylish, and Durable Roofing Solutions - ",
    viewAll: "View all Members.",
  },
  teamMember: {
    aboutMe: "About me",
    bio: "Michael Anderson is the Founder & Director of the company, bringing over 20 years of experience in the construction industry. His passion for quality craftsmanship, innovative building solutions, and client-focused service has shaped the company's reputation for excellence.",
    phone: "Phone Number:",
    email: "Email Address:",
    location: "Location:",
    locationValue: "New York, USA",
    experience: "Experience:",
    experienceValue: "20+ Years",
    specialization: "Specialization:",
    specializationValue: "Construction Management",
    follow: "Follow On Social:",
    workTitle: "Work experience",
    workText:
      "Throughout his career, Michael has successfully led residential, commercial, and industrial construction projects, ensuring every development is completed with precision, safety, and efficiency.",
    workList: [
      "Residential & Commercial Development Across Diverse Markets",
      "Strategic Planning & Execution for Complex Projects",
      "Budget & Resource Management for Optimal Efficiency",
      "Client Relationship Management With Clear Communication",
    ],
    skillsTitle: "Working skills",
    skillsText:
      "A strong combination of leadership, technical expertise, and strategic thinking supports every project from planning to completion.",
    completed: "Completed Projects",
    satisfied: "Satisfied Clients",
    skills: ["Construction Management", "Client Communication", "Strategic Decision Making"],
  },
  testimonials: {
    subtitle: "Testimonials",
    title: "What our clients say about us",
    description:
      "Real experiences from clients who trusted us to deliver quality construction with precision, reliability, and professionalism.",
    basedOn: "Based on verified client reviews",
    point1: "6+ successful projects delivered",
    point2: "100% safe & quality-focus execution",
    ready: "Ready to start your project? Let's build something great together.",
    freeQuote: "Get a Free Quote",
    viewAll: "View our all reviews.",
  },
  faq: {
    subtitle: "Frequently Asked Questions",
    title: "Everything you need to know about us",
    description:
      "Find answers to the most common questions about our construction services, project timelines, pricing, and process to help you build with confidence.",
    viewAll: "View All Faqs",
  },
  faqsPage: {
    links: {
      general: "General Questions",
      process: "Construction Process",
      pricing: "Pricing & Payments",
      design: "Design & Planning",
      warranty: "Warranty & Support",
    } as Record<FaqCategory, string>,
    titles: {
      general: "General questions",
      process: "Construction process",
      pricing: "Pricing & payments",
      design: "Design & planning",
      warranty: "Warranty & support",
    } as Record<FaqCategory, string>,
  },
  cta: {
    subtitle: "Get a Free Estimate",
    title: "Request your construction quote today",
    trustSubtitle: "People trust",
    trustTitle: "Driven by Quality and Reliability",
    trustDescription: "We deliver reliable construction solution skilled professionals and to excellence.",
    workmanship: "Premium Workmanship",
    pricing: "Transparent Pricing",
    satisfaction: "Customer Satisfaction",
    itemText: "Quality craftsmanship that ensures durable, lasting structures built to stand the test of time",
  },
  blog: {
    subtitle: "Latest News",
    title: "Latest construction updates",
    description:
      "Stay updated with expert tips, industry trends, and practical guides to help you make informed construction and design decisions.",
  },
  blogPost: {
    p1: "The construction industry continues to evolve through advanced technologies, sustainable building practices, and innovative project management methods. Staying informed about emerging trends helps homeowners, developers, and contractors make smarter decisions, improve efficiency, and deliver projects that stand the test of time.",
    p2: "Construction today is no longer just about bricks and concrete—it is about creating durable, environmentally responsible spaces that meet the demands of the future. By understanding industry innovations, businesses and property owners can reduce costs, improve quality, and ensure every project achieves long-term success.",
    quote:
      "Exceptional construction is achieved through a perfect balance of innovation, skilled craftsmanship, sustainable practices, and an unwavering commitment to delivering safe, durable, and inspiring spaces that serve communities for generations to come.",
    p3: "Sustainability continues to play a significant role in shaping the future of the industry. Builders are increasingly adopting eco-friendly materials, energy-efficient systems, and waste-reduction strategies that minimize environmental impact while improving building performance. Green construction practices not only contribute to a healthier planet.",
    heading: "Building for tomorrow",
    p4: "Companies that embrace advanced technology, sustainable building materials, and efficient project management are better equipped to meet evolving client expectations while maintaining superior quality.",
    list: [
      "Leverage BIM, drones, and digital project management tools to enhance planning and project accuracy.",
      "Maintain high construction standards through skilled professionals, and detailed quality inspections.",
      "Minimize material waste, improve workflow efficiency, and maximize value through effective execution",
      "Incorporate modern building systems that reduce energy consumption, lower operating costs.",
      "Design durable, resilient structures that adapt to evolving technologies, environmental, and needs.",
    ],
    p5: "Key priorities include using sustainable materials, integrating smart construction technologies, maintaining strict safety standards, improving resource management, ensuring quality at every stage, compromising performance.",
    tags: "Tags:",
    tagList: ["Innovation", "Building", "Engineering"],
  },
  notFound: {
    title: "Oops! Page Not Found",
    description: "The page you are looking for does not exist.",
    back: "Back To Homepage",
  },
  /** English is the source text in src/constants, so nothing to override. */
  content: { services: {}, projects: {}, posts: {}, testimonials: {}, team: {}, faqs: {} } as ContentOverrides,
};

export type Dictionary = typeof en;
