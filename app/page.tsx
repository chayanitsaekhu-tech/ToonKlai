import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const acceptLanguage = (await headers()).get("accept-language") ?? "";

  const preferredLanguage = acceptLanguage
    .split(",")[0]
    .split("-")[0]
    .toLowerCase();

  const locale = preferredLanguage === "th" ? "th" : "en";

  redirect(`/${locale}`);
}