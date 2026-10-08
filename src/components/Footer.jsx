import { Link } from "react-router-dom";
import { Mail, Globe, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark">TS</span>
            <span><strong>The Skybrisk</strong><small>Connect</small></span>
          </div>
          <p className="footer-copy">
            Official communication and support platform for The Skybrisk internship ecosystem.
          </p>
        </div>

        <div>
          <h4>Explore</h4>
          <Link to="/internships">Internship Programs</Link>
          <Link to="/about">About Connect</Link>
          <Link to="/contact">Contact Support</Link>
        </div>
<div>
  <h4>Legal & Privacy</h4>

  <Link to="/privacy">
    Privacy Policy
  </Link>

  <Link to="/terms">
    Terms & Conditions
  </Link>

  <Link to="/email-policy">
    Email Communication Policy
  </Link>
</div>
        <div>
          <h4>Official Links</h4>
          <a href="https://www.theskybrisk.com" target="_blank" rel="noreferrer">
            <Globe size={15}/> The Skybrisk Website
          </a>
          <a href="https://www.theskybrisk.com/apply" target="_blank" rel="noreferrer">
            <ArrowUpRight size={15}/> Internship Application
          </a>
        </div>

        <div>
          <h4>Contact</h4>
          <a href="mailto:hr@connect-theskybrisk.com"><Mail size={15}/> hr@connect-theskybrisk.com</a>
          <span><MapPin size={15}/> Pune, Maharashtra, India</span>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} The Skybrisk. All rights reserved.</span>
        <span>Udyam No. UDYAM-MH-12-0043223 · Gov. Reg. No. 102704282603</span>
      </div>
    </footer>
  );
}