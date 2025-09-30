import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Github, Linkedin, Moon, Sun, Smartphone, MapPin, Download, ExternalLink } from "lucide-react";

// ===== Helper components =====
const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const Section = ({ id, title, subtitle, children, parallax = false, alt = false }) => (
  <section id={id} className={`${alt ? "bg-white dark:bg-neutral-900" : "bg-neutral-50/60 dark:bg-neutral-950/60"} relative overflow-hidden`}> 
    {parallax && (
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <ParallaxBackdrop />
      </div>
    )}
    <Container className="py-20 sm:py-28">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">{title}</h2>
          {subtitle && (
            <p className="mt-2 max-w-3xl text-neutral-600 dark:text-neutral-400">{subtitle}</p>
          )}
        </div>
        <a href={`#${id}`} className="hidden shrink-0 text-sm text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 sm:inline-flex">
          <ArrowUpRight className="mr-1 h-4 w-4" />
          anchor
        </a>
      </div>
      {children}
    </Container>
  </section>
);

const Chip = ({ children }) => (
  <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-700 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">{children}</span>
);

const Card = ({ children, className = "" }) => (
  <div className={`group rounded-2xl border border-neutral-200 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/70 ${className}`}>
    {children}
  </div>
);

function ParallaxBackdrop() {
  // simple animated gradient dots backdrop
  return (
    <div className="absolute inset-0">
      <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-500/20 via-sky-400/20 to-cyan-300/20 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-gradient-to-tr from-fuchsia-500/20 via-rose-400/20 to-amber-300/20 blur-3xl" />
      <motion.div
        className="absolute inset-0"
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{
          backgroundImage:
            "radial-gradient(1200px 400px at 0% 0%, rgba(255,255,255,0.02), transparent), radial-gradient(800px 300px at 100% 100%, rgba(255,255,255,0.03), transparent)",
        }}
      />
    </div>
  );
}

// ===== Main Component =====
export default function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
    root.classList.add("scroll-smooth");
  }, [dark]);

  const nav = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-white/75 backdrop-blur dark:border-neutral-800/70 dark:bg-neutral-950/60">
        <Container className="flex h-16 items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">Zidan Ramadhan</a>
          <nav className="hidden gap-6 md:flex">
            {nav.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="text-sm text-neutral-600 transition hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href="#contact" className="hidden rounded-full border border-neutral-300 px-3 py-1.5 text-sm hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800 md:inline-flex">
              Hire me
            </a>
            <button
              onClick={() => setDark((d) => !d)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
              aria-label="Toggle theme"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </Container>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <ParallaxBackdrop />
        </div>
        <Container className="grid min-h-[80svh] grid-cols-1 items-center gap-10 py-24 sm:py-32 md:grid-cols-2">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-extrabold tracking-tight sm:text-6xl"
            >
              Hi, I’m <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">Zidan</span> —
              <br />Software Developer & AI Enthusiast
            </motion.h1>
            <p className="mt-5 max-w-xl text-neutral-600 dark:text-neutral-300">
              I build clean, reliable web & mobile apps and experiment with computer vision models. Based in Indonesia.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-white shadow hover:opacity-90 dark:bg-white dark:text-neutral-900">
                View Projects <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-2.5 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800">
                Contact Me <Mail className="h-4 w-4" />
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-2.5 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800">
                <Download className="h-4 w-4" /> Download CV
              </a>
            </div>
            <div className="mt-8 flex items-center gap-4 text-neutral-500">
              <a className="inline-flex items-center gap-2 hover:text-neutral-900 dark:hover:text-white" href="#"><Github className="h-4 w-4" /> Github</a>
              <a className="inline-flex items-center gap-2 hover:text-neutral-900 dark:hover:text-white" href="#"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-indigo-500/20 via-sky-400/10 to-cyan-300/10 blur-2xl" />
            <div className="aspect-square w-full rounded-3xl border border-neutral-200 bg-neutral-100/70 p-2 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50">
              <div className="flex h-full items-center justify-center rounded-2xl bg-gradient-to-br from-neutral-200 to-neutral-100 text-neutral-700 dark:from-neutral-800 dark:to-neutral-900 dark:text-neutral-300">
                {/* Replace with your photo */}
                <span className="text-sm">Your Photo Here (1:1)</span>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-neutral-500">
              <Chip><MapPin className="mr-1 inline h-3 w-3" /> Indonesia</Chip>
              <Chip><Smartphone className="mr-1 inline h-3 w-3" /> Android / Web</Chip>
              <Chip>AI / CV / CNN</Chip>
            </div>
          </div>
        </Container>
      </section>

      {/* About */}
      <Section id="about" title="About" subtitle="A quick snapshot of who I am and what I do." alt>
        <div className="grid gap-6 md:grid-cols-5">
          <div className="md:col-span-3">
            <Card>
              <p className="leading-relaxed text-neutral-700 dark:text-neutral-300">
                I’m a final‑year Informatics student at Universitas Pamulang. I love shipping pragmatic, well‑documented software—from neat PHP dashboards to Kotlin Android apps—and applying machine learning to real problems like rice disease classification.
              </p>
              <ul className="mt-4 list-inside list-disc text-neutral-700 dark:text-neutral-300">
                <li>Focus: Web, Android, and Computer Vision</li>
                <li>Style: Minimal, elegant, readable</li>
                <li>Tools: Kotlin, PHP/MySQL, Python, Tailwind</li>
              </ul>
            </Card>
          </div>
          <div className="md:col-span-2">
            <Card>
              <h3 className="mb-3 font-semibold">Quick Facts</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Material 3",
                  "TailwindCSS",
                  "Room DB",
                  "Flask",
                  "PostgreSQL",
                  "JasperReports",
                  "Framer Motion",
                ].map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Skills (no parallax) */}
      <Section id="skills" title="Skills" subtitle="Tech I use to turn ideas into products." parallax>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <h3 className="mb-2 text-lg font-semibold">Frontend</h3>
            <ul className="space-y-1 text-neutral-700 dark:text-neutral-300">
              <li>HTML, CSS, JavaScript</li>
              <li>React, TailwindCSS</li>
              <li>Android (Kotlin, Compose)</li>
            </ul>
          </Card>
          <Card>
            <h3 className="mb-2 text-lg font-semibold">Backend</h3>
            <ul className="space-y-1 text-neutral-700 dark:text-neutral-300">
              <li>PHP (Native), Flask</li>
              <li>MySQL, PostgreSQL</li>
              <li>REST APIs, Auth, Reporting</li>
            </ul>
          </Card>
          <Card>
            <h3 className="mb-2 text-lg font-semibold">AI/ML</h3>
            <ul className="space-y-1 text-neutral-700 dark:text-neutral-300">
              <li>Computer Vision (CNNs)</li>
              <li>Model training & evaluation</li>
              <li>Data pipelines (Kaggle/Colab)</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Projects (alt, no parallax) */}
      <Section id="projects" title="Featured Projects" subtitle="A few things I’m proud of." alt>
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
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{p.desc}</p>
                </div>
                <a href="#" className="inline-flex items-center rounded-full border border-neutral-300 px-3 py-1 text-xs hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800">
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

      {/* Experience (parallax again) */}
      <Section id="experience" title="Experience" subtitle="Work & projects where I learned the most." parallax>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <div className="flex items-baseline justify-between">
              <h3 className="font-semibold">Intern — PT. Kurabo</h3>
              <span className="text-xs text-neutral-500">2023</span>
            </div>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Assisted with IT support and small tooling, learning fast delivery and clean documentation.
            </p>
          </Card>
          <Card>
            <div className="flex items-baseline justify-between">
              <h3 className="font-semibold">Freelance Projects</h3>
              <span className="text-xs text-neutral-500">2023—Now</span>
            </div>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Built multiple web utilities and Android apps for SMEs; focused on reliability and usability.
            </p>
          </Card>
        </div>
      </Section>

      {/* Contact (alt, no parallax) */}
      <Section id="contact" title="Contact" subtitle="Let’s build something together." alt>
        <div className="grid gap-6 md:grid-cols-5">
          <div className="md:col-span-3">
            <Card>
              <form className="grid gap-3">
                <div>
                  <label className="mb-1 block text-sm text-neutral-600 dark:text-neutral-300">Name</label>
                  <input className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-900 dark:border-neutral-700 dark:bg-neutral-900" placeholder="Your name" />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-neutral-600 dark:text-neutral-300">Email</label>
                  <input type="email" className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-900 dark:border-neutral-700 dark:bg-neutral-900" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-neutral-600 dark:text-neutral-300">Message</label>
                  <textarea rows={4} className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-900 dark:border-neutral-700 dark:bg-neutral-900" placeholder="Tell me about your project..." />
                </div>
                <button type="button" className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:opacity-90 dark:bg-white dark:text-neutral-900">
                  Send Message
                </button>
              </form>
            </Card>
          </div>
          <div className="md:col-span-2">
            <Card>
              <h3 className="mb-3 font-semibold">Elsewhere</h3>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
                <li>
                  <a className="inline-flex items-center gap-2 hover:text-neutral-900 dark:hover:text-white" href="mailto:you@mail.com">
                    <Mail className="h-4 w-4" /> you@mail.com
                  </a>
                </li>
                <li>
                  <a className="inline-flex items-center gap-2 hover:text-neutral-900 dark:hover:text-white" href="#">
                    <Github className="h-4 w-4" /> github.com/yourname
                  </a>
                </li>
                <li>
                  <a className="inline-flex items-center gap-2 hover:text-neutral-900 dark:hover:text-white" href="#">
                    <Linkedin className="h-4 w-4" /> linkedin.com/in/yourname
                  </a>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white/70 py-10 text-sm text-neutral-500 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/60">
        <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p>© {new Date().getFullYear()} Zidan Ramadhan. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-neutral-800 dark:hover:text-neutral-200" href="#home">Back to top</a>
          </div>
        </Container>
      </footer>
    </div>
  );
}
