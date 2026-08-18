function toOrigin(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return null;
  try {
    return new URL(trimmed.includes("://") ? trimmed : `https://${trimmed}`).origin;
  } catch {
    return null;
  }
}

export function resolvePublicUrl() {
  const fromEnv = toOrigin(process.env.NEXT_PUBLIC_SITE_URL ?? "");
  if (fromEnv) return fromEnv;

  const fromVercel = toOrigin(
    process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL ?? "",
  );
  if (fromVercel) return fromVercel;

  return "http://localhost:3000";
}
