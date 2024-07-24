import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import deepmerge from "deepmerge";

// Can be imported from a shared config
const locales = ["en", "id"];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  const localMessages = (await import(`../messages/${locale}.json`)).default;
  const defaultMessages = (await import(`../messages/en.json`)).default;
  const messages = deepmerge(defaultMessages, localMessages);

  return {
    messages,
  };
});
