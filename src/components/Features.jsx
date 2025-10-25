import Icon8 from './Icon8'

export default function Features(){
  const icons = {
    doc: <Icon8 names={["document--v1","document","doc"]} alt="Document" />,
    magic: <Icon8 names={["magic-wand","sparkles","wand"]} alt="Magic wand" />,
    bolt: <Icon8 names={["flash--v1","lightning-bolt","lightning","high-voltage"]} alt="Flash" />,
    tabs: <Icon8 names={["new-tab","open-in-popup","external-link","link"]} alt="New Tab" />,
    globe: <Icon8 names={["globe--v1","globe","earth-planet","internet"]} alt="Globe" />,
    oss: <Icon8 names={["source-code","code","github"]} alt="Open source" />,
  }
  const items = [
    { title: 'Summarize any page', desc: 'Get concise bullets for long articles or docs — chunked smartly when needed.', icon: icons.doc },
    { title: 'Highlight → instant summary', desc: 'Select text to show a floating “F” tooltip; click to summarize on the page.', icon: icons.magic },
    { title: 'Autofill and search', desc: 'Type into inputs (or a selector), dispatch events, and trigger submit or Enter.', icon: icons.bolt },
    { title: 'Open tabs by command', desc: 'Tell Fustun to open links or search results in a new tab.', icon: icons.tabs },
    { title: 'Works everywhere', desc: 'Runs on all sites — always one click away.', icon: icons.globe },
    { title: 'Open‑source core', desc: 'Built with an open‑source approach for clarity, extensibility, and community trust.', icon: icons.oss },
  ]
  return (
    <section id="features" className="section features-section">
      <div className="container">
        <div className="badge">Features</div>
        <h2 style={{margin: '10px 0 6px'}}>What Fustun can do</h2>
        <p className="muted" style={{marginTop: 0, maxWidth: 680}}>Designed to be fast, focused, and useful for studying or quick research — with a clean look and biscuit accents.</p>
        <div className="features-grid" style={{marginTop: 28}}>
          {items.map((it, idx) => (
            <div key={it.title} className="feature-card reveal" style={{transitionDelay: `${idx * 90}ms`}}>
              <div className="feature-badge" aria-hidden>{it.icon}</div>
              <h3 className="feature-title">{it.title}</h3>
              <p className="feature-desc">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
