import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "SPAREPART - PT ADITI MULTI KARYA",
  description: "Sparepart truk 4X4 & 6X6.",
};

const Sparepart = () => {
  return (
    <>
      <section className="flex flex-col max-w-screen-full gap-4 p-4 mx-auto bg-white">
        <div className="flex justify-center items-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold py-8">
            Sparepart
          </h1>
        </div>
        <div className="p-2 hover:text-warning">
          <figure className="relative w-full h-48 overflow-hidden rounded-xl">
            <Image
              src="/gardan.jpg"
              alt="gardan"
              fill
              priority
              className="w-100 mx-auto"
            />
          </figure>
          <div className="flex flex-col gap-1 px-1 py-3">
            <h2 className="ml-1 font-semibold lg:text-lg text-center hover:text-warning">
              FRONT AXLE
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          <div className="p-2 hover:text-warning">
            <figure className="relative w-full h-48 overflow-hidden rounded-xl">
              <Image
                src="/Freelock.png"
                alt="Freelock"
                fill
                priority
                className="w-100 mx-auto"
              />
            </figure>
            <div className="flex flex-col gap-1 px-1 py-3">
              <h2 className="ml-1 font-semibold lg:text-lg text-center hover:text-warning">
                FREELOCK
              </h2>
            </div>
          </div>
          <div className="p-2 hover:text-warning">
            <figure className="relative w-full h-48 overflow-hidden rounded-xl">
              <Image
                src="/nap roda.jpg"
                alt="nap roda"
                fill
                priority
                className="w-100 mx-auto"
              />
            </figure>
            <div className="flex flex-col gap-1 px-1 py-3">
              <h2 className="ml-1 font-semibold lg:text-lg text-center hover:text-warning">
                WHEEL HUB
              </h2>
            </div>
          </div>
          <div className="p-2 hover:text-warning">
            <figure className="relative w-full h-48 overflow-hidden rounded-xl">
              <Image
                src="/tc.jpg"
                alt="Transfercase"
                fill
                priority
                className="w-100 mx-auto"
              />
            </figure>
            <div className="flex flex-col gap-1 px-1 py-3">
              <h2 className="ml-1 font-semibold lg:text-lg text-center hover:text-warning">
                TRANSFERCASE
              </h2>
            </div>
          </div>
          <div className="p-2 hover:text-warning">
            <figure className="relative w-full h-48 overflow-hidden rounded-xl">
              <Image
                src="/kopel.jpg"
                alt="Propeller"
                fill
                priority
                className="w-100 mx-auto"
              />
            </figure>
            <div className="flex flex-col gap-1 px-1 py-3">
              <h2 className="ml-1 font-semibold lg:text-lg text-center hover:text-warning">
                PROPELLER
              </h2>
            </div>
          </div>
          <div className="p-2 hover:text-warning">
            <figure className="relative w-full h-48 overflow-hidden rounded-xl">
              <Image
                src="/CV Joint.jpg"
                alt="CV JoinT"
                fill
                priority
                className="w-100 mx-auto"
              />
            </figure>
            <div className="flex flex-col gap-1 px-1 py-3">
              <h2 className="ml-1 font-semibold lg:text-lg text-center hover:text-warning">
                CV JOINT
              </h2>
            </div>
          </div>
          <div className="p-2 hover:text-warning">
            <figure className="relative w-full h-48 overflow-hidden rounded-xl">
              <Image
                src="/as roda set.jpg"
                alt="As Roda"
                fill
                priority
                className="w-100 mx-auto"
              />
            </figure>
            <div className="flex flex-col gap-1 px-1 py-3">
              <h2 className="ml-1 font-semibold lg:text-lg text-center hover:text-warning">
                AXLE SHAFT
              </h2>
            </div>
          </div>
          <div className="p-2 hover:text-warning">
            <figure className="relative w-full h-48 overflow-hidden rounded-xl">
              <Image
                src="/gigi transfer.jpg"
                alt="gigi transfer"
                fill
                priority
                className="w-100 mx-auto"
              />
            </figure>
            <div className="flex flex-col gap-1 px-1 py-3">
              <h2 className="ml-1 font-semibold lg:text-lg text-center hover:text-warning">
                GEAR TRANSFER
              </h2>
            </div>
          </div>
          <div className="p-2 hover:text-warning">
            <figure className="relative w-full h-48 overflow-hidden rounded-xl">
              <Image
                src="/gigi susun.jpg"
                alt="Gigi Susun"
                fill
                priority
                className="w-100 mx-auto"
              />
            </figure>
            <div className="flex flex-col gap-1 px-1 py-3">
              <h2 className="ml-1 font-semibold lg:text-lg text-center hover:text-warning">
                GEAR COUNTER
              </h2>
            </div>
          </div>
          <div className="p-2 hover:text-warning">
            <figure className="relative w-full h-48 overflow-hidden rounded-xl">
              <Image
                src="/spindel.jpg"
                alt="Spindel"
                fill
                priority
                className="w-100 mx-auto"
              />
            </figure>
            <div className="flex flex-col gap-1 px-1 py-3">
              <h2 className="ml-1 font-semibold lg:text-lg text-center hover:text-warning">
                SPINDEL
              </h2>
            </div>
          </div>
          <div className="p-2 hover:text-warning">
            <figure className="relative w-full h-48 overflow-hidden rounded-xl">
              <Image
                src="/asroda.jpg"
                alt="SHAFT"
                fill
                priority
                className="w-100 mx-auto"
              />
            </figure>
            <div className="flex flex-col gap-1 px-1 py-3">
              <h2 className="ml-1 font-semibold lg:text-lg text-center hover:text-warning">
                SHAFT
              </h2>
            </div>
          </div>
          <div className="p-2 hover:text-warning">
            <figure className="relative w-full h-48 overflow-hidden rounded-xl">
              <Image
                src="/shocksteer.jpg"
                alt="Shocksteer"
                fill
                priority
                className="w-100 mx-auto"
              />
            </figure>
            <div className="flex flex-col gap-1 px-1 py-3">
              <h2 className="ml-1 font-semibold lg:text-lg text-center hover:text-warning">
                SHOCKSTEER
              </h2>
            </div>
          </div>
          <div className="p-2 hover:text-warning">
            <figure className="relative w-full h-48 overflow-hidden rounded-xl">
              <Image
                src="/karet boot.jpg"
                alt="karet boot"
                fill
                priority
                className="w-100 mx-auto"
              />
            </figure>
            <div className="flex flex-col gap-1 px-1 py-3">
              <h2 className="ml-1 font-semibold lg:text-lg text-center hover:text-warning">
                BOOT SHAFT
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sparepart;
