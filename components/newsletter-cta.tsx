export function NewsletterCta() {
  return (
    <section className="rounded-2xl bg-brand px-6 py-8 text-center text-white">
      <h2 className="font-serif text-2xl font-semibold">Get price-drop alerts</h2>
      <p className="mx-auto mt-2 max-w-md text-sm text-white/85">
        We&apos;ll email you when products from our guides go on sale — including during Prime Day (June 23–26).
      </p>
      <form className="mx-auto mt-4 flex max-w-md gap-2">
        <input
          type="email"
          required
          placeholder="you@email.com"
          aria-label="Email address"
          className="w-full rounded-xl px-4 py-3 text-sm text-ink"
        />
        <button type="submit" className="rounded-xl bg-ink px-5 py-3 text-sm font-semibold">
          Subscribe
        </button>
      </form>
    </section>
  );
}
