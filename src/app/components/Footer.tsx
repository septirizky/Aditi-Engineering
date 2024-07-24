import { Link } from "@/navigation";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-warning-content text-white p-10">
        <aside>
          <Image src="/logo.png" alt="Logo" width={110} height={110} />
          <p>
            Copyright &copy; 2023 PT ADITI MULTI KARYA <br />
          </p>
          <p>All right reserved</p>
        </aside>
        <nav>
          <h6 className="font-bold text-slate-300">ABOUT US</h6>
          <p>
            Aditi Engineering is a company specializing
            <br /> in modificating 4X4 & 6X6 trucks, which has <br />
            high quality product and qualified experts. With <br />
            years of experience in the automotive industry, <br />
            we have become leaders in truck modifications <br />
            that not only enhance performance but also <br />
            add aesthetic value to your vehicle.
          </p>
        </nav>
        <nav>
          <h6 className="font-bold text-slate-300">CONTACT</h6>
          <a
            className="link link-hover"
            href="https://wa.me/6282219441320?text=Hallo%20bisakah%20anda%20mengirimkan%20surat%20penawaran%20kepada%20kami?"
          >
            0822-1944-1320
          </a>
          <a
            className="link link-hover"
            href="https://wa.me/6282219441320?text=Hallo%20bisakah%20anda%20mengirimkan%20surat%20penawaran%20kepada%20kami?"
          >
            0878-7711-9787
          </a>
        </nav>
        <nav>
          <h6 className="font-bold text-slate-300">SERVICES</h6>
          <Link className="link link-hover" href="/project">
            Modification 4X4
          </Link>
          <Link className="link link-hover" href="/project">
            Modification 6X6
          </Link>
          <Link className="link link-hover" href="/sparepart">
            Sparepart
          </Link>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
