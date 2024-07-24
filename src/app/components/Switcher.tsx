"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

const Switcher = () => {
  const t = useTranslations("Switcher");
  return (
    <>
      <div className="bg-warning rounded-2xl backdrop-blur fixed bottom-5 left-5">
        <div className="flex justify-center items-center ">
          <h1 className="font-sans pt-2">{t("switch")}</h1>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row p-2 gap-4 justify-center text-center">
            <Link
              href="/en"
              className="flex justify-center items-center md:w-1/2"
            >
              <img src="/en.png" alt="EN" className="w-8" />
            </Link>
            <Link
              href="/id"
              className="flex justify-center items-center md:w-1/2"
            >
              <img src="/id.png" alt="ID" className="w-8" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Switcher;
