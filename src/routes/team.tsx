import { createFileRoute } from "@tanstack/react-router";
import { BrookRule } from "@/components/brook-rule";
import { PageHero } from "@/components/page-hero";

const BOARD = [
  {
    name: "Moses Wangila Wanakacha",
    role: "Founder / Executive Director",
  },
  {
    name: "Titus Kundu Walucho",
    role: "Chairperson",
  },
  {
    name: "Debora Akumu Wanakacha",
    role: "Secretary",
  },
  {
    name: "Veronica Amunga Akaki",
    role: "Treasurer",
  },
  {
    name: "Timothy Luyali",
    role: "Secretary General",
  },
  {
    name: "Engineer Ferdinand Mido",
    role: "Shivachi Director",
  },
  {
    name: "Catherine Nanjala",
    role: "Director",
  },
  {
    name: "Tonny Barasa Otieno",
    role: "Director",
  },
];

export const Route = createFileRoute("/team")({
  component: Team,
  head: () => ({
    meta: [{ title: "Our Team — Brook of Destiny Foundation" }],
  }),
});

function Team() {
  return (
    <>
      <PageHero
        kicker="Our people"
        title="The team walking this out"
        lede="Brook of Destiny Foundation is guided by a board and leadership team rooted in Lugulu and committed to the long season ahead."
        image="/images/team/colleagues-01.jpg"
        imageAlt="Foundation leadership and colleagues meeting together"
        imagePosition="top"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
          Leadership & board
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
          Faces behind the work
        </h2>
        <BrookRule className="mt-4" />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BOARD.map((member) => (
            <article
              key={member.name}
              className="flex flex-col items-center rounded-2xl border border-line bg-card p-6 text-center shadow-soft"
            >
              <span className="flex size-16 items-center justify-center rounded-full bg-forest text-lg font-semibold text-gold">
                {member.name
                  .split(" ")
                  .filter(Boolean)
                  .slice(0, 2)
                  .map((part) => part[0])
                  .join("")}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-forest">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-muted">{member.role}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
