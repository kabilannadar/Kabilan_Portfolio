import '../App.css';

/* Shared page wrapper for inner pages — triggers CSS page-enter animation */
export default function PageShell({ children }) {
  return (
    <div className="portfolio-shell page-enter">
      {children}
    </div>
  );
}
