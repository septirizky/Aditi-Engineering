import type { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "CONTACT - PT ADITI MULTI KARYA",
  description: "Hubungi kami untuk informasi lebih lanjut 0878 7711 9787",
};

const ContactPage = () => {
  const t = useTranslations("Contact");

  return (
    <>
      <section className="max-w-screen-full ">
        <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-warning to-warning-content shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="text-base relative px-4 py-10 bg-warning shadow-lg sm:rounded-3xl sm:p-20">
              <div className="font-semibold text-center pb-10">
                <h1 className="text-3xl">{t("title")}</h1>
              </div>
              <form action="https://formspree.io/f/mdoqkoar" method="POST">
                <input
                  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Name"
                  name="name"
                />
                <input
                  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="Email"
                  name="email"
                />
                <input
                  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Subject"
                  name="_subject"
                />
                <textarea
                  className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Type your message here..."
                  name="message"
                  style={{ height: 121 }}
                  defaultValue={""}
                />
                <div className="flex justify-between">
                  <button
                    className="shadow bg-warning-content hover:bg-neutral text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="reset"
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    value="SEND"
                    className="shadow bg-warning-content hover:bg-neutral text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Send ➤
                  </button>
                </div>
              </form>
              <div className="flex flex-col justify-center gap-4 py-10 mx-auto">
                <div className="text-center">
                  <span className="inline-block p-3 text-white rounded-full bg-warning-content">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </span>
                  <p className="mt-2 text-sm text-gray-800 ">
                    Our friendly team is here to help
                  </p>
                  <p className="mt-2 text-sm text-black">
                    aditimultikarya@gmail.com
                  </p>
                </div>
                <div className="text-center">
                  <span className="inline-block p-3 text-white rounded-full bg-warning-content">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </span>
                  <p className="mt-2 text-sm text-gray-800">
                    Mon-Fri from 8am to 5pm
                  </p>
                  <p className="mt-2 text-sm text-black">
                    <a
                      className="link link-hover"
                      href="https://wa.me/6282219441320?text=Hallo%20bisakah%20anda%20mengirimkan%20surat%20penawaran%20kepada%20kami?"
                    >
                      0822-1944-1320
                    </a>
                    <br />
                    <a
                      className="link link-hover"
                      href="https://wa.me/6282219441320?text=Hallo%20bisakah%20anda%20mengirimkan%20surat%20penawaran%20kepada%20kami?"
                    >
                      0878-7711-9787
                    </a>
                  </p>
                </div>
                <div className="text-center">
                  <span className="inline-block p-3 text-white rounded-full bg-warning-content">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </span>

                  <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                    Office
                  </h2>
                  <p className="mt-2 text-sm text-black">
                    Cisauk - Jaha, Jatake <br />
                    Kec. Pagedangan <br />
                    Kabupaten Tangerang, Banten
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
