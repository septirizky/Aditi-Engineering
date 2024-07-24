import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

const Navbar = () => {
  const t = useTranslations("Navigation");
  return (
    <>
      <nav className="max-w-screen-xl px-4 mx-auto navbar">
        <div className="navbar-start mr-2 lg:hidden">
          <label
            htmlFor="public-drawer"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>

        <div className="navbar-start justify-center gap-3 lg:justify-start">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
          <h2 className="text-xl font-bold text-warning">
            PT Aditi Multi Karya
          </h2>
        </div>

        <div className="hidden navbar-center lg:flex">
          <ul className="gap-2 font-bold menu menu-horizontal text-warning">
            <li>
              <Link href="/">{t("home")}</Link>
            </li>
            <li>
              <Link href="/about">{t("about")}</Link>
            </li>
            <li>
              <Link href="/service">{t("service")}</Link>
            </li>
            <li>
              <Link href="/sparepart">{t("sparepart")}</Link>
            </li>
            <li>
              <Link href="/contact">{t("contact")}</Link>
            </li>
            <li>
              <Link
                href="/project"
                className="text-white bg-warning hover:bg-neutral"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                  />
                </svg>
                {t("project")}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
