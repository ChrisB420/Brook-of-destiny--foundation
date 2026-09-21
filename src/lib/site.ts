// src/lib/site.ts

export const SITE = {
  name: "Brook of Destiny Foundation",
  shortName: "Brook of Destiny",
  tagline: "Nurturing Destinies, Transforming Communities.",
  domain: "brookofdestinyfoundation.com",
  email: "brookofdestiny@gmail.com",

  phoneLabel: "Email or the form — we reply personally",

  location: {
    town: "Webuye",
    area: "Webuye East Sub-County",
    county: "Bungoma County",
    country: "Kenya",
    line: "Webuye East, Bungoma County, Kenya",
    note: "Along the Webuye–Kitale Road.",
  },

  giving: {
    paybill: "522533",
    mpesaAccount: "8103797",
    accountName: "Brook of Destiny Foundation",
    bank: "KCB Bank",
    bankAccount: "1353143589",
  },

  social: {
  facebook: "https://www.facebook.com/share/1Eafzazcv3/",
  tiktok: "https://vm.tiktok.com/ZS9ASgbdHPBRs-oc8kB/",
    instagram: "https://www.instagram.com/brookofdestinyfoundation",
    youtube:
      "https://youtube.com/@brookofdestinyfoundation?si=1ljmyn8UQP974fPM",
  },

  verse: {
    text:
      "They are like trees planted by streams of water, which yield their fruit in its season.",
    ref: "Psalm 1:3",
  },
} as const;

/* -------------------------------------------------------------------------- */
/* Navigation                                                                  */
/* -------------------------------------------------------------------------- */

export const NAV = [
  { to: "/about" as const, label: "About" },
  { to: "/team" as const, label: "Our Team" },
  { to: "/programmes" as const, label: "Programmes" },
  { to: "/impact" as const, label: "Impact" },
  { to: "/get-involved" as const, label: "Get Involved" },
  { to: "/contact" as const, label: "Contact" },
];

/* -------------------------------------------------------------------------- */
/* Programme Types                                                             */
/* -------------------------------------------------------------------------- */

export type ProgrammeSlug =
  | "education"
  | "youth-mentorship"
  | "faith"
  | "health"
  | "livelihoods"
  | "parenting"
  | "ovc"
  | "community-development";

export type ProgrammeIcon =
  | "graduation"
  | "users"
  | "book"
  | "stethoscope"
  | "sprout"
  | "heart"
  | "home"
  | "trees";

export type ProgrammeImage = {
  src: string;
  alt: string;
  featured?: boolean;
  className?: string;
};

export type Programme = {
  slug: ProgrammeSlug;
  title: string;
  short: string;
  summary: string;
  body: string[];
  image: string;
  imageAlt: string;
  images?: ProgrammeImage[];
  video?: string;
  icon: ProgrammeIcon;
};

/* -------------------------------------------------------------------------- */
/* Programmes                                                                  */
/* -------------------------------------------------------------------------- */

export const PROGRAMMES: Programme[] = [
 {
  slug: "education",

  title: "Education & Scholarship Support",

  short: "Walk with a child. Nurture a destiny.",

  summary:
    "Helping vulnerable learners stay in school through educational assistance, mentorship, encouragement, and practical support for a brighter future.",

  body: [
    "Every child carries God-given potential, a dream, and a future worth protecting. Yet for some children, the journey through education is interrupted—not because they lack ability, but because of circumstances beyond their control.",

    "School fees, uniforms, books, examination costs, learning materials, and other basic needs can become barriers that keep a child away from the classroom. At Brook of Destiny Foundation, we believe that supporting a child's education is an investment in a life and in the future of a community.",

    "Through our Education & Scholarship Programme, we identify vulnerable learners and walk alongside them with educational assistance, mentorship, encouragement, and practical support as they pursue their studies.",

    "Our goal is to move beyond a one-time contribution and build a meaningful journey of support. We want to help children remain in school, overcome challenges, complete their studies, discover their gifts, and prepare for their future.",

    "Partners can choose to support one learner or several learners for a term, a year, or, where possible, throughout their educational journey. Support may contribute toward school fees, uniforms, books, learning materials, examination needs, mentorship, and career guidance.",

    "More importantly, sponsorship communicates something every child deserves to hear: 'Your future matters. You are not walking this journey alone.'",

    "We believe education is more than passing examinations. It is about nurturing character, confidence, responsibility, faith, skills, and hope. Through mentorship and encouragement, we seek to walk with learners beyond the classroom and help them prepare for meaningful futures.",

    "The Bible reminds us of the importance of compassion and generosity: 'Whoever is kind to the poor lends to the LORD, and he will reward them for what they have done.' — Proverbs 19:17.",

    "We cannot promise what form God's reward will take, but Scripture assures us that He sees acts of compassion and values generosity toward those in need.",

    "Walk with a child. Support their education. Nurture their destiny. Your partnership can help transform a difficult beginning into a journey of hope, learning, opportunity, and possibility.",
  ],

  image: "/images/education/education-02.jpeg",

  imageAlt:
    "Young learners studying with a mentor in a classroom in western Kenya",

  images: [
    {
      src: "/images/education/education-01.jpeg",
      alt: "Young learners studying together in a classroom",
    },

    // Scholarship photos
    {
      src: "/images/education/scholarship-01.jpeg",
      alt: "A learner receiving educational scholarship support from Brook of Destiny Foundation",
      featured: true,
      className: "object-top",
    },

    // Sponsorship photos
    {
      src: "/images/education/sponsorship-01.jpeg",
      alt: "A child receiving support through the Brook of Destiny Foundation sponsorship programme",
    },
    {
      src: "/images/education/sponsorship-02.jpeg",
      alt: "Educational sponsorship helping a vulnerable learner continue their studies",
    },

    // Donation photos
    {
      src: "/images/education/donation-01.jpeg",
      alt: "Educational supplies being provided to support vulnerable learners",
    },
    {
      src: "/images/education/donation-02.jpeg",
      alt: "Donated learning materials being provided to children through the education programme",
    },
    {
      src: "/images/education/donation-03.jpeg",
      alt: "Community members receiving donated educational support from Brook of Destiny Foundation",
    },
  ],

  video: "/videos/education/classroom-tour-01.mp4",

  icon: "graduation",
},


  {
    slug: "youth-mentorship",

    title: "Youth Mentorship",

    short: "Guiding the next generation",

    summary:
      "Discipleship-shaped mentoring for teenagers and young adults—character, life skills, faith, career guidance, and a clear path beyond school.",

    body: [
      "Young people need more than encouragement from a distance. They need trusted adults who will listen to them, pray with them, guide them, challenge them, and walk alongside them as they navigate important decisions.",

      "Our youth mentorship programme creates safe spaces where teenagers and young adults can discuss faith, character, relationships, education, work, purpose, leadership, and the challenges they face.",

      "We combine practical life skills, career guidance, Christian discipleship, and personal development to help young people understand their gifts and use them responsibly.",

      "Mentorship may happen in schools, churches, community spaces, halls, or informal gatherings under the trees. What matters most is consistent presence and genuine relationship.",

      "We welcome volunteer mentors from churches, campuses, professional communities, and the diaspora who can commit to a meaningful season of presence rather than a one-day event.",
    ],

    image: "/images/education/classroom-04.jpg",

    imageAlt:
      "Young people participating in a mentorship session in western Kenya",

    images: [
      {
        src: "/images/education/classroom-04.jpg",
        alt: "Young people learning together during a mentorship session",
      },
    ],

    icon: "users",
  },

 {
    slug: "faith",

    title: "Faith, Evangelism & Kingdom Transformation",

    short: "Christ at the centre, faith in action",

    summary:
      "Christ-centered evangelism, discipleship, church strengthening, leadership development, and practical Kingdom initiatives that help churches and communities grow in faith and service.",

    body: [
      "Brook of Destiny Foundation is unapologetically Christian. We believe that lasting transformation begins with lives renewed through Jesus Christ and that genuine faith expresses itself through love, compassion, service, stewardship, and responsibility.",

      "Our vision for transformation therefore extends beyond individual spiritual growth. We desire to see Christ-centered individuals, families, and local churches become healthy, equipped, and effective agents of transformation within their communities.",

      "We work alongside churches and Christian communities through evangelism, Bible study, prayer, discipleship, leadership development, and follow-up of new believers.",

      "We also believe that strong churches need capacity to serve their communities effectively. Through strategic partnerships, we seek to strengthen local churches with relevant knowledge, leadership, and practical resources, helping them grow in their ability to carry out the mission of God and contribute to the well-being of their communities.",

      "Where opportunities arise, our Kingdom Empowerment initiatives may support practical community needs through projects such as construction and improvement of church and community facilities, provision of safe water through water and borehole projects, educational and livelihood initiatives, and other community infrastructure that enables churches to serve people with dignity and sustainability.",

      "Our approach connects faith with practical transformation. Education, health, livelihoods, parenting, child protection, clean water, and community development are not separate from our Christian identity; they provide opportunities to demonstrate the love of Christ through responsible and compassionate service.",

      "We desire to see churches move from simply gathering people to becoming equipped centres of hope, discipleship, service, and community transformation—reflecting the values of the Kingdom of God in their communities.",

      "We therefore welcome churches, mission agencies, Christian organizations, donors, professionals, and other partners to labour with us through prayer, evangelism, discipleship, leadership development, capacity building, teaching, community projects, and long-term strategic partnerships.",

      "For we are his workmanship, created in Christ Jesus for good works, which God prepared beforehand, that we should walk in them. — Ephesians 2:10.",

      "Building People. Strengthening Churches. Empowering Communities. Advancing the Kingdom of God.",
    ],

    image: "/images/faith/bible-01.jpeg",

    imageAlt:
      "Bibles being provided during a Christian faith and discipleship initiative",

    images: [
      {
        src: "/images/faith/bible-01.jpeg",
        alt: "Bibles presented during a Christian faith initiative",
      },
      {
        src: "/images/faith/bible-02.jpeg",
        alt: "Bibles being prepared for Christian outreach",
      },
      {
        src: "/images/faith/bible-03.jpeg",
        alt: "Christian ministry partners supporting Bible distribution",
      },
      {
        src: "/images/faith/bible-04.jpeg",
        alt: "Participants receiving Bibles during a discipleship initiative",
      },
    ],

    icon: "book",
  },

{
    slug: "health",

    title: "Health & Psychosocial Support",

    short: "Healthy people, strong families",

    summary:
      "Promoting health education, preventive care, nutrition, sanitation, medical outreach, appropriate referrals, and psychosocial support for individuals and families.",

    body: [
      "At Brook of Destiny Foundation, we believe that healthy individuals and families are better equipped to learn, work, raise children, and contribute meaningfully to their communities. Our health programme takes a holistic approach, addressing not only illness, but also prevention, healthy living, nutrition, sanitation, emotional well-being, and access to appropriate care.",

      "We work with health professionals, community health workers, medical facilities, churches, and other partners to bring essential health information and services closer to communities that may face barriers such as cost, distance, limited information, or stigma.",

      "Our activities may include community medical camps and health outreach programmes designed to respond to health conditions and needs affecting communities. Through these initiatives, we seek to facilitate health education, basic screening and early identification of health concerns, appropriate referrals, preventive health services, and follow-up support.",

      "We also promote practical knowledge on hygiene, sanitation, clean and safe water, nutrition, maternal and child health, disease prevention, and healthy family practices. Our aim is to empower individuals and families with information that can help them make informed decisions and prevent avoidable health challenges.",

      "Recognising that health extends beyond the physical, we provide psychosocial support to children, young mothers, caregivers, and families experiencing grief, poverty, illness, displacement, or other difficult circumstances. We offer compassionate listening, encouragement, and appropriate referrals to qualified professionals and specialised services where necessary.",

      "Through partnerships, we seek to strengthen community capacity to identify health challenges early, promote preventive care, and connect people with appropriate medical and psychosocial services.",

      "Medical professionals, nurses, clinical officers, counsellors, nutritionists, community health workers, health institutions, churches, donors, and other partners are invited to join us in expanding access to health education, medical outreach, screening, preventive care, nutrition, sanitation, and psychosocial support.",

      "Healthy People. Strong Families. Resilient Communities.",
    ],

    image: "/images/feeding/distribution-02.jpg",

    imageAlt:
      "Community health volunteers speaking with residents during a community outreach",

    video: "/videos/feeding/feeding-kids.mp4",

    icon: "stethoscope",
  },

 {
    slug: "livelihoods",

    title: "Livelihoods, Agribusiness & Economic Empowerment",

    short: "Equip people. Create opportunities.",

    summary:
      "Equipping individuals, families, and community groups with practical skills, agribusiness knowledge, entrepreneurship opportunities, and resources that support sustainable livelihoods and greater self-reliance.",

    body: [
      "At Brook of Destiny Foundation, we believe lasting transformation includes equipping people with the skills, opportunities, and resources to build sustainable livelihoods and greater self-reliance.",

      "Our programme supports individuals, families, and community groups through practical agribusiness and entrepreneurship initiatives, including climate-smart farming, kitchen gardening, poultry, livestock, value addition, financial literacy, savings, record keeping, vocational and digital skills, and small-enterprise development.",

      "We seek to move beyond short-term assistance by building capacity, connecting people to markets and technical expertise, and, where resources allow, providing starter support and linking promising initiatives with appropriate financial and development partners.",

      "Our broader mission is to empower young people, women, families, and communities to develop their God-given potential, create dignified economic opportunities, and responsibly steward the resources entrusted to them.",

      "We welcome farmers, agronomists, business professionals, financial institutions, trainers, investors, churches, development organizations, and other partners to join us in creating sustainable pathways from vulnerability to resilience.",

      "The plans of the diligent lead surely to abundance. — Proverbs 21:5.",

      "Equip People. Create Opportunities. Build Sustainable Livelihoods. Transform Communities.",
    ],

    image: "/images/farming/tree-planting-02.jpg",

    imageAlt:
      "Community members participating in agricultural and livelihood activities in Bungoma County",

    images: [
      {
        src: "/images/farming/tree-planting-01.jpg",
        alt: "Community members participating in an agricultural and environmental activity",
      },
      {
        src: "/images/farming/tree-planting-02.jpg",
        alt: "Farmers working on a community agricultural activity",
      },
    ],

    icon: "sprout",
  },

  {
    slug: "parenting",

    title: "Parenting",

    short: "Strengthening the first classroom",

    summary:
      "Helping parents and caregivers raise children with faith, discipline, compassion, protection, and practical support.",

    body: [
      "A child's first environment for learning, character formation, and belonging is the home. Parents and caregivers therefore play a central role in shaping a child's future.",

      "Many parents genuinely want to raise their children well but face pressures related to poverty, loss, work, family conflict, and limited access to practical parenting resources.",

      "Our parenting programme creates opportunities for mothers, fathers, guardians, and caregivers to learn, share experiences, ask questions, and receive practical guidance.",

      "Sessions may address positive discipline, communication, child protection, faith formation, emotional wellbeing, family relationships, and practical ways of supporting children in school.",

      "We also seek to support caregivers who are raising children who are not biologically their own, recognising the important role they play in providing stability and belonging.",
    ],

    image: "/images/mentorship/parenting-01.jpeg",

    imageAlt:
      "Adults gathered for a parenting teaching and discussion session",

    images: [
      {
        src: "/images/mentorship/parenting-01.jpeg",
        alt: "Parents and caregivers participating in a parenting discussion",
      },
    ],

    icon: "heart",
  },

  {
    slug: "ovc",

    title: "Orphans & Vulnerable Children",

    short: "A family around every child",

    summary:
      "Supporting orphans and vulnerable children through education, food support, protection, psychosocial care, and stronger family networks.",

    body: [
      "Some children we encounter have lost one or both parents. Others live with grandparents, older siblings, relatives, or caregivers who are themselves facing significant hardship.",

      "Our approach is centred on the child while strengthening the family and caregiver around them. We believe children deserve safety, belonging, education, care, and the opportunity to grow in a stable environment.",

      "Support may include school assistance, food support during difficult periods, psychosocial support, essential items, mentorship, household visits, and appropriate referrals.",

      "Where a child may be at risk, we work with relevant local structures, caregivers, churches, and appropriate authorities to promote their safety and wellbeing.",

      "Child sponsorship, caregiver support, gifts in kind, and long-term partnerships can help us extend this work to more vulnerable children.",
    ],

    image: "/images/team/community-02.jpeg",

    imageAlt:
      "Learners receiving teaching, care, and support in a community setting",

    images: [
      {
        src: "/images/team/community-02.jpeg",
        alt: "Children and young people participating in a learning activity",
      },
    ],

    icon: "home",
  },

  {
    slug: "community-development",

    title: "Community Development",

    short: "The community made stronger",

    summary:
      "Working with residents, churches, local leaders, and partners on practical initiatives that strengthen communities and promote the common good.",

    body: [
      "Holistic community transformation includes the places where people live, work, learn, worship, and raise their families.",

      "We bring residents and local partners together to identify practical needs and explore solutions that communities can own and sustain.",

      "Activities may include community dialogues, sanitation initiatives, tree planting, environmental activities, peacebuilding conversations, group development, and other locally identified projects.",

      "We believe sustainable development begins with listening. Rather than imposing solutions, we seek to move at the pace of trust and work alongside communities on priorities they understand and value.",

      "Churches, county and community partners, organizations, and friends who want to support specific local projects are welcome to begin a conversation with us.",
    ],

    image: "/images/team/community-03.jpeg",

    imageAlt:
      "Community members participating in a development activity in Bungoma County",

    images: [
      {
        src: "/images/team/community-03.jpeg",
        alt: "Community members working together on a local development initiative",
      },
    ],

    icon: "trees",
  },
];

/* -------------------------------------------------------------------------- */
/* Programme Helpers                                                           */
/* -------------------------------------------------------------------------- */

export function getProgramme(
  slug: string
): Programme | undefined {
  return PROGRAMMES.find((programme) => programme.slug === slug);
}

export function isProgrammeSlug(
  slug: string
): slug is ProgrammeSlug {
  return PROGRAMMES.some((programme) => programme.slug === slug);
}

/* -------------------------------------------------------------------------- */
/* Values                                                                      */
/* -------------------------------------------------------------------------- */

export const VALUES = [
  {
    title: "Christ at the centre",

    body:
      "We confess Jesus Christ as Lord. Prayer, evangelism, discipleship, Scripture, and practical service shape how we approach every part of our work.",
  },

  {
    title: "Dignity, not pity",

    body:
      "Every person we serve bears the image of God. We seek to communicate need honestly and respectfully, protecting the dignity and privacy of the people entrusted to our care.",
  },

  {
    title: "Holistic care",

    body:
      "We recognise that people have interconnected spiritual, educational, physical, emotional, social, and economic needs. Our programmes seek to respond to the whole person and family.",
  },

  {
    title: "Partnership",

    body:
      "We believe lasting change grows through relationships. Churches, local leaders, families, professionals, organizations, and friends at home and abroad can each contribute to the work.",
  },

  {
    title: "Stewardship",

    body:
      "We seek to use every resource responsibly and purposefully, building programmes that serve people well while strengthening the Foundation's long-term capacity.",
  },

  {
    title: "Compassion in action",

    body:
      "Compassion is more than words. We seek practical ways to stand with children, families, and communities when they face difficult circumstances.",
  },
];

/* -------------------------------------------------------------------------- */
/* Get Involved                                                                */
/* -------------------------------------------------------------------------- */

export const INVOLVE_PATHS = [
  {
    title: "Volunteer",

    body:
      "Give your time and skills to support education, mentoring, health outreach, agribusiness, counselling, administration, or community development.",

    to: "/contact" as const,

    cta: "Offer your time",
  },

  {
    title: "Sponsor a learner",

    body:
      "Walk with a vulnerable learner through school fees, books, uniforms, examination needs, mentorship, and encouragement.",

    to: "/donate" as const,

    cta: "Sponsor a learner",
  },

  {
    title: "Partner as a church or organisation",

    body:
      "Partner with us through mission teams, joint outreaches, mentorship, discipleship, programme support, or longer-term collaboration.",

    to: "/contact" as const,

    cta: "Start a conversation",
  },

  {
    title: "Give skills or funding",

    body:
      "Support the work through professional expertise, training, equipment, programme funding, or a financial gift that helps keep community work moving.",

    to: "/donate" as const,

    cta: "Give or offer skills",
  },
];

/* -------------------------------------------------------------------------- */
/* Stories / Impact                                                            */
/* -------------------------------------------------------------------------- */

export const STORIES = [
  {
    title: "Classrooms that stay open",

    image: "/images/education/classroom-02.jpg",

    imageAlt:
      "Students and a mentor participating in a classroom learning session",

    body:
      "When financial hardship keeps a learner away from school, an important part of their journey is interrupted. Through education support and mentorship, we seek to help vulnerable learners remain in school and continue pursuing their dreams.",
  },

  {
    title: "Circles under the trees",

    image: "/images/mentorship/circle-02.jpg",

    imageAlt:
      "Young people seated together during an outdoor mentorship session",

    body:
      "Mentorship does not always require a conference hall. Sometimes it begins with trusted adults sitting with young people, listening to their questions, opening Scripture, and helping them think about character, purpose, education, and the future.",
  },

  {
    title: "Jackets on the path",

    image: "/images/team/colleagues-01.jpg",

    imageAlt:
      "Volunteers in reflective jackets engaging with community members",

    body:
      "Community outreach is more than a photograph. It is a conversation at a homestead, a referral, a prayer, a practical response, and sometimes a return visit to see how a family is doing.",
  },

  {
    title: "Fields that feed more than hunger",

    image: "/images/farming/tree-planting-01.jpg",

    imageAlt:
      "Community members participating in agricultural and environmental activities",

    body:
      "Livelihoods work connects practical skills with stewardship. Through agriculture, enterprise development, savings, and responsible use of resources, we seek to help families build greater resilience and opportunity.",
  },
];

/* -------------------------------------------------------------------------- */
/* Education & Scholarship Campaign                                            */
/* -------------------------------------------------------------------------- */

export const EDUCATION_SUPPORT = {
  title: "Walk With a Child. Nurture a Destiny.",

  subtitle:
    "Your support can help a vulnerable learner remain in school, overcome barriers, and prepare for a brighter future.",

  introduction:
    "Every child carries God-given potential, a dream, and a future worth protecting. Yet for some children, education is interrupted by circumstances they cannot control.",

  supportAreas: [
    "School fees",
    "School uniforms",
    "Books and learning materials",
    "Examination-related needs",
    "Educational supplies",
    "Mentorship and encouragement",
    "Career guidance",
  ],

  partnershipMessage:
    "You can support one learner or several learners for a term, a year, or, where possible, throughout their educational journey.",

  childMessage:
    "Your future matters. You are not walking this journey alone.",

  scripture: {
    text:
      "Whoever is kind to the poor lends to the LORD, and he will reward them for what they have done.",
    ref: "Proverbs 19:17",
  },

  callsToAction: [
    {
      label: "Sponsor a Learner",
      to: "/donate" as const,
    },

    {
      label: "Become a Mentor",
      to: "/contact" as const,
    },

    {
      label: "Partner With Us",
      to: "/contact" as const,
    },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/* Giving                                                                      */
/* -------------------------------------------------------------------------- */

export const GIVING = {
  title: "Give Toward a Child's Future",

  intro:
    "Your generosity can help provide practical support to vulnerable children, families, and communities through the work of Brook of Destiny Foundation.",

  methods: [
    {
      title: "M-Pesa PayBill",

      provider: "M-Pesa",

      paybill: SITE.giving.paybill,

      account: SITE.giving.mpesaAccount,

      accountName: SITE.giving.accountName,

      instruction:
        "Use the PayBill number above and enter the Foundation's M-Pesa account number when prompted.",
    },

    {
      title: "Bank Transfer",

      provider: SITE.giving.bank,

      account: SITE.giving.bankAccount,

      accountName: SITE.giving.accountName,

      instruction:
        "Use the account details above when making a bank transfer to support the Foundation's programmes.",
    },
  ],

  educationNote:
    "If you would specifically like your gift to support education and scholarship assistance, please indicate 'Education & Scholarship Support' when contacting us or submitting your giving information.",

  transparency:
    "We are committed to responsible stewardship and to using resources purposefully to serve children, families, and communities.",
} as const;

/* -------------------------------------------------------------------------- */
/* Contact                                                                      */
/* -------------------------------------------------------------------------- */

export const CONTACT = {
  email: SITE.email,

  location: SITE.location.line,

  responseMessage:
    "Email or use the contact form and our team will respond personally.",

  partnershipMessage:
    "Whether you want to sponsor a learner, volunteer your skills, partner as a church or organisation, or support a community project, we would be glad to hear from you.",
} as const;

/* -------------------------------------------------------------------------- */
/* Footer                                                                      */
/* -------------------------------------------------------------------------- */

export const FOOTER = {
  mission:
    "Brook of Destiny Foundation exists to nurture God-given potential, strengthen vulnerable families, and contribute to transformed communities through practical Christian service.",

  verse: SITE.verse,

  copyright:
    `© ${new Date().getFullYear()} Brook of Destiny Foundation. All rights reserved.`,
} as const;
