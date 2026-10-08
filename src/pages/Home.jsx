import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  BookOpen,
  MessageCircle,
  FileCheck2,
  GraduationCap,
  Headphones,
  CheckCircle2
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const programs = [
  ["Full Stack Java", "Java, Spring Boot, Angular, React and MySQL"],
  ["Java Development", "Core Java, OOP, backend fundamentals and projects"],
  ["Web Development", "HTML, CSS, JavaScript and practical web projects"],
  ["React JS", "Modern component-based frontend development"],
  ["Python", "Python programming and web development fundamentals"],
  ["Data Science", "Python, data analysis and practical data projects"]
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="pill"><span className="pulse" /> Official communication platform</div>
            <h1>Stay connected with <span>The Skybrisk.</span></h1>
            <p>
              A dedicated communication and support platform for applicants and participants
              of The Skybrisk internship programs.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="https://www.theskybrisk.com/apply" target="_blank" rel="noreferrer">
                Start Your Application <ArrowRight size={18}/>
              </a>
              <Link className="btn secondary" to="/internships">Explore Programs</Link>
            </div>
            <div className="trust-row">
              <span><ShieldCheck size={17}/> Official communication</span>
              <span><CheckCircle2 size={17}/> Project-based learning</span>
            </div>
          </div>

          <div className="hero-card">
            <div className="card-top">
              <span className="status-dot">●</span>
              <span>Connect Dashboard</span>
              <span className="mini-badge">ACTIVE</span>
            </div>
            <div className="hero-card-main">
              <span className="hero-icon"><GraduationCap size={34}/></span>
              <h3>Your internship journey, organized.</h3>
              <p>Important application information, documents, project guidance and support in one place.</p>
            </div>
            <div className="mini-grid">
              <div><FileCheck2/><strong>Documents</strong><small>Offer & certificates</small></div>
              <div><BookOpen/><strong>Projects</strong><small>Practical tasks</small></div>
              <div><MessageCircle/><strong>Support</strong><small>Official channels</small></div>
              <div><Headphones/><strong>Guidance</strong><small>Project support</small></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Why Connect" title="Everything applicants need to stay informed." text="Connect The Skybrisk is designed to keep important internship communication clear, organized and easy to access." center />
          <div className="feature-grid">
            {[
              [ShieldCheck, "Official Communication", "Use designated communication channels for internship-related information."],
              [BookOpen, "Project-Based Learning", "Work through structured tasks and practical projects at your own pace."],
              [FileCheck2, "Important Documents", "Keep track of internship documents and completion requirements."],
              [MessageCircle, "Applicant Support", "Reach the appropriate support channel when you need project-related assistance."]
            ].map(([Icon, title, text]) => (
              <div className="feature-card" key={title}>
                <span className="icon-box"><Icon/></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <SectionHeading eyebrow="Programs" title="Explore internship domains" text="Choose the program that matches your learning and career goals." />
          <div className="program-grid">
            {programs.map(([name, desc], i) => (
              <div className="program-card" key={name}>
                <span className="program-number">0{i + 1}</span>
                <h3>{name}</h3>
                <p>{desc}</p>
                <Link to="/internships">View program <ArrowRight size={16}/></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container process-section">
          <SectionHeading eyebrow="Simple Process" title="From application to completion." text="A straightforward workflow designed for students and freshers." center />
          <div className="steps">
            {["Apply", "Receive offer", "Confirm", "Access program", "Complete projects", "Receive documents"].map((step, i) => (
              <div className="step" key={step}>
                <span>{i + 1}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-box">
          <div>
            <span className="eyebrow">Ready to begin?</span>
            <h2>Take the next step with The Skybrisk.</h2>
            <p>Explore available internship domains and submit your application through the official website.</p>
          </div>
          <a className="btn light" href="https://www.theskybrisk.com/apply" target="_blank" rel="noreferrer">
            Apply Now <ArrowUpRight size={18}/>
          </a>
        </div>
      </section>
    </>
  );
}