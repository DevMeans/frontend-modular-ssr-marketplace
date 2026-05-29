export interface ProductRouteInput {
  id: number;
  name: string;
  slug?: string | null;
}

export function slugifyText(value: string): string {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/&/g, ' y ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');
}

export function createProductSlug(name: string, id: number): string {
  const safeId = Number(id);
  const baseSlug = slugifyText(name) || 'producto';
  return `${baseSlug}-${safeId}`;
}

export function resolveProductIdFromRouteToken(token: string | null | undefined): number | null {
  const raw = String(token ?? '').trim();
  if (!raw) {
    return null;
  }

  if (/^\d+$/.test(raw)) {
    const parsed = Number(raw);
    return Number.isInteger(parsed) && parsed > 0 ? parsed : null;
  }

  const match = raw.match(/-(\d+)$/);
  if (!match?.[1]) {
    return null;
  }

  const parsed = Number(match[1]);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : null;
}

export function buildMarketplaceProductPath(product: ProductRouteInput): string {
  const validId = Number(product?.id || 0);
  if (!Number.isInteger(validId) || validId < 1) {
    return '/marketplace/products';
  }

  const currentSlug = String(product?.slug || '').trim();
  const finalSlug = currentSlug || createProductSlug(product.name, validId);
  return `/marketplace/products/${finalSlug}`;
}

export function buildProductImageAlt(productName: string, context: string): string {
  const cleanName = String(productName || '').trim() || 'Producto';
  const cleanContext = String(context || '').trim();
  return cleanContext ? `${cleanName} - ${cleanContext}` : cleanName;
}
