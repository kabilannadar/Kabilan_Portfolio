import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const NAME = 'Kabilan Rethinaswamy';

export default function Home() {
  const [avatarHovered, setAvatarHovered] = useState(false);
  return (
    <div className="page-enter home-page-container">
      {/* Navigation */}
      <nav className="anim-slide-down home-nav d-0">
        {[
          { to: '/projects', label: 'Projects' },
          { to: '/experience', label: 'Experience' },
          { to: '/about', label: 'About' },
        ].map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            style={{
              fontSize: '13px',
              color: 'var(--text-secondary)',
              fontWeight: '400',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) =>
              (e.target.style.color = 'var(--text-primary)')
            }
            onMouseLeave={(e) =>
              (e.target.style.color = 'var(--text-secondary)')
            }
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Main Content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '1200px',
          width: '100%',
          padding: '0 32px',
          marginTop: '12px',
        }}
      >
        {/* Avatar */}
        <div
          className="avatar-container"
          onMouseEnter={() => setAvatarHovered(true)}
          onMouseLeave={() => setAvatarHovered(false)}
        >
          {/* Base avatar image */}
          <img
            src="https://ik.imagekit.io/kabi10/avatar.jpg?updatedAt=1784288965603"
            alt="Kabilan Rethinaswamy"
            className="avatar-img"
            style={{
              position: 'absolute',
              objectFit: 'cover',
              objectPosition: 'center 67%',
              opacity: avatarHovered ? 0 : 1,
              transition: 'opacity 0.45s ease',
            }}
          />
          {/* K logo — fades in on hover */}
          <img
            src="https://ik.imagekit.io/kabi10/favicon_portfolio.png"
            alt=""
            className="avatar-img"
            style={{
              position: 'absolute',
              objectFit: 'contain',
              objectPosition: 'center',
              background: 'var(--surface)',
              opacity: avatarHovered ? 1 : 0,
              transition: 'opacity 0.45s ease',
            }}
          />
        </div>

        {/* Name */}
        <h1
          style={{
            fontSize: 'clamp(2rem, 8vw, 3.5rem)',
            fontWeight: '700',
            letterSpacing: '-0.035em',
            lineHeight: '1.15',
            color: 'var(--text-primary)',
            marginBottom: '12px',
            display: 'inline-flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            perspective: '600px',
          }}
        >
          {NAME.split('').map((char, i) => (
            <span
              key={i}
              className={`anim-letter d-${i}`}
            >
              {char === ' ' ? '\u00a0' : char}
            </span>
          ))}
        </h1>

        {/* Bio 1 */}
        <p
          className="anim-fade-up cd-2"
          style={{
            fontSize: '15.5px',
            lineHeight: '1.75',
            color: 'var(--text-secondary)',
            marginBottom: '8px',
          }}
        >
          Backend &amp; Cloud Developer with hands-on experience building and
          deploying Python-based automation systems on AWS.
          <br />
          Clarity and reliability are the two guiding principles of my work.
        </p>

        {/* Bio 2 */}
        <p
          className="anim-fade-up cd-3"
          style={{
            fontSize: '15.5px',
            lineHeight: '1.75',
            color: 'var(--text-secondary)',
            marginBottom: '20px',
          }}
        >
          I am currently seeking new opportunities as a Backend &amp; Cloud Developer.
        </p>

        {/* Contact */}
        <div
          className="anim-fade-up cd-5"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            alignItems: 'center',
            marginBottom: '16px',
          }}
        >
          <a
            href="mailto:r.r.kabilan0435@gmail.com"
            className="contact-pill"
            style={{ fontSize: '14.5px' }}
          >
            <svg
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
            r.r.kabilan0435@gmail.com
          </a>

          <a
            href="tel:+919022879379"
            className="contact-pill"
            style={{ fontSize: '14.5px' }}
          >
            <svg
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.7A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.29 6.29l1.42-1.42a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            +91-9022879379
          </a>
        </div>

        {/* Social Links */}
        <div
          className="anim-fade-up cd-6"
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: '14.5px',
          }}
        >
          <a
            href="https://github.com/kabilannadar"
            target="_blank"
            rel="noreferrer"
            style={{
              color: 'var(--accent)',
              fontWeight: 500,
            }}
          >
            GitHub
          </a>

          <span
            style={{
              margin: '0 8px',
              color: 'var(--text-muted)',
            }}
          >
            ·
          </span>

          <a
            href="https://linkedin.com/in/kabilan-nadar-9738a823a"
            target="_blank"
            rel="noreferrer"
            style={{
              color: 'var(--accent)',
              fontWeight: 500,
            }}
          >
            LinkedIn
          </a>

          <span
            style={{
              margin: '0 8px',
              color: 'var(--text-muted)',
            }}
          >
            ·
          </span>

          <a
            href="/Kabilan_Rethinaswamy.pdf"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              color: 'var(--accent)',
              fontWeight: 500,
            }}
          >
            <svg
              width="13"
              height="13"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
}