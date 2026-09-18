export const SITE = {
  name: "Brook of Destiny Foundation",
  shortName: "Brook of Destiny",
  tagline: "Nurturing Destinies, Transforming Communities.",
  domain: "brookofdestinyfoundation.com",
  email: "brookofdestiny@gmail.com",
  phoneLabel: "Email or the form — we reply personally",

  location: {
    town: "Lugulu",
    area: "Webuye West Sub-County",
    county: "Bungoma County",
    country: "Kenya",
    line: "Lugulu, Webuye West, Bungoma County, Kenya",
    note: "Along the Webuye–Kitale road, in the green highlands of western Kenya.",
  },

  giving: {
    paybill: "522533",
    account: "8103797",
    accountName: "Brook of Destiny Foundation",
    bank: "KCB Bank Kenya",
  },

  social: {
    tiktok: "https://www.tiktok.com/@brookofdestinyfoundation",
    facebook: "https://www.facebook.com/brookofdestinyfoundation",
    instagram: "https://www.instagram.com/brookofdestinyfoundation",
    youtube:
      "https://youtube.com/@brookofdestinyfoundation?si=1ljmyn8UQP974fPM",
  },

  verse: {
    text: "They are like trees planted by streams of water, which yield their fruit in its season.",
    ref: "Psalm 1:3",
  },
} as const;

export const NAV = [
  { to: "/about" as const, label: "About" },
  { to: "/team" as const, label: "Our Team" },
  { to: "/programmes" as const, label: "Programmes" },
  { to: "/impact" as const, label: "Impact" },
  { to: "/get-involved" as const, label: "Get involved" },
  { to: "/contact" as const, label: "Contact" },
];

export type ProgrammeSlug =
  | "education"
  | "youth-mentorship"
  | "faith"
  | "health"
  | "livelihoods"
  | "parenting"
  | "ovc"
  | "community-development";

export type Programme = {
  slug: ProgrammeSlug;
  title: string;
  short: string;
  summary: string;
  body: string[];
  image: string;
  imageAlt: string;
  video?: string;
  icon:
    | "graduation"
    | "users"
    | "book"
    | "stethoscope"
    | "sprout"
    | "heart"
    | "home"
    | "trees";
};

export const PROGRAMMES: Programme[] = [
  {
    slug: "education",
    title: "Education & Scholarships",
    short: "Keeping learners in school",
    summary:
      "Education support, mentoring, and practical assistance that help learners remain in school and build a stronger future.",
    body: [
      "Education is one of the ways a destiny is protected. In Webuye West and communities around Lugulu, families can face financial barriers that make school attendance difficult.",
      "We walk alongside selected learners and families through education support, school engagement, mentoring, and practical assistance. Our aim is to help young people remain in school and develop the confidence and skills they need for the future.",
      "Partners can support education initiatives, provide learning materials, strengthen scholarship resources, or help us build sustainable education programmes as the Foundation grows.",
    ],

    // Use an approved, non-identifying education image here.
    image: "/images/education/education-programme.jpg",

    imageAlt:
      "Education materials and a learning environment representing the Foundation's education programme",

    // Avoid public-facing videos showing identifiable children.
    icon: "graduation",
  },

  {
    slug: "youth-mentorship",
    title: "Youth Mentorship",
    short: "Guiding the next generation",
    summary:
      "Mentorship that helps young people develop character, skills, faith, confidence, and a clear sense of direction.",
    body: [
      "Bungoma's young people need trusted adults who will listen, encourage, guide, and help them navigate questions about education, work, relationships, faith, and purpose.",
      "Our mentorship work brings together life skills, career guidance, Christian discipleship, and practical conversations about the future.",
      "We welcome volunteer mentors from churches, institutions, campuses, and the diaspora who can commit to meaningful relationships and consistent service.",
    ],

    // Use an approved non-identifying activity/environment image.
    image: "/images/mentorship/mentorship-programme.jpg",

    imageAlt:
      "A community mentorship setting representing youth development and guidance",

    icon: "users",
  },

  {
    slug: "faith",
    title: "Faith, Evangelism & Discipleship",
    short: "Christ at the centre",
    summary:
      "The Gospel is not an add-on. We preach Christ, make disciples, and encourage habits of prayer, Scripture, and service.",
    body: [
      "Brook of Destiny Foundation is unapologetically Christian. We believe lasting community transformation begins with lives made new in Jesus Christ — and that faith expresses itself through practical love and service.",
      "We support local churches in Lugulu and surrounding communities through evangelism, Bible study, prayer, and discipleship.",
      "Churches and mission partners are invited to labour with us through both community outreach and long-term discipleship.",
    ],

    image: "/images/events/poster-2026.jpg",

    imageAlt:
      "Brook of Destiny Foundation Christian community outreach and worship",

    icon: "book",
  },

  {
    slug: "health",
    title: "Health & Psychosocial Support",
    short: "Care for body and mind",
    summary:
      "Community health outreach, referral support, and psychosocial care for individuals and families facing hardship.",
    body: [
      "Health in our communities can be affected by distance, cost, limited information, and stigma. We work alongside community health volunteers and local partners to promote awareness, outreach, referrals, and access to appropriate services.",
      "Psychosocial support is part of this work. Families and individuals experiencing grief, hardship, or difficult circumstances need opportunities to be heard and supported.",
      "Medical professionals, counsellors, community health workers, and partners who can support outreach activities are welcome to work with us.",
    ],

    // Replace with an approved adult/community-health image.
    image: "/images/team/interview-01.jpg",

    imageAlt:
      "Community outreach and conversation with residents in Bungoma County",

    icon: "stethoscope",
  },

  {
    slug: "livelihoods",
    title: "Livelihoods & Agribusiness",
    short: "Work that feeds a family",
    summary:
      "Training and practical support for small farms, household enterprises, food production, and village-level economic activity.",
    body: [
      "Many families around Lugulu depend on farming and small enterprises. Practical skills, better planning, appropriate inputs, and stronger markets can contribute to household resilience.",
      "We provide training around agribusiness, record keeping, savings, stewardship, food production, and household enterprises.",
      "Agronomists, business mentors, financial partners, and supporters who can help fund demonstration projects are welcome.",
    ],

    image: "/images/farming/tree-planting-02.jpg",

    imageAlt:
      "Farmers working with crops in the green highlands of Bungoma County",

    icon: "sprout",
  },

  {
    slug: "parenting",
    title: "Parenting",
    short: "Strengthening the first classroom",
    summary:
      "Practical conversations that strengthen families and help caregivers raise children with faith, discipline, dignity, and care.",
    body: [
      "A healthy family environment plays an important role in a child's development. Many caregivers want to do well and benefit from encouragement, practical tools, and supportive community relationships.",
      "We facilitate parenting conversations around positive discipline, communication, faith, family wellbeing, and practical challenges facing caregivers.",
      "This work needs facilitators, churches, community leaders, and partners willing to support longer-term family-strengthening initiatives.",
    ],

    // Use adults, facilitators, materials, or an environment rather than children.
    image: "/images/community-01.jpg",

    imageAlt:
      "Community setting representing family strengthening and parenting support",

    icon: "heart",
  },

  {
    slug: "ovc",
    title: "Orphans & Vulnerable Children",
    short: "Strengthening families around vulnerable children",
    summary:
      "Family-centred support that helps vulnerable children remain connected to safe caregivers, education, protection, and community.",
    body: [
      "Some families in our communities face the loss of parents, illness, poverty, or other circumstances that place additional pressure on caregivers and children.",
      "We seek to strengthen the family and caregiver around a vulnerable child through education support, food assistance where needed, psychosocial support, referrals, and community relationships.",
      "We believe vulnerable children should be treated with dignity and protected from unnecessary exposure. Our public communications therefore prioritise safeguarding, privacy, and family dignity.",
      "Partners can support family-strengthening initiatives, education resources, household assistance, and safeguarding systems.",
    ],

    // Do NOT use a photo of an identifiable vulnerable child.
    image: "/images/farming/tree-planting-01.jpg",

    imageAlt:
      "Community members working together, representing family and community support",

    icon: "home",
  },

  {
    slug: "community-development",
    title: "Community Development",
    short: "The village made stronger",
    summary:
      "Community-led initiatives that strengthen local relationships, resilience, shared responsibility, and practical development.",
    body: [
      "Holistic ministry includes the path, the environment, the meeting place, the household, and the relationships that hold a community together.",
      "We convene community conversations and work alongside residents on practical improvements they identify themselves.",
      "This may include sanitation activities, tree planting, peace conversations, community organisation, training, or support for local groups.",
      "We move at the pace of trust and seek partnerships that strengthen communities for the long term.",
    ],

    image: "/images/community-01.jpg",

    imageAlt:
      "Community landscape and local development setting in Bungoma County",

    icon: "trees",
  },
];

export function getProgramme(slug: string): Programme | undefined {
  return PROGRAMMES.find((p) => p.slug === slug);
}

export const VALUES = [
  {
    title: "Christ at the centre",
    body: "We confess Jesus Christ as Lord. Evangelism, discipleship, and prayer are not a department — they are the well from which the rest of the work is drawn.",
  },
  {
    title: "Dignity, not pity",
    body: "Every person we serve bears the image of God. We refuse poverty-porn. We tell the truth about need, and we tell it with honour.",
  },
  {
    title: "Holistic care",
    body: "A scholarship without discipleship, or a sermon without bread, is half a gospel. We hold faith, education, health, and livelihoods together.",
  },
  {
    title: "Partnership",
    body: "We are still building capacity. Churches, local leaders, diaspora friends, and institutions who will walk with us for the long season are our strategy — not a footnote.",
  },
];

export const INVOLVE_PATHS = [
  {
    title: "Volunteer",
    body: "Give a season of presence in Lugulu — teaching, mentoring, health outreach, agribusiness, counselling, or administration.",
    to: "/contact" as const,
    cta: "Offer your time",
  },
  {
    title: "Support education",
    body: "Help provide school fees, learning materials, mentoring, and other education support while respecting the privacy and dignity of the learners we serve.",
    to: "/donate" as const,
    cta: "Support education",
  },
  {
    title: "Partner as a church or organisation",
    body: "Mission teams, community initiatives, joint outreaches, and multi-year programme support. We prefer relationships to one-off visits.",
    to: "/contact" as const,
    cta: "Start a conversation",
  },
  {
    title: "Give skills or funding",
    body: "Governance, accounting, agronomy, medicine, curriculum, counselling, safeguarding, and the funds that keep field work moving.",
    to: "/donate" as const,
    cta: "Give or offer skills",
  },
];

export const STORIES = [
  {
    title: "Classrooms that stay open",
    image: "/images/education/education-programme.jpg",
    imageAlt:
      "Education materials and a learning environment representing the Foundation's education programme",
    body: "When financial barriers interrupt education, a young person's progress can be affected. Our education work focuses on practical support, mentoring, school engagement, and long-term encouragement — while protecting the privacy and dignity of the learners we serve.",
  },

  {
    title: "Circles that build confidence",
    image: "/images/community-01.jpg",
    imageAlt:
      "A community setting representing mentorship and relationship building",
    body: "Mentorship is built on listening, encouragement, guidance, and trust. We create spaces where young people can develop character, explore their gifts, and think carefully about their future.",
  },

  {
    title: "Jackets on the path",
    image: "/images/team/colleagues-01.jpg",
    imageAlt:
      "Brook of Destiny Foundation volunteers participating in community outreach",
    body: "You will know our volunteers by the reflective jackets and by the time they take. Outreach is not a photograph. It is a conversation, a referral, a prayer, and a return visit.",
  },

  {
    title: "Fields that feed more than hunger",
    image: "/images/farming/tree-planting-01.jpg",
    imageAlt:
      "Community members participating in agricultural and environmental activities",
    body: "Livelihoods training treats farming as calling and craft. Practical knowledge, stewardship, and stronger household enterprises can help communities become more resilient.",
  },
];
