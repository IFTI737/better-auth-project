import Link from "next/link";

const features = [
  {
    icon: "🔐",
    title: "Secure by default",
    text: "Email and password authentication with hashed credentials and trusted-origin checks built in.",
  },
  {
    icon: "⚡",
    title: "Lightning fast",
    text: "Built on Next.js with a lightweight auth client, so sign-in feels instant.",
  },
  {
    icon: "🗄️",
    title: "Your data, your database",
    text: "Users and sessions are stored in MongoDB through the Better Auth adapter.",
  },
  {
    icon: "🎨",
    title: "Beautiful UI",
    text: "Polished, accessible forms with validation, dark mode and smooth motion.",
  },
  {
    icon: "🧩",
    title: "Easy to extend",
    text: "Add social providers, two-factor auth or roles whenever you need them.",
  },
  {
    icon: "🛡️",
    title: "Session ready",
    text: "Read the current user anywhere in your app with a single hook.",
  },
];

const stats = [
  { value: "100%", label: "Type-safe" },
  { value: "<1 min", label: "To sign up" },
  { value: "0", label: "Passwords stored in plain text" },
];

const gradientButton =
  "inline-flex items-center justify-center rounded-xl bg-linear-to-r from-indigo-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/40 active:translate-y-0 active:scale-[0.98]";

const ghostButton =
  "inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white/60 px-6 py-3 text-sm font-semibold text-zinc-800 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white active:scale-[0.98] dark:border-white/15 dark:bg-white/5 dark:text-zinc-100 dark:hover:bg-white/10";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-indigo-50 via-white to-purple-50 text-zinc-900 dark:from-zinc-950 dark:via-zinc-900 dark:to-indigo-950 dark:text-zinc-100">
      <div className="animate-float pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-indigo-400/30 blur-3xl" />
      <div className="animate-float-slow pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-purple-400/30 blur-3xl" />
      <div className="animate-float pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" />

      {/* Navbar */}
      <header className="animate-fade-up relative mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500 to-purple-600 text-lg font-bold text-white shadow-lg shadow-indigo-500/40">
            A
          </span>
          <span className="text-lg font-bold tracking-tight">AuthApp</span>
        </Link>
        <nav className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/sign-in"
            className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-300 dark:hover:text-indigo-400"
          >
            Sign in
          </Link>
          <Link href="/sign-up" className={`${gradientButton} px-4! py-2!`}>
            Get started
          </Link>
        </nav>
      </header>

      <main className="relative mx-auto max-w-6xl px-6">
        {/* Hero */}
        <section className="stagger flex flex-col items-center pb-20 pt-16 text-center sm:pt-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/70 px-4 py-1.5 text-xs font-medium text-indigo-700 backdrop-blur dark:border-indigo-400/20 dark:bg-white/5 dark:text-indigo-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Secure authentication, made simple
          </span>
          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-6xl">
            Sign in to a smarter way to{" "}
            <span className="text-shimmer">manage your account</span>
          </h1>
          <p className="max-w-xl text-base text-zinc-600 dark:text-zinc-400 sm:text-lg">
            A fast, secure and beautifully designed authentication experience
            powered by Next.js, Better Auth and MongoDB.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/sign-up" className={gradientButton}>
              Create free account
            </Link>
            <Link href="/sign-in" className={ghostButton}>
              Sign in
            </Link>
          </div>
        </section>

        {/* Stats */}
        <section className="animate-fade-up grid gap-4 [animation-delay:0.7s] sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/60 bg-white/70 p-6 text-center shadow-lg shadow-indigo-500/5 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/70"
            >
              <div className="text-shimmer text-3xl font-extrabold">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                {s.label}
              </div>
            </div>
          ))}
        </section>

        {/* Features */}
        <section className="py-24">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to get started
            </h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400">
              Simple tools that keep your users safe and your app moving.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <div
                key={f.title}
                style={{ animationDelay: `${0.9 + i * 0.1}s` }}
                className="animate-fade-up group rounded-2xl border border-white/60 bg-white/70 p-6 shadow-lg shadow-indigo-500/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/20 dark:border-white/10 dark:bg-zinc-900/70 dark:hover:border-indigo-400/40"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500/15 to-purple-500/15 text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="pb-24">
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-indigo-600 to-purple-700 px-6 py-14 text-center text-white shadow-2xl shadow-indigo-500/30 sm:px-12">
            <div className="animate-float pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/15 blur-2xl" />
            <div className="animate-float-slow pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-sky-300/20 blur-2xl" />
            <h2 className="relative text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to join?
            </h2>
            <p className="relative mx-auto mt-3 max-w-md text-indigo-100">
              Create your account in under a minute and start exploring.
            </p>
            <Link
              href="/sign-up"
              className="relative mt-8 inline-flex items-center justify-center rounded-xl bg-white px-7 py-3 text-sm font-semibold text-indigo-700 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]"
            >
              Get started for free
            </Link>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-zinc-200/70 py-8 text-center text-sm text-zinc-500 dark:border-white/10 dark:text-zinc-400">
        © {new Date().getFullYear()} AuthApp. All rights reserved.
      </footer>
    </div>
  );
}
