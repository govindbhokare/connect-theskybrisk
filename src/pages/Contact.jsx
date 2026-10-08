import { Mail, Globe, Clock3, ArrowUpRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

export default function Contact() {
  return (
    <section className="page-section">
      <div className="container">
        <SectionHeading eyebrow="Contact & Support" title="We're here to help you stay connected." text="For internship-related questions, use the appropriate official communication channel." center />
        <div className="contact-grid">
          <div className="contact-card main-contact">
            <span className="icon-box"><Mail/></span>
            <h3>HR & Applicant Support</h3>
            <p>For applicant and internship communication, contact the designated HR/support email.</p>
            <a className="contact-link" href="mailto:hr@connect-theskybrisk.com">hr@connect-theskybrisk.com <ArrowUpRight size={16}/></a>
          </div>
          <div className="contact-card">
            <span className="icon-box"><Globe/></span>
            <h3>Official Website</h3>
            <p>Check the latest internship programs, application forms and public information.</p>
            <a className="contact-link" href="https://www.theskybrisk.com" target="_blank" rel="noreferrer">Visit The Skybrisk <ArrowUpRight size={16}/></a>
          </div>
          <div className="contact-card">
            <span className="icon-box"><Clock3/></span>
            <h3>Before contacting us</h3>
            <p>Keep your name, application details and internship domain ready so your request can be handled efficiently.</p>
          </div>
        </div>

        <div className="faq">
          <h2>Frequently asked questions</h2>
          {[
            ["Is this the main The Skybrisk website?", "No. This is a dedicated communication/support website. The main public website is theskybrisk.com."],
            ["Where should I apply?", "Use the official application page on theskybrisk.com/apply."],
            ["Are internships job guarantees?", "No. Internship participation and completion do not guarantee employment."],
            ["How is internship work delivered?", "Programs are generally self-paced and project-based, with tasks and resources provided through designated channels."]
          ].map(([q, a]) => (
            <details key={q}><summary>{q}</summary><p>{a}</p></details>
          ))}
        </div>
      </div>
    </section>
  );
}