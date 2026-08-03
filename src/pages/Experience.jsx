import LeftPanel from '../components/LeftPanel';
import PageShell from '../components/PageShell';
import '../App.css';

const experiences = [
  {
    role: 'Software Developer',
    company: 'Aurify Systems Pvt. Ltd.',
    period: 'Mar 2025 – Dec 2025',
    bullets: [
      'Diagnosed and resolved backend service and system-level issues to ensure application reliability and consistent production uptime.',
      'Assisted in deployment and configuration of backend services across Linux-based environments, supporting stable production releases.',
      'Designed and implemented Python-based automation scripts to streamline operational workflows and reduce manual intervention.',
      'Improved backend maintainability by enhancing technical documentation, logging, and monitoring processes.',
      'Reduced recurring backend issue reports by standardizing root-cause analysis procedures and implementing structured resolution workflows.',
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'Sellergize Web Technologies Pvt. Ltd.',
    period: 'Jul 2024 – Nov 2024',
    bullets: [
      'Developed Python-based validation utilities to process and verify crawler-generated backend data used in production systems.',
      'Implemented structured validation logic to analyze backend datasets and identify inconsistencies, improving data reliability.',
      'Assisted in debugging data-processing workflows by tracing issues across backend services and isolating root causes.',
      'Collaborated with backend developers to understand service logic and improve data validation mechanisms.',
      'Strengthened system stability by identifying edge cases and refining backend data handling processes.',
    ],
  },
];

export default function Experience() {
  return (
    <PageShell>
      <LeftPanel />
      <main className="right-panel">
        <p className="section-label anim-fade-up pd-0">Work experience</p>

        <div className="exp-list">
          {experiences.map((exp, i) => (
            <div key={exp.role} className={`anim-fade-up pd-${i + 1}`}>
              <div className="exp-card card-lift">
                <div className="exp-header">
                  <div>
                    <div className="exp-role">{exp.role}</div>
                    <div className="exp-company">{exp.company}</div>
                  </div>
                  <div className="exp-period">{exp.period}</div>
                </div>
                <ul className="exp-bullets">
                  {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </main>
    </PageShell>
  );
}
