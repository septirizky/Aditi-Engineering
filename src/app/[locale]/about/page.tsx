import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ABOUT - PT ADITI MULTI KARYA",
  description:
    "Spesialis modifikasi truk 4X4 & 6X6 yang mempunyai kualitas produk tinggi dan tenaga ahli yang mumpuni. Dengan pengalaman bertahun-tahun di industri otomotif, kami telah menjadi pemimpin dalam modifikasi truk yang tidak hanya meningkatkan performa tetapi juga menambah nilai estetika pada kendaraan Anda.",
};

const AboutPage = () => {
  const t = useTranslations("About");

  return (
    <>
      <section className="flex max-w-screen-full h-80 bg-warning-content md:px-10 lg:px-28">
        <div className="flex flex-col justify-center text-justify md:w-1/2 p-10">
          <h1 className="mt-4 text-2xl lg:text-4xl font-semibold text-neutral">
            {t("title1")}
            <span className="font-bold text-warning"> Aditi Engineering</span>
          </h1>
          <p className="text-sm lg:text-lg text-white py-3">
            {t("description1")}
          </p>
        </div>
        <picture className="hidden md:flex items-center w-1/2">
          <img
            src="/logo.png"
            alt="image"
            className="w-60 rounded-3xl mx-auto"
          />
        </picture>
      </section>

      <section className="p-5">
        <div className="flex justify-center items-center ">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold py-8">
            {t("title2")}
          </h1>
        </div>
        <div className="flex flex-col gap-10 md:gap-1 mx-5 lg:mx-44">
          <div className="flex flex-col md:flex-row gap-2 justify-center text-center">
            <picture className="flex justify-center items-center md:w-1/2">
              <img src="/4wd.png" alt="4WD" className="w-36 md:w-44" />
            </picture>
            <p className="text-sm md:text-base lg:text-lg text-balance text-slate-600 my-auto md:w-1/2">
              <span className="font-semibold">Aditi Engineering </span>
              {t("description2")}
            </p>
          </div>
          <div className="flex flex-col md:flex-row-reverse gap-2 justify-center text-center">
            <picture className="flex justify-center items-center md:w-1/2">
              <img src="/6wd.png" alt="6WD" className="w-36 md:w-44" />
            </picture>
            <p className="text-sm md:text-base lg:text-lg text-balance text-slate-600 my-auto md:w-1/2">
              {t("description3")}
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold py-8">
            {t("title3")}
          </h1>
        </div>
        <div className="flex flex-col text-center px-10">
          <p className="text-base lg:text-xl text-balance text-slate-600">
            {t("mission")}
          </p>
        </div>
        <div className="flex justify-center items-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold py-8">
            {t("title4")}
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <Image src="/quality.png" alt="quality" width={180} height={150} />
          <Image
            src="/experience.png"
            alt="experience"
            width={150}
            height={150}
          />
          <Image src="/deal.png" alt="deal" width={150} height={150} />
          <Image
            src="/pelayanan.png"
            alt="pelayanan"
            width={220}
            height={150}
          />
        </div>
      </section>
      <div className="divider divider-warning py-7"></div>
    </>
  );
};

export default AboutPage;
