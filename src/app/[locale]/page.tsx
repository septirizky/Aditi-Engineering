import Banner from "@/app/components/Banner";
import AboutPage from "./about/page";
import ServicePage from "./service/page";
import ContactPage from "./contact/page";

export default function Home() {
  return (
    <>
      <Banner />
      <AboutPage />
      <ServicePage />
      <ContactPage />
    </>
  );
}
