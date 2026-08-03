import { Link, useLocation } from 'react-router-dom';
import '../App.css';

export default function LeftPanel() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <aside className="left-panel animate-in" style={{ position: 'relative' }}>

      {/* Identity */}
      <div>
        <div className="identity-block">
          <div className="name">Kabilan Rethinaswamy</div>
          <div className="roles">
            Backend&nbsp;<span>|</span>&nbsp;Cloud&nbsp;<span>|</span>&nbsp;Python
          </div>

          <p className="bio-text">
            Backend &amp; Cloud Developer with hands-on experience building and
            deploying Python-based automation systems on AWS. Designed REST-driven
            integrations using Flask, EC2, and CloudWatch to eliminate manual
            workflows and improve operational efficiency.
          </p>

          <p className="bio-text">
            I am currently seeking new opportunities as a Backend &amp; Cloud Developer.
          </p>

          <Link to="/about" className="read-more-link">
            Read more about me →
          </Link>
        </div>

        {/* Contact */}
        <div className="contact-items">
          <a href="mailto:r.r.kabilan0435@gmail.com" className="contact-pill">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <rect x="3" y="5" width="18" height="14" rx="2"/>
              <path d="M3 7l9 6 9-6"/>
            </svg>
            r.r.kabilan0435@gmail.com
          </a>
          <a href="tel:+919022879379" className="contact-pill">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.7A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.29 6.29l1.42-1.42a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            +91-9022879379
          </a>
        </div>

        {/* Social links */}
        <div className="social-links" style={{ flexWrap: 'nowrap', whiteSpace: 'nowrap' }}>
          <a href="https://github.com/kabilannadar" target="_blank" rel="noreferrer">GitHub</a>
          <span className="dot">·</span>
          <a href="https://linkedin.com/in/kabilan-nadar-9738a823a" target="_blank" rel="noreferrer">LinkedIn</a>
          <span className="dot">·</span>
          <a
            href="/Kabilan_Rethinaswamy.pdf"
            target="_blank"
            rel="noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
          >
            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            My Resume
          </a>
        </div>
      </div>

      {/* Bottom nav */}
      <nav className="left-panel-nav" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {[
          { to: '/', label: 'Home' },
          { to: '/projects', label: 'Projects' },
          { to: '/experience', label: 'Experience' },
          { to: '/about', label: 'About' },
        ].map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            style={{
              fontSize: '13px',
              color: path === to ? 'var(--text-primary)' : 'var(--text-secondary)',
              fontWeight: path === to ? '600' : '400',
              padding: '3px 0',
              borderBottom: path === to ? '1px solid var(--text-primary)' : '1px solid transparent',
              width: 'fit-content',
              transition: 'color 0.2s',
            }}
          >
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
