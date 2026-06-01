import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  Globe, Smartphone, Cpu, Link2, Film, Sparkles, PenTool, GraduationCap,
  ArrowUpRight, ArrowRight, Mail, Github, Linkedin, Twitter,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "All Sync Solutions — Everything Connected. Everything Shipped." },
      { name: "description", content: "A boutique tech studio building websites, mobile apps, IoT, blockchain, AI, branding and capstone systems — engineered end-to-end." },
      { property: "og:title", content: "All Sync Solutions" },
      { property: "og:description", content: "Everything Connected. Everything Shipped." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const SERVICES = [
  { n: "01", icon: Globe, title: "Website Development", desc: "Fast, accessible, conversion-tuned sites built on modern stacks." },
  { n: "02", icon: Smartphone, title: "Mobile Applications", desc: "iOS & Android apps with native feel and offline-first thinking." },
  { n: "03", icon: Cpu, title: "IoT System Integration", desc: "Sensors, gateways, dashboards — wired to do real work." },
  { n: "04", icon: Link2, title: "Blockchain Integration", desc: "On-chain logic, wallets, and smart contracts, audited and shipped." },
  { n: "05", icon: Film, title: "Video & Photo Editing", desc: "Editorial-grade post for launches, reels, and brand films." },
  { n: "06", icon: Sparkles, title: "AI Integration", desc: "LLMs, RAG and agents wired into the workflows that matter." },
  { n: "07", icon: PenTool, title: "Logo & Branding", desc: "Identity systems that feel inevitable — not decorative." },
  { n: "08", icon: GraduationCap, title: "Capstone + Thesis", desc: "Full system build with documentation that defends itself." },
];

function Index() {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.animationPlayState = "running";
          (e.target as HTMLElement).classList.add("reveal");
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.12 }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const onSubmit = (e: FormEvent) => { e.preventDefault(); setSent(true); };

  // Software Development themed backgrounds — AI integration & Blockchain/Web3
  const HERO_BG = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2400&q=80";
  const ABOUT_BG = "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=2400&q=80";

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-accent selection:text-accent-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/60">
        <nav className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <span className="h-7 w-7 grid place-items-center rounded-sm bg-accent text-accent-foreground font-display font-bold">A</span>
            <span className="font-display font-bold tracking-tight">All Sync<span className="text-accent">.</span></span>
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {["Home","Services","About","Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-foreground transition-colors">{l}</a></li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden sm:inline-flex items-center gap-2 px-4 h-9 rounded-full bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity">
              Free Quote <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen pt-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-background/85 dark:bg-background/80" />
          <div className="absolute inset-0 grain" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-20 lg:pt-28 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent ticker-pulse" />
              Studio · Est. 2026 · Davao del Sur → Worldwide
            </div>
            <h1 className="mt-8 font-display font-bold leading-[0.92] text-[clamp(2.75rem,9vw,8rem)]">
              We build<br />
              <span className="italic font-light text-muted-foreground">what powers</span><br />
              tomorrow<span className="text-accent">.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base lg:text-lg text-muted-foreground leading-relaxed">
              All Sync Solutions is a small, opinionated tech studio. We design, engineer and ship
              websites, apps, IoT, blockchain, AI systems and the brand around them — without the agency theater.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#services" className="group inline-flex items-center gap-2 px-6 h-12 rounded-full bg-foreground text-background text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
                Explore Services <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-6 h-12 rounded-full border border-border text-sm font-medium hover:bg-secondary transition-colors">
                Talk to us
              </a>
            </div>
          </div>

          <aside className="lg:col-span-4 lg:pt-32">
            <div className="border border-border bg-card/60 backdrop-blur-md p-6 rounded-sm">
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Now shipping</div>
              <div className="mt-3 font-display text-2xl leading-tight">A logistics IoT dashboard for a Davao del Sur cold-chain client.</div>
              <div className="mt-6 flex items-center justify-between text-xs font-mono text-muted-foreground">
                <span>CASE 014</span><span>↗ live</span>
              </div>
            </div>
            <div className="mt-6 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              ↓ scroll · eight disciplines, one team
            </div>
          </aside>
        </div>

        {/* marquee */}
        <div className="relative mt-20 lg:mt-32 border-y border-border/60 overflow-hidden">
          <div className="flex marquee whitespace-nowrap py-5 font-display text-2xl lg:text-4xl">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex shrink-0 items-center gap-10 pr-10">
                {["Websites","Mobile","IoT","Blockchain","AI","Branding","Capstone","Video"].map((w) => (
                  <span key={w} className="flex items-center gap-10">
                    <span>{w}</span><span className="text-accent">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative py-24 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-16" data-reveal>
            <div className="lg:col-span-5">
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">§ 02 — Capabilities</div>
              <h2 className="mt-4 font-display text-5xl lg:text-7xl leading-[0.95]">What<br/>we do<span className="text-accent">.</span></h2>
            </div>
            <p className="lg:col-span-5 lg:col-start-8 text-muted-foreground text-lg leading-relaxed">
              Eight disciplines under one roof, run by people who actually ship. Pick one — or hand us the whole thing.
            </p>
          </div>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-border">
            {SERVICES.map(({ n, icon: Icon, title, desc }, i) => (
              <li
                key={title}
                data-reveal
                style={{ animationDelay: `${i * 60}ms` }}
                className="group relative border-r border-b border-border p-7 min-h-[260px] flex flex-col justify-between bg-card hover:bg-secondary transition-colors"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-muted-foreground">{n}</span>
                  <Icon className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:-translate-y-1 transition-all" />
                </div>
                <div>
                  <h3 className="font-display text-2xl leading-tight">{title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
                <span className="absolute inset-x-0 bottom-0 h-px bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ABOUT / WHY */}
      <section id="about" className="relative py-28 lg:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src={ABOUT_BG} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-background/90" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5" data-reveal>
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">§ 03 — Why us</div>
            <h2 className="mt-4 font-display text-5xl lg:text-6xl leading-[0.95]">
              Small team.<br/>
              <span className="italic font-light text-muted-foreground">Big</span> radius.
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-md">
              We trade hand-offs for ownership. You talk to the people building the thing — from day one to launch day.
            </p>
          </div>
          <ul className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-border" data-reveal>
            {[
              ["End-to-end", "Design, code, deploy, document. We don't sub it out."],
              ["Honest timelines", "Two-week sprints. Weekly demos. Zero ghosting."],
              ["Built to last", "Tests, docs, observability — handover is non-negotiable."],
              ["Fair pricing", "Startup-friendly. Capstone-friendly. Enterprise-ready."],
            ].map(([t, d]) => (
              <li key={t} className="bg-background p-7">
                <h4 className="font-display text-xl">{t}</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border" data-reveal>
          {[
            ["50+", "Projects shipped"],
            ["08", "Disciplines"],
            ["12", "Countries served"],
            ["100%", "Defended capstones"],
          ].map(([k, v]) => (
            <div key={k} className="bg-background p-8">
              <div className="font-display text-5xl lg:text-6xl text-accent">{k}</div>
              <div className="mt-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CAPSTONE */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="relative border border-border bg-secondary/40 rounded-sm overflow-hidden grid lg:grid-cols-12 gap-10 p-10 lg:p-16" data-reveal>
            <div className="lg:col-span-7">
              <div className="font-mono text-xs uppercase tracking-widest text-accent">For students</div>
              <h2 className="mt-4 font-display text-4xl lg:text-6xl leading-[0.95]">
                Need help with<br/>your <span className="italic font-light">capstone?</span>
              </h2>
              <p className="mt-6 max-w-xl text-muted-foreground text-lg">
                Working system + thesis document, delivered with the polish your panel can't argue with.
                We code it, write it, and rehearse the defense with you.
              </p>
              <a href="#contact" className="mt-8 inline-flex items-center gap-2 px-6 h-12 rounded-full bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity">
                Let's build your project <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <ul className="lg:col-span-5 grid gap-3 content-center font-mono text-sm">
              {["✓ System design + architecture","✓ Full source code + repo","✓ Thesis manuscript (IEEE / APA)","✓ Defense rehearsal & slides"].map((x) => (
                <li key={x} className="border-b border-border pb-3 text-muted-foreground">{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-24 lg:py-36 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5" data-reveal>
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">§ 05 — Contact</div>
            <h2 className="mt-4 font-display text-5xl lg:text-7xl leading-[0.92]">
              Ready to<br/>sync up<span className="text-accent">?</span>
            </h2>
            <div className="mt-10 space-y-4 font-mono text-sm">
              <a href="mailto:hello@allsync.studio" className="flex items-center gap-3 hover:text-accent transition-colors">
                <Mail className="h-4 w-4" /><span>hello@allsync.studio</span>
              </a>
              <div className="flex items-center gap-4 pt-4">
                {[Twitter, Github, Linkedin].map((I, i) => (
                  <a key={i} href="#" className="h-10 w-10 grid place-items-center border border-border rounded-full hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors">
                    <I className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-7 space-y-6" data-reveal>
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Name" name="name" />
              <Field label="Email" name="email" type="email" />
            </div>
            <div className="space-y-2">
              <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Service needed</label>
              <select required className="w-full bg-transparent border-b border-border py-3 focus:border-accent outline-none transition-colors">
                <option className="bg-background">Select a service</option>
                {SERVICES.map((s) => <option key={s.title} className="bg-background">{s.title}</option>)}
              </select>
            </div>
            <div className="space-y-2">
              <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea required rows={4} className="w-full bg-transparent border-b border-border py-3 focus:border-accent outline-none transition-colors resize-none" />
            </div>
            <button className="group inline-flex items-center gap-2 px-7 h-12 rounded-full bg-foreground text-background text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
              {sent ? "Message sent ✓" : "Send message"} <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="h-7 w-7 grid place-items-center rounded-sm bg-accent text-accent-foreground font-display font-bold">A</span>
              <span className="font-display font-bold">All Sync Solutions</span>
            </div>
            <p className="mt-4 text-muted-foreground max-w-sm">Everything connected. Everything shipped. A boutique tech studio for stubborn problems.</p>
          </div>
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Studio</div>
            <ul className="space-y-2 text-sm">
              {["Services","About","Capstone","Contact"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-accent transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Elsewhere</div>
            <ul className="space-y-2 text-sm">
              {["Twitter","GitHub","LinkedIn","Dribbble"].map((l) => (
                <li key={l}><a href="#" className="hover:text-accent transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row gap-3 justify-between text-xs font-mono text-muted-foreground">
            <span>© 2025 All Sync Solutions. All rights reserved.</span>
            <span>Made with intent in Davao del Sur ✦</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input id={name} name={name} type={type} required
        className="w-full bg-transparent border-b border-border py-3 focus:border-accent outline-none transition-colors" />
    </div>
  );
}
