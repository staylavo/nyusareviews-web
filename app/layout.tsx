import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-serif", display: "swap" });

export const metadata: Metadata = {
  title: "NY USA Reviews — Honest product reviews & buying guides",
  description:
    "Independent buying guides and reviews. We analyze verified-buyer reviews and real specs to find the products actually worth your money.",
};

const NAV = [
  { label: "Baby", href: "/baby" },
  { label: "Beauty", href: "/beauty" },
  { label: "Kitchen", href: "/kitchen" },
  { label: "Deals", href: "/deals" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        {/* Affiliate disclosure bar */}
        <div className="bg-brand-ink/95 px-4 py-1.5 text-center text-xs text-white/90">
          We may earn a commission from links on this page. As an Amazon Associate we earn from qualifying purchases.
        </div>

        {/* Header */}
        <header className="sticky top-0 z-30 border-b border-line bg-paper/85 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
            <Link href="/" className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-sm font-bold text-white">NY</span>
              <span className="font-serif text-lg font-semibold tracking-tight text-ink">NY USA Reviews</span>
            </Link>
            <nav className="flex items-center gap-1">
              {NAV.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-ink/80 transition hover:bg-surface hover:text-ink"
                >
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        {children}

        {/* Footer */}
        <footer className="mt-20 border-t border-line bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-muted">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="font-serif text-base font-semibold text-ink">NY USA Reviews</span>
              <nav className="flex flex-wrap gap-4">
                <Link href="/about" className="hover:text-ink">How we choose</Link>
                <Link href="/affiliate-disclosure" className="hover:text-ink">Affiliate disclosure</Link>
                <Link href="/about/editorial-team" className="hover:text-ink">Editorial team</Link>
                <Link href="/contact" className="hover:text-ink">Contact</Link>
              </nav>
            </div>
            <p className="mt-6 max-w-read text-xs leading-relaxed">
              NY USA Reviews provides independent buying guides based on analysis of verified-buyer reviews,
              published specifications, and hands-on testing where noted. © {new Date().getFullYear()} NY USA Reviews.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
