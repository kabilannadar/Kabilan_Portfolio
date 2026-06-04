import { Link } from 'react-router-dom';
import '../App.css';

const NAME = 'Kabilan Rethinaswamy';

export default function Home() {
  return (
    <div
      className="page-enter home-page-container"
      style={{
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        background: 'var(--bg)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Navigation */}
      <nav
        className="anim-slide-down d-0"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '72px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '28px',
          zIndex: 10,
        }}
      >
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
          marginTop: '48px',
        }}
      >
        {/* Avatar */}
        <div className="avatar-container">
          <img
            src="/avatar.jpg"
            alt="Kabilan Rethinaswamy"
            className="avatar-img"
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
          I currently work at{' '}
          <a
            href="https://aloinfotech.in/"
            target="_blank"
            rel="noreferrer"
            style={{
              color: 'var(--accent)',
              fontWeight: 500,
            }}
          >
            ALO Infotech
          </a>{' '}
          as a Software Developer, building automation pipelines and backend
          services across Linux environments.
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
        </div>
      </div>
    </div>
  );
}