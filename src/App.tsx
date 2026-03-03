import './App.css'

const destinations = [
  {
    label: 'Request',
    href: 'https://request.thekeoghcut.com',
    service: 'Seerr',
    description: 'Drop new requests into the queue and keep the server fed.',
  },
  {
    label: 'Watch',
    href: 'https://app.plex.tv',
    service: 'Plex',
    description: 'Open the library, pick something good, and start streaming.',
  },
]

function App() {
  return (
    <main className="shell">
      <div className="ambient ambient-left" aria-hidden="true" />
      <div className="ambient ambient-right" aria-hidden="true" />

      <section className="hero">
        <p className="eyebrow">THEKEOGHCUT</p>
        <h1>Your personal server, one clean front door.</h1>
        <p className="intro">
          Fast access to the two places that matter: request what is missing or
          jump straight into the stream.
        </p>

        <div className="portal-grid">
          {destinations.map((destination, index) => (
            <a
              key={destination.label}
              className={`portal portal-${index + 1}`}
              href={destination.href}
              target="_blank"
              rel="noreferrer"
            >
              <span className="portal-service">{destination.service}</span>
              <span className="portal-label">{destination.label}</span>
              <span className="portal-copy">{destination.description}</span>
              <span className="portal-arrow" aria-hidden="true">
                Open
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
