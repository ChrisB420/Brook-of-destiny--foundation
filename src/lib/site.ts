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
  { to: "/get-involved" as const, label: "Get Involved" },
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

  images?: {
    src: string;
    alt: string;
  }[];

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

    image: "/images/education/education-01.jpg",

    imageAlt:
      "Young learners studying with a mentor in a classroom in western Kenya",

    images: [
      {
        src: "/images/education/classroom-02.jpg",
        alt: "Young learners studying together in a classroom",
      },
      {
        src: "/images/education/classroom-04.jpg",
        alt: "A mentor engaging young learners during an educational session",
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

    title: "Faith, Evangelism & Discipleship",

    short: "Christ at the centre",

    summary:
      "The Gospel is not an add-on. We preach Christ, make disciples, encourage prayer and Scripture, and express faith through practical service.",

    body: [
      "Brook of Destiny Foundation is unapologetically Christian. We believe lasting transformation begins with lives being renewed through Jesus Christ and that genuine faith expresses itself through love, compassion, service, and responsibility.",

      "We support local churches and Christian communities through evangelism, Bible study, prayer, discipleship, and follow-up of new believers.",

      "Our faith also shapes how we approach practical community work. Education, livelihoods, health, parenting, and child protection are opportunities to demonstrate the love of Christ through responsible service.",

      "We desire to see individuals and families grow in their knowledge of Scripture, their relationship with Christ, and their willingness to serve others.",

      "Churches, mission partners, and Christian organizations are invited to labour with us through outreach, discipleship, prayer, teaching, and long-term partnership.",
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

    short: "Care for body and mind",

    summary:
      "Community health outreach, referral support, health education, and psychosocial care for families facing hardship.",

    body: [
      "For many families, access to health services can be affected by distance, cost, limited information, and stigma. We work alongside community health volunteers and local partners to connect families with appropriate support.",

      "Our health activities may include community outreach, health education, referrals, and support for families who need help navigating available services.",

      "We also recognise the emotional and psychological weight carried by children, young mothers, caregivers, and families experiencing grief, poverty, illness, or other difficult circumstances.",

      "Psychosocial support therefore sits alongside practical health support. We seek to provide compassionate listening and appropriate referrals where specialised care is needed.",

      "Medical professionals, counsellors, community health workers, and partners who can support outreach activities are welcome to join this work.",
    ],

    image: "/images/feeding/distribution-02.jpg",

    imageAlt:
      "Community health volunteers speaking with residents during a community outreach",

    video: "/videos/feeding/feeding-kids.mp4",

    icon: "stethoscope",
  },

  {
    slug: "livelihoods",

    title: "Livelihoods & Agribusiness",

    short: "Work that feeds a family",

    summary:
      "Training and practical support for small farms and household enterprises, helping families build sustainable livelihoods and greater resilience.",

    body: [
      "Many families in Bungoma County depend on agriculture and small household enterprises for their livelihoods. A practical skill, improved farming method, access to inputs, savings, or a better market can make a meaningful difference to a household.",

      "Our livelihoods programme promotes practical agribusiness knowledge, including soil management, record keeping, savings, stewardship, kitchen gardening, poultry, and small-scale enterprise development.",

      "We seek to help individuals and groups move toward greater self-reliance and responsible stewardship of the resources entrusted to them.",

      "Where resources allow, promising groups may receive starter support, demonstration opportunities, or connections to relevant technical and financial partners.",

      "Agronomists, business professionals, SACCO partners, trainers, and supporters who can help fund practical livelihood initiatives are welcome to partner with us.",
    ],

    image: "/images/farming/tree-planting-02.jpg",

    imageAlt:
      "Farmers working on agricultural activities in Bungoma County",

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

    image: "/images/mentorship.jpg",

    imageAlt:
      "Learners receiving teaching, care, and support in a community setting",

    images: [
      {
        src: "/images/community-02.jpeg",
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

    image: "/images/team/community-02.jpeg",

    imageAlt:
      "Community members participating in a development activity in Bungoma County",

    images: [
      {
        src: "/images/team/community-02.jpeg",
        alt: "Community members working together on a local development initiative",
      },
    ],

    icon: "trees",
  },
];

export function getProgramme(
  slug: string
): Programme | undefined {
  return PROGRAMMES.find((programme) => programme.slug === slug);
}

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
};

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
};

export const CONTACT = {
  email: SITE.email,

  location: SITE.location.line,

  responseMessage:
    "Email or use the contact form and our team will respond personally.",

  partnershipMessage:
    "Whether you want to sponsor a learner, volunteer your skills, partner as a church or organisation, or support a community project, we would be glad to hear from you.",
};

export const FOOTER = {
  mission:
    "Brook of Destiny Foundation exists to nurture God-given potential, strengthen vulnerable families, and contribute to transformed communities through practical Christian service.",

  verse: SITE.verse,

  copyright:
    `© ${new Date().getFullYear()} Brook of Destiny Foundation. All rights reserved.`,
};
