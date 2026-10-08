import { ArrowUpRight, Code2, Database, Globe2, BrainCircuit, Layers3, TerminalSquare } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const programs = [
  { icon: Layers3, title: "Full Stack Java", desc: "Build full-stack applications using Java, OOP, Spring Boot, Angular, React and MySQL.", tags: ["Java", "Spring Boot", "Angular", "React", "MySQL"] },
  { icon: Code2, title: "Java Development", desc: "Develop strong Java fundamentals with object-oriented programming and backend project practice.", tags: ["Core Java", "OOP", "Projects"] },
  { icon: Globe2, title: "Web Development", desc: "Learn the fundamentals of modern websites through HTML, CSS, JavaScript and practical projects.", tags: ["HTML", "CSS", "JavaScript"] },
  { icon: TerminalSquare, title: "React JS", desc: "Create modern component-based user interfaces and practical React applications.", tags: ["React", "Components", "Vite"] },
  { icon: Database, title: "Python Web Development", desc: "Develop Python skills and explore web application development with practical project work.", tags: ["Python", "Django/Flask", "MySQL"] },
  { icon: BrainCircuit, title: "Data Science", desc: "Explore Python-based data analysis, manipulation and practical data science workflows.", tags: ["Python", "Pandas", "Data"] }
];

export default function Internships() {
  return (
    <section className="page-section">
      <div className="container">
        <SectionHeading eyebrow="Internship Programs" title="Choose your learning path." text="The Skybrisk offers project-based internship domains for students and freshers seeking practical experience." center />
        <div className="large-program-grid">
          {programs.map(({icon: Icon, title, desc, tags}) => (
            <article className="large-program-card" key={title}>
              <span className="icon-box"><Icon/></span>
              <h3>{title}</h3>
              <p>{desc}</p>
              <div className="tags">{tags.map(t => <span key={t}>{t}</span>)}</div>
              <a href="https://www.theskybrisk.com/apply" target="_blank" rel="noreferrer">Apply through official site <ArrowUpRight size={16}/></a>
            </article>
          ))}
        </div>
        <div className="info-panel">
          <h3>Program format</h3>
          <div className="info-list">
            <span>Self-paced, project-based learning</span>
            <span>Tasks and resources provided through the designated platform</span>
            <span>No live classes unless specifically stated for a program</span>
            <span>Completion depends on submitting the required work</span>
            <span>Internship participation does not guarantee employment</span>
          </div>
        </div>
      </div>
    </section>
  );
}