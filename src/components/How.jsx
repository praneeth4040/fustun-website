export default function How(){
  const steps = [
    { title: 'Install and pin', body: 'Install Fustun, then pin it. Click the icon to open the assistant.' },
    { title: 'Summarize or ask', body: 'Ask for a page summary or highlight text and use the floating “F”.' },
    { title: 'Automate actions', body: 'Tell Fustun to open tabs, insert text, or trigger a search.' },
  ]
  return (
    <section id="how" className="section how">
      <div className="container">
        <div className="badge">How it works</div>
        <h2 style={{margin: '10px 0 6px'}}>Three simple steps</h2>
        <div className="grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', marginTop: 12}}>
          {steps.map((s, i) => (
            <div key={s.title} className="card step reveal" style={{transitionDelay: `${i * 100}ms`}}>
              <span className="num">{i+1}</span>
              <h3 style={{margin:0}}>{s.title}</h3>
              <p className="muted" style={{margin:0}}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
