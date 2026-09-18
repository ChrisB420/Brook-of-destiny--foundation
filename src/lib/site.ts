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
    youtube:"https://youtube.com/@brookofdestinyfoundation?si=1ljmyn8UQP974fPM",
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
      "School fees, uniforms, books and mentoring so that bright children in Lugulu and across Bungoma County are not sent home for lack of means.",
    body: [
      "Education is one of the surest ways a destiny is protected. In Webuye West and the villages around Lugulu, many capable learners still miss terms because of school fees, exam levies, or the quiet cost of a uniform and a set of books.",
      "We walk with selected learners and families — paying what is needed, visiting schools, and pairing each scholarship with a mentor so that support is more than a receipt. We want young people who finish, not only those who start.",
      "Partners can sponsor a learner for a term or a year, gift examination kits, or help us grow a revolving scholarship fund as the Foundation builds its capacity.",
    ],
    image: "/images/education/classroom-02.jpg",
    imageAlt:
      "Young people studying with a mentor in a sunlit classroom in western Kenya",
    video: "/videos/education/classroom-tour-01.mp4",
    icon: "graduation",
  },
  {
    slug: "youth-mentorship",
    title: "Youth Mentorship",
    short: "Guiding the next generation",
    summary:
      "Discipleship-shaped mentoring for teenagers and young adults — character, skills, faith, and a clear path after school.",
    body: [
      "Bungoma’s young people are hungry for more than slogans. They need trusted adults who will sit with them, pray with them, and tell the truth about work, relationships, and calling.",
      "Our mentorship circles gather under trees, in halls, and after Sunday meetings. We mix life skills, career guidance, and Christian discipleship — helping youth read their gifts in the light of Scripture and the needs of their community.",
      "We welcome volunteer mentors from churches, campuses, and the diaspora who can commit to a season of presence, not a one-day event.",
    ],
    image: "/images/mentorship/classroom-04.jpg",
    imageAlt:
      "A youth mentorship circle seated under a tree in the western Kenya highlands",
    icon: "users",
  },
  {
    slug: "faith",
    title: "Faith, Evangelism & Discipleship",
    short: "Christ at the centre",
    summary:
      "The Gospel is not an add-on. We preach Christ, make disciples, and plant habits of prayer, Scripture, and service in every programme.",
    body: [
      "Brook of Destiny Foundation is unapologetically Christian. We believe lasting community transformation begins with lives made new in Jesus Christ — and that faith without practical love is empty.",
      "We support local churches in Lugulu and surrounding congregations with evangelism outreaches, Bible study, and discipleship of new believers. Field activities open with prayer; scholarships and livelihoods are framed as stewardship, not luck.",
      "Churches and mission partners are invited to labour with us: crusades and quiet follow-up, pulpits and kitchen tables, the Word and a sack of seed.",
    ],
    image: "/images/events/poster-2026.jpg",
    imageAlt:
      "A congregation gathered in worship under an open-air shelter in rural Kenya",
    icon: "book",
  },
  {
    slug: "health",
    title: "Health & Psychosocial Support",
    short: "Care for body and mind",
    summary:
      "Community health outreach, referral support, and counselling for families carrying grief, trauma, or the weight of daily hardship.",
    body: [
      "Health in our villages is often a matter of distance, cost, and stigma. We work alongside community health volunteers — many in reflective jackets you will see in our field photos — to run outreach days, share accurate information, and help families reach clinics when they must.",
      "Psychosocial support sits beside the medical. Orphans, young mothers, and caregivers need someone who will listen. We train lay counsellors and walk with those who need more specialised care.",
      "We are still building this work. Medical professionals, counsellors, and partners who can supply kits or fund a clinic day are needed.",
    ],
    image: "/images/feeding/distribution-02.jpg",
    imageAlt:
      "Community health volunteers in reflective jackets speaking with residents under a shade tent",
    video: "videos/feeding/feeding-kids.mp4",
    icon: "stethoscope",
  },
  {
    slug: "livelihoods",
    title: "Livelihoods & Agribusiness",
    short: "Work that feeds a family",
    summary:
      "Training and starter support for small farms and household enterprises — maize, kitchen gardens, poultry, and village trade.",
    body: [
      "Most families around Lugulu live from the land: maize, sugarcane, dairy, and kitchen gardens on the red highland soil. A modest skill, a bag of seed, or a better market can change a household’s year.",
      "We train groups in agribusiness basics — soil, record-keeping, savings, and stewardship — and help promising groups access starter inputs. The aim is dignity: families who feed themselves and tithe from increase, not permanent relief.",
      "Agronomists, SACCO partners, and friends who can fund a demonstration plot or a village savings cycle are especially welcome.",
    ],
    image: "/images/farming/tree-planting-02.jpg",
    imageAlt:
      "Farmers tending maize and vegetables in the green highlands of Bungoma County",
    icon: "sprout",
  },
  {
    slug: "parenting",
    title: "Parenting",
    short: "Strengthening the first classroom",
    summary:
      "Workshops and home visits that help mothers and fathers raise children with faith, discipline, and tenderness.",
    body: [
      "A child’s destiny is first shaped at home. Many parents in our community want to do well and have never been shown how — especially where families have been stretched by loss, work, or conflict.",
      "We run parenting conversations in halls and homesteads: listening, Scripture, practical tools for discipline without violence, and support for caregivers who are raising children that are not their own.",
      "This is quiet work. It needs facilitators, printed guides in Kiswahili and English, and churches willing to host a series rather than a single Sunday announcement.",
    ],
    image: "/images/mentorship/circle-02.jpg",
    imageAlt: "Adults gathered for a teaching and conversation circle",
    icon: "heart",
  },
  {
    slug: "ovc",
    title: "Orphans & Vulnerable Children",
    short: "A family around every child",
    summary:
      "Wrap-around care for orphans and vulnerable children — school, food, protection, and a community that will not look away.",
    body: [
      "Some of the children we meet have lost a parent. Others live with a grandmother, an older sibling, or in a home where illness and poverty have made childhood very small.",
      "We do not warehouse children. We strengthen the family or caregiver around them: school support, food in hard months, psychosocial care, and visits so that no child disappears from view. Where a child is at risk, we work with local administrators and churches.",
      "Child sponsorship, guardianship partners, and gifts in kind (blankets, sanitary pads, food parcels) make this possible as we grow.",
    ],
    image: "/images/education/classroom-07.jpg",
    imageAlt: "Learners in a classroom receiving teaching and care",
    icon: "home",
  },
  {
    slug: "community-development",
    title: "Community Development",
    short: "The village made stronger",
    summary:
      "Barazas, clean-ups, and local projects that help Lugulu and neighbouring villages act together for the common good.",
    body: [
      "Holistic ministry includes the path, the spring, the market, and the meeting under the tree. We convene community dialogues and labour alongside residents on small, visible improvements they themselves name.",
      "This may be a sanitation day, a tree-planting, a peace conversation, or helping a group register so it can receive training. We move at the pace of trust.",
      "County partners, churches, and friends abroad who prefer to fund a concrete local project — rather than a general appeal — will find a ready conversation.",
    ],
    image: "/images/community-01.jpg",
    imageAlt:
      "Rolling green highland countryside and village paths in Bungoma County",
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
    title: "Sponsor a learner",
    body: "Walk with one child or youth through school fees, books, and a mentor. You will know the name you are holding.",
    to: "/donate" as const,
    cta: "Start a sponsorship",
  },
  {
    title: "Partner as a church or organisation",
    body: "Mission teams, pulpit exchanges, joint outreaches, and multi-year programme support. We prefer relationships to one-off visits.",
    to: "/contact" as const,
    cta: "Start a conversation",
  },
  {
    title: "Give skills or funding",
    body: "Governance, accounting, agronomy, medicine, curriculum, and the funds that keep field work moving. Capacity is the gift we need most.",
    to: "/donate" as const,
    cta: "Give or offer skills",
  },
];

export const STORIES = [
  {
    title: "Classrooms that stay open",
    image: "/images/education/classroom-02.jpg",
    imageAlt: "Students and a mentor in a rural classroom",
    body: "When a learner is sent home for fees, a destiny pauses. Our education work is deliberately small and personal: we would rather walk faithfully with a few than announce numbers we cannot shepherd.",
  },
  {
    title: "Circles under the trees",
    image: "/images/mentorship/circle-02.jpg",
    imageAlt: "Youth seated in a mentorship circle outdoors",
    body: "Mentorship in Lugulu does not require a conference hall. It requires adults who will sit, listen, and open Scripture. These circles are where character is formed before careers are chosen.",
  },
  {
    title: "Jackets on the path",
    image: "/images/team/colleagues-01.jpg",
    imageAlt: "Volunteers in reflective jackets speaking with residents",
    body: "You will know our volunteers by the reflective jackets and by the time they take. Outreach is not a photograph. It is a conversation at a homestead, a referral, a prayer, a return visit.",
  },
  {
    title: "Fields that feed more than hunger",
    image: "/images/farming/tree-planting-01.jpg",
    imageAlt: "Farmers working a maize plot in Bungoma County",
    body: "Livelihoods training treats farming as calling and craft. A well-kept plot is a sermon about stewardship — and a way a household stops waiting for the next handout.",
  },
];
