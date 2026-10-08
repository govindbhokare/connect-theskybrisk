import { ShieldCheck, Target, Users, BriefcaseBusiness, CheckCircle2 } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

export default function About() {
  return (
    <section className="page-section">
      <div className="container narrow-container">
        <SectionHeading eyebrow="About Connect" title="A dedicated communication layer for The Skybrisk." text="Connect The Skybrisk is intended to make internship-related communication more organized and accessible for applicants and participants." />

        <div className="about-highlight">
          <span className="icon-box"><ShieldCheck/></span>
          <div>
            <h3>Official communication</h3>
            <p>Use the designated The Skybrisk communication domain for relevant internship and applicant correspondence.</p>
          </div>
        </div>

        <div className="about-grid">
          {[
            [Target, "Our purpose", "Make important internship information, instructions and support easier for applicants to access."],
            [Users, "Who it serves", "Students, freshers and participants enrolled in eligible The Skybrisk internship programs."],
            [BriefcaseBusiness, "Learning approach", "Practical, project-based work designed to help participants build experience and complete defined tasks."],
            [CheckCircle2, "Our principle", "Clear information, appropriate communication and transparent program expectations."]
          ].map(([Icon, title, text]) => (
            <div className="about-card" key={title}>
              <Icon/>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>

        <div className="notice">
          <strong>Important:</strong> Connect The Skybrisk is a communication/support website. For the latest program details, eligibility, fees, application forms and official terms, always refer to The Skybrisk's current official website and application process.
        </div>
      </div>
    </section>
  );
}