import type { Product } from "@/lib/types";

/**
 * Placeholder image (brand initial) so the layout renders before real product
 * images are wired via PA-API. Swap for next/image with product.imageUrl later.
 */
export function ProductImage({ product, size = 120 }: { product: Product; size?: number }) {
  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-xl bg-paper ring-1 ring-line"
      style={{ width: size, height: size }}
      aria-hidden
    >
      <span className="font-serif text-3xl font-semibold text-muted">
        {product.brand.charAt(0)}
      </span>
    </div>
  );
}
