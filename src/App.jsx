import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Github,
  Linkedin,
  Moon,
  Sun,
  Smartphone,
  MapPin,
  Download,
  ExternalLink,
} from "lucide-react";

// ================= RETRO-FUTURISTIC THEME HELPERS =================
const neon = {
  primary: "#00f0ff", // cyan
  secondary: "#ff2fd2", // magenta
  amber: "#ffd166",
  bgDark: "#0a0a12",
};

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const Chip = ({ children }) => (
  <span className="rounded-full border border-neutral-800/80 bg-neutral-900/60 px-3 py-1 text-xs text-neutral-200 shadow-[0_0_12px_rgba(255,47,210,0.35)]">
    {children}
  </span>
);

const Card = ({ children, className = "" }) => (
  <div
    className={`group rounded-2xl border border-neutral-800/80 bg-neutral-900/60 p-6 shadow-[0_0_20px_rgba(0,240,255,0.12)] backdrop-blur transition hover:shadow-[0_0_30px_rgba(255,47,210,0.25)] ${className}`}
  >
    {children}
  </div>
);

const Section = ({ id, title, subtitle, children, parallax = false, alt = false }) => (
  <section id={id} className={`relative overflow-hidden ${alt ? "" : ""}`}>
    {parallax && (
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <ParallaxSynthwave />
      </div>
    )}
    <Container className="py-20 sm:py-28">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <h2 className="font-arcade text-3xl tracking-wider text-white drop-shadow-[0_0_18px_rgba(0,240,255,0.55)]">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 max-w-3xl text-neutral-300">{subtitle}</p>
          )}
        </div>
        <a
          href={`#${id}`}
          className="hidden shrink-0 text-sm text-neutral-400 hover:text-white sm:inline-flex"
        >
          <ArrowUpRight className="mr-1 h-4 w-4" /> anchor
        </a>
      </div>
      {children}
    </Container>
  </section>
);

function ParallaxSynthwave() {
  return (
    <div className="absolute inset-0">
      {/* horizon grid */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            `radial-gradient(circle at 50% -10%, rgba(255,47,210,0.18), transparent 45%),\n linear-gradient(to top, rgba(10,10,18,1) 40%, rgba(10,10,18,0.7)),\n repeating-linear-gradient(transparent 0 22px, rgba(255,255,255,0.06) 22px 23px),\n repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0 2px, transparent 2px 100px)`,
        }}
      />
      {/* animated scanlines */}
      <motion.div
        className="absolute inset-0 pointer-events-none mix-blend-overlay"
        initial={{ backgroundPosition: "0 0" }}
        animate={{ backgroundPosition: ["0 0", "0 8px", "0 0"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 3px)",
        }}
      />
      {/* neon blobs */}
      <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(0,240,255,0.22),transparent_60%)] blur-2xl" />
      <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,47,210,0.22),transparent_60%)] blur-2xl" />
    </div>
  );
}

// ================= MAIN =================
export default function App() {
  const [dark, setDark] = useState(true);
  const [crt, setCrt] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.classList.add("scroll-smooth");
  }, [dark]);

  const nav = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "skills", label: "SKILLS" },
    { id: "projects", label: "PROJECTS" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "contact", label: "CONTACT" },
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.6),rgba(0,0,0,0.95))] text-neutral-100 antialiased relative">
      {/* CRT overlay */}
      {crt && (
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[5] mix-blend-overlay"
          style={{
            background:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 3px)",
          }}
        />
      )}

      {/* Top Nav */}
      <header className="sticky top-0 z-50 border-b border-neutral-800/70 bg-neutral-950/70 backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <a href="#home" className="font-arcade text-[15px] tracking-[0.2em] text-white">
            ZIDAN // PORTFOLIO
          </a>
          <nav className="hidden gap-6 md:flex">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="font-arcade text-[11px] tracking-[0.25em] text-neutral-300 transition hover:text-white"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCrt((v) => !v)}
              className="rounded-full border border-neutral-700 px-3 py-1.5 text-xs text-neutral-300 hover:bg-neutral-900"
              title="Toggle CRT scanlines"
            >
              CRT {crt ? "ON" : "OFF"}
            </button>
            <button
              onClick={() => setDark((d) => !d)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-700 hover:bg-neutral-900"
              aria-label="Toggle theme"
              title={dark ? "Light" : "Dark"}
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </Container>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <ParallaxSynthwave />
        </div>
        <Container className="grid min-h-[80svh] grid-cols-1 items-center gap-10 py-24 sm:py-32 md:grid-cols-2">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-arcade text-4xl sm:text-6xl leading-tight"
            >
              <span className="text-neon-cyan">INSERT COIN</span> — I’m Zidan
              <br />
              <span className="text-neon-magenta">Software Dev</span> & <span className="text-neon-cyan">AI</span>
            </motion.h1>
            <p className="mt-5 max-w-xl text-neutral-300">
              Retro-game vibes, future tech stack: I build clean web/mobile apps and experiment with computer vision.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/50 bg-cyan-500/10 px-5 py-2.5 text-cyan-200 shadow-[0_0_12px_rgba(0,240,255,0.35)] hover:bg-cyan-500/20"
              >
                Start ▶ Projects <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-pink-400/50 bg-pink-500/10 px-5 py-2.5 text-pink-200 shadow-[0_0_12px_rgba(255,47,210,0.35)] hover:bg-pink-500/20"
              >
                Contact <Mail className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-amber-400/50 bg-amber-400/10 px-5 py-2.5 text-amber-200 shadow-[0_0_12px_rgba(255,209,102,0.35)] hover:bg-amber-400/20"
              >
                <Download className="h-4 w-4" /> Download CV
              </a>
            </div>
            <div className="mt-8 flex items-center gap-4 text-neutral-400">
              <a className="inline-flex items-center gap-2 hover:text-white" href="#">
                <Github className="h-4 w-4" /> Github
              </a>
              <a className="inline-flex items-center gap-2 hover:text-white" href="#">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl shadow-[0_0_40px_rgba(0,240,255,0.25)]" />
            <div className="aspect-square w-full rounded-3xl border border-neutral-800 bg-neutral-950/70 p-2">
              <div className="flex h-full items-center justify-center rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(0,240,255,0.15),transparent_60%)] text-neutral-300">
                <span className="font-arcade text-sm tracking-widest">[ AVATAR 1:1 ]</span>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-neutral-300">
              <Chip>
                <MapPin className="mr-1 inline h-3 w-3" /> Indonesia
              </Chip>
              <Chip>
                <Smartphone className="mr-1 inline h-3 w-3" /> Android / Web
              </Chip>
              <Chip>AI / CV / CNN</Chip>
            </div>
          </div>
        </Container>
      </section>

      {/* About */}
      <Section id="about" title="ABOUT" subtitle="Retro soul, future tooling.">
        <div className="grid gap-6 md:grid-cols-5">
          <div className="md:col-span-3">
            <Card>
              <p className="leading-relaxed text-neutral-200">
                Final‑year Informatics student at Universitas Pamulang. I ship pragmatic software—from clean PHP dashboards to Kotlin Android apps—and apply ML to real problems like rice disease classification.
              </p>
              <ul className="mt-4 list-inside list-disc text-neutral-300">
                <li>Focus: Web, Android, Computer Vision</li>
                <li>Style: Neo‑retro minimal, readable</li>
                <li>Tools: Kotlin, PHP/MySQL, Python, Tailwind</li>
              </ul>
            </Card>
          </div>
          <div className="md:col-span-2">
            <Card>
              <h3 className="mb-3 font-arcade tracking-widest text-neon-cyan">QUICK LOADOUT</h3>
              <div className="flex flex-wrap gap-2">
                {["Material 3", "TailwindCSS", "Room DB", "Flask", "PostgreSQL", "JasperReports", "Framer Motion"].map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="SKILLS" subtitle="Stack bonuses & power‑ups." parallax>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <h3 className="mb-2 font-arcade text-neon-cyan">FRONTEND</h3>
            <ul className="space-y-1 text-neutral-300">
              <li>HTML, CSS, JavaScript</li>
              <li>React, TailwindCSS</li>
              <li>Android (Kotlin, Compose)</li>
            </ul>
          </Card>
          <Card>
            <h3 className="mb-2 font-arcade text-neon-magenta">BACKEND</h3>
            <ul className="space-y-1 text-neutral-300">
              <li>PHP (Native), Flask</li>
              <li>MySQL, PostgreSQL</li>
              <li>REST APIs, Auth, Reporting</li>
            </ul>
          </Card>
          <Card>
            <h3 className="mb-2 font-arcade text-amber-300">AI / ML</h3>
            <ul className="space-y-1 text-neutral-300">
              <li>Computer Vision (CNNs)</li>
              <li>Model training & evaluation</li>
              <li>Data pipelines (Kaggle/Colab)</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="PROJECTS" subtitle="Selected missions.">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Rice Disease Classifier (CNN)",
              desc: "Web app to classify rice leaf diseases with image upload, causes & suggested actions.",
              tags: ["Python", "Flask", "CNN"],
            },
            {
              title: "HR/Payroll Web Suite",
              desc: "Professional PHP/MySQL system for employees, payroll, CSV import/export, and reports.",
              tags: ["PHP", "MySQL", "Reports"],
            },
            {
              title: "Contact Manager (Android)",
              desc: "Material 3 app with Room DB, search, and clean architecture.",
              tags: ["Kotlin", "Room", "Compose"],
            },
            {
              title: "Money Changer Accounting",
              desc: "Native PHP app for transactions, rate management, cash stock, and dashboard.",
              tags: ["PHP", "Accounting"],
            },
          ].map((p, i) => (
            <Card key={i}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-arcade text-[15px] tracking-wider text-white">{p.title}</h3>
                  <p className="mt-1 text-sm text-neutral-300">{p.desc}</p>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-200 hover:bg-neutral-900"
                >
                  Demo <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="EXPERIENCE" subtitle="XP gained." parallax>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <div className="flex items-baseline justify-between">
              <h3 className="font-arcade tracking-wider text-white">Intern — PT. Kurabo</h3>
              <span className="text-xs text-neutral-400">2023</span>
            </div>
            <p className="mt-2 text-sm text-neutral-300">
              Assisted with IT support and small tooling; learned fast delivery and clean docs.
            </p>
          </Card>
          <Card>
            <div className="flex items-baseline justify-between">
              <h3 className="font-arcade tracking-wider text-white">Freelance Projects</h3>
              <span className="text-xs text-neutral-400">2023—Now</span>
            </div>
            <p className="mt-2 text-sm text-neutral-300">
              Built multiple web utilities and Android apps for SMEs; focused on reliability and usability.
            </p>
          </Card>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="CONTACT" subtitle="Insert token to start co‑op mission." parallax>
        <div className="grid gap-6 md:grid-cols-5">
          <div className="md:col-span-3">
            <Card>
              <form className="grid gap-3" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="mb-1 block text-sm text-neutral-300">Name</label>
                  <input
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 outline-none focus:ring-2 focus:ring-cyan-400/60"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-neutral-300">Email</label>
                  <input
                    type="email"
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 outline-none focus:ring-2 focus:ring-pink-400/60"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-neutral-300">Message</label>
                  <textarea
                    rows={4}
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 outline-none focus:ring-2 focus:ring-amber-300/60"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl border border-cyan-400/50 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200 shadow-[0_0_12px_rgba(0,240,255,0.35)] hover:bg-cyan-500/20"
                >
                  Send Message
                </button>
              </form>
            </Card>
          </div>
          <div className="md:col-span-2">
            <Card>
              <h3 className="mb-3 font-arcade tracking-widest text-neon-magenta">ELSEWHERE</h3>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li>
                  <a className="inline-flex items-center gap-2 hover:text-white" href="mailto:you@mail.com">
                    <Mail className="h-4 w-4" /> you@mail.com
                  </a>
                </li>
                <li>
                  <a className="inline-flex items-center gap-2 hover:text-white" href="#">
                    <Github className="h-4 w-4" /> github.com/yourname
                  </a>
                </li>
                <li>
                  <a className="inline-flex items-center gap-2 hover:text-white" href="#">
                    <Linkedin className="h-4 w-4" /> linkedin.com/in/yourname
                  </a>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 bg-neutral-950/70 py-10 text-sm text-neutral-400 backdrop-blur relative">
        <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p>© {new Date().getFullYear()} Zidan Ramadhan. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-white" href="#home">
              Back to top
            </a>
          </div>
        </Container>
      </footer>

      {/* THEME EXTRAS: fonts + utility classes */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Orbitron:wght@400;700&display=swap');
        .font-arcade{ font-family: 'Press Start 2P', system-ui, sans-serif; }
        .text-neon-cyan{ color: ${neon.primary}; text-shadow: 0 0 12px rgba(0,240,255,.5); }
        .text-neon-magenta{ color: ${neon.secondary}; text-shadow: 0 0 12px rgba(255,47,210,.5); }
      `}</style>
    </div>
  );
}
