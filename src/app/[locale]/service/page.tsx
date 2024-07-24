import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/navigation";

const ServicePage = () => {
  const t = useTranslations("Service");

  return (
    <>
      <section className="flex flex-col max-w-screen-full gap-4 p-4 mx-auto">
        <div className="flex justify-center items-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold py-8">
            {t("title1")}
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <Link
            href="/project"
            className="p-2 border shadow-xl card card-compact hover:bg-warning"
          >
            <figure className="relative w-full h-48 overflow-hidden rounded-xl">
              <Image
                src="/4wd.png"
                alt="4WD"
                sizes="100%"
                fill
                priority
                className="object-cover"
              />
            </figure>
            <div className="flex flex-col gap-1 px-1 py-3">
              <h2 className="ml-1 font-semibold lg:text-lg text-center hover:text-neutral">
                4 x 4 MODIFICATION
              </h2>
            </div>
          </Link>
          <Link
            href="/project"
            className="p-2 border shadow-xl card card-compact hover:bg-warning"
          >
            <figure className="relative w-full h-48 overflow-hidden rounded-xl">
              <Image
                src="/6wd.png"
                alt="6WD"
                sizes="100%"
                fill
                priority
                className="object-cover"
              />
            </figure>
            <div className="flex flex-col gap-1 px-1 py-3">
              <h2 className="ml-1 font-semibold lg:text-lg text-center hover:text-neutral">
                6 x 6 MODIFICATION
              </h2>
            </div>
          </Link>
          <Link
            href="/sparepart"
            className="p-2 border shadow-xl card card-compact hover:bg-warning"
          >
            <figure className="relative w-full h-48 overflow-hidden rounded-xl">
              <Image
                src="/sparepart.png"
                alt="sparepart"
                sizes="100%"
                fill
                priority
                className="object-cover"
              />
            </figure>
            <div className="flex flex-col gap-1 px-1 py-3">
              <h2 className="ml-1 font-semibold lg:text-lg text-center hover:text-neutral">
                SPAREPART
              </h2>
            </div>
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold py-8">
            {t("title2")}
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="p-2 border shadow-xl card card-compact hover:bg-warning">
            <figure className="relative w-full h-48 overflow-hidden rounded-xl">
              <Image
                src="/mining.png"
                alt="Mining"
                sizes="100%"
                fill
                priority
                className="object-cover"
              />
            </figure>
            <div className="flex flex-col gap-1 px-1 py-3">
              <p>{t("mining")}</p>
            </div>
          </div>
          <div className="p-2 border shadow-xl card card-compact hover:bg-warning">
            <figure className="relative w-full h-48 overflow-hidden rounded-xl">
              <Image
                src="/palm.png"
                alt="Palm Oil"
                sizes="100%"
                fill
                priority
                className="object-cover"
              />
            </figure>
            <div className="flex flex-col gap-1 px-1 py-3">
              <p>{t("palm")}</p>
            </div>
          </div>
          <div className="p-2 border shadow-xl card card-compact hover:bg-warning">
            <figure className="relative w-full h-48 overflow-hidden rounded-xl">
              <Image
                src="/contruction.png"
                alt="Contruction"
                sizes="100%"
                fill
                priority
                className="object-cover"
              />
            </figure>
            <div className="flex flex-col gap-1 px-1 py-3">
              <p>{t("contruction")}</p>
            </div>
          </div>
          <div className="p-2 border shadow-xl card card-compact hover:bg-warning">
            <figure className="relative w-full h-48 overflow-hidden rounded-xl">
              <Image
                src="/tni.png"
                alt="TNI"
                sizes="100%"
                fill
                priority
                className="object-cover"
              />
            </figure>
            <div className="flex flex-col gap-1 px-1 py-3">
              <p>{t("militer")}</p>
            </div>
          </div>
        </div>
      </section>
      <div className="divider divider-warning py-7"></div>
      <section className="flex flex-wrap justify-center gap-6 bg-warning">
        <Image
          src="/Mitsubishi.png"
          alt="Mitsubishi"
          width={150}
          height={150}
        />
        <Image src="/Toyota.png" alt="Toyota" width={150} height={150} />
        <Image src="/Isuzu.png" alt="Isuzu" width={150} height={150} />
        <Image src="/UD.png" alt="UD" width={150} height={150} />
        <Image src="/Hino.png" alt="Hino" width={150} height={150} />
      </section>
      <div className="divider divider-warning py-7"></div>
    </>
  );
};

export default ServicePage;
