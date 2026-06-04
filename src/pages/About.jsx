import LeftPanel from '../components/LeftPanel';
import PageShell from '../components/PageShell';
import '../App.css';

const skills = [
  { group: 'Programming',            tags: ['Python', 'Bash'] },
  { group: 'Web Frameworks',         tags: ['Flask', 'Django', 'FastAPI'] },
  { group: 'Databases',              tags: ['MySQL', 'PostgreSQL', 'SQLite', 'MongoDB'] },
  { group: 'Cloud & Infrastructure', tags: ['AWS EC2', 'AWS S3', 'Lambda', 'VPC', 'IAM', 'CloudWatch'] },
  { group: 'Systems & Tools',        tags: ['Linux', 'Git', 'GitHub Webhooks'] },
  { group: 'Core Competencies',      tags: ['Backend Automation', 'API Integration', 'Access Control', 'System Monitoring', 'Data Validation'] },
];

export default function About() {
  return (
    <PageShell>
      <LeftPanel />
      <main className="right-panel">
        <p className="section-label anim-fade-up pd-0">About me</p>

        <div className="about-content">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div className="about-section anim-fade-up pd-1">
              <h3>Background</h3>
              <p className="bio-text" style={{ marginBottom: '12px' }}>
                I'm a Backend &amp; Cloud Developer based in Nagercoil, Tamil Nadu, with a strong
                foundation in Python, Linux systems, and cloud-native architectures on AWS.
              </p>
              <p className="bio-text" style={{ marginBottom: '12px' }}>
                My guiding principles are reliability and automation — I believe the best systems
                are ones that run themselves, surface problems clearly, and require minimal manual
                intervention.
              </p>
              <p className="bio-text">
                I enjoy building REST-driven integrations, automation pipelines, and backend
                services that bridge tools and platforms.
              </p>
            </div>

            <div className="about-section anim-fade-up pd-2">
              <h3>Education</h3>
              <div className="edu-card card-lift">
                <div className="edu-school">SIES College of Arts, Science and Commerce</div>
                <div className="edu-degree">BSc Computer Science</div>
                <div className="edu-meta">
                  <span>Mumbai · 2021 – 2024</span>
                  <span>CGPA 8.28 / 10</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-section anim-fade-up pd-3">
            <h3>Skills</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {skills.map((s) => (
                <div key={s.group} className="skill-group">
                  <div className="skill-group-label">{s.group}</div>
                  <div className="skill-tags">
                    {s.tags.map((t) => <span key={t} className="skill-tag">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </PageShell>
  );
}
