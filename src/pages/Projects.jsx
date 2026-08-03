import LeftPanel from '../components/LeftPanel';
import PageShell from '../components/PageShell';
import '../App.css';

const projects = [
  {
    id: 1,
    title: 'ExpenseTracker – Personal Finance Platform',
    image: 'https://ik.imagekit.io/kabi10/ExpenseTracker_Portfolio_Banner.png',
    github: 'https://github.com/kabilannadar/ExpenseTracker',
    live: 'https://expense-tracker-puce-nu-70.vercel.app/',
    stack: ['FastAPI', 'Python', 'Neon DB', 'React.js', 'JWT Authentication', 'wweb.js'],
    bullets: [
      'Built with a FastAPI backend, Neon DB database, and a modern React frontend dashboard.',
      'Easily record, categorize, and filter your daily expenses and income streams in real-time.',
      'Set custom budgets, track savings goals, and manage upcoming recurring subscriptions or debt EMIs.',
      'Generate visual charts, audit logging events, and export financial data to external formats.',
      'Log expenses on the go by texting natural language commands to a connected bot via WhatsApp.',
    ],
  },
  {
    id: 2,
    title: 'GitHub → JIRA Auto-Ticketing System',
    image: 'https://ik.imagekit.io/kabi10/github_jira.png?updatedAt=1784288964924',
    github: 'https://github.com/kabilannadar/flask_jira',
    stack: ['Python', 'Flask', 'AWS EC2', 'IAM', 'CloudWatch', 'GitHub Webhooks', 'JIRA API'],
    bullets: [
      'Deployed a Flask REST API on AWS EC2 to auto-convert GitHub issue events into JIRA tickets.',
      'Integrated GitHub Webhooks with JIRA API for real-time cross-platform issue synchronization.',
      'Implemented IAM role-based access control for secure cloud operations.',
      'Configured centralized logging and monitoring using AWS CloudWatch.',
      'Eliminated repetitive manual ticket creation by automating cross-repository workflow sync.',
    ],
  },
  {
    id: 3,
    title: 'EnGame – Full Stack Gaming Platform',
    image: 'https://ik.imagekit.io/kabi10/engame.png?updatedAt=1784288966249',
    github: 'https://github.com/kabilannadar',
    stack: ['React.js', 'Next.js', 'Node.js', 'MongoDB', 'OAuth'],
    bullets: [
      'Led backend coordination within a 3-member development team.',
      'Designed authentication and authorization flow using OAuth.',
      'Contributed to API handling and MongoDB schema integration.',
      'Participated in system design planning and deployment discussions.',
    ],
  },
];

export default function Projects() {
  return (
    <PageShell>
      <LeftPanel />
      <main className="right-panel">
        <p className="section-label anim-fade-up pd-0">All projects</p>

        <div className="scroll-pane" style={{ display: 'flex', flexDirection: 'column', gap: '20px', overflowY: 'auto', flex: 1, minHeight: 0, paddingLeft: '40px', paddingRight: '40px', paddingTop: '6px', paddingBottom: '28px' }}>
          {projects.map((p, i) => (
            <div key={p.id} className={`anim-fade-up pd-${i + 1}`}>
              <div className="project-card card-lift">
                <div className="project-card-thumb" style={{ height: '180px', aspectRatio: 'auto' }}>
                  <img src={p.image} alt={p.title} />
                </div>
                <div style={{ padding: '20px 22px' }}>
                  <div className="project-card-header">
                    <div>
                      <div style={{ fontSize: '15px', fontWeight: '600', marginBottom: '4px' }}>{p.title}</div>
                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        {p.stack.map((s) => <span key={s} className="skill-tag" style={{ fontSize: '11.5px' }}>{s}</span>)}
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <a href={p.github} target="_blank" rel="noreferrer"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '12.5px', color: 'var(--accent)', fontWeight: '500', whiteSpace: 'nowrap' }}>
                        <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                        GitHub
                      </a>
                      {p.live && (
                        <a href={p.live} target="_blank" rel="noreferrer"
                          style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '12.5px', color: 'var(--accent)', fontWeight: '500', whiteSpace: 'nowrap' }}>
                          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                          </svg>
                          Live Link
                        </a>
                      )}
                    </div>
                  </div>

                  <ul className="exp-bullets">
                    {p.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </PageShell>
  );
}
