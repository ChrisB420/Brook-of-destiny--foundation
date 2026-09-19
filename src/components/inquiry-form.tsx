import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SITE } from "@/lib/site";

const INTERESTS = [
  { value: "donate", label: "I would like to give" },
  { value: "volunteer", label: "I would like to volunteer" },
  { value: "sponsor", label: "I would like to sponsor a learner" },
  { value: "partner", label: "Church / organisational partnership" },
  { value: "skills", label: "I can offer professional skills" },
  { value: "general", label: "General enquiry" },
] as const;

type Interest = (typeof INTERESTS)[number]["value"];

type Inquiry = {
  name: string;
  email: string;
  phone: string;
  interest: Interest;
  message: string;
};

export function InquiryForm({ defaultInterest = "general" }: { defaultInterest?: Interest }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState<Interest>(defaultInterest);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState<Inquiry | null>(null);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const nextName = String(fd.get("name") ?? "").trim();
    const nextEmail = String(fd.get("email") ?? "").trim();
    const nextPhone = String(fd.get("phone") ?? "").trim();
    const nextInterest = (String(fd.get("interest") ?? interest) || "general") as Interest;
    const nextMessage = String(fd.get("message") ?? "").trim();

    if (!nextName || !nextEmail || !nextMessage) {
      toast.error("Please add your name, email, and a short message.");
      return;
    }

    setSent({ name: nextName, email: nextEmail, phone: nextPhone, interest: nextInterest, message: nextMessage });
    toast.success("Your email draft is ready.");
  }

  if (sent) {
    const subject = encodeURIComponent(
      `${SITE.shortName}: ${INTERESTS.find((item) => item.value === sent.interest)?.label ?? "Enquiry"}`,
    );
    const body = encodeURIComponent(`${sent.message}\n\n— ${sent.name}\n${sent.email}\n${sent.phone}`);
    const mailto = `mailto:${SITE.email}?subject=${subject}&body=${body}`;

    return (
      <div className="rounded-2xl border border-gold/40 bg-cream p-6 shadow-soft">
        <h3 className="font-display text-2xl text-forest">Thank you, {sent.name.split(" ")[0]}.</h3>
        <p className="mt-2 text-muted">
          Your email draft is ready. Please press the button below to send it to the Foundation. Nothing is delivered until you confirm it in your email app.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button asChild>
            <a href={mailto}>Open email to {SITE.email}</a>
          </Button>
          <Button variant="outline" type="button" onClick={() => setSent(null)}>
            Write another
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="phone">Phone / WhatsApp (optional)</Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="interest">I am writing about</Label>
          <select id="interest" name="interest" value={interest} onChange={(e) => setInterest(e.target.value as Interest)} className="flex h-11 w-full rounded-md border border-line bg-card px-3 text-base text-ink shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
            {INTERESTS.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required placeholder="Tell us how you would like to walk with us." />
      </div>
      <Button type="submit" size="lg" className="self-start">Continue</Button>
      <p className="text-sm text-muted">
        This form prepares an email to {SITE.email}. Nothing is sent until you confirm it in your mail app.
      </p>
    </form>
  );
}
