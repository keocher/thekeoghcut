import './App.css'

const destinations = [
  {
    label: 'Request',
    href: 'https://request.thekeoghcut.com',
    description: 'feed the hungry server',
  },
  {
    label: 'Watch',
    href: 'https://app.plex.tv',
    description: 'get some popcorn bitch',
  },
]

function App() {
  return (
    <main className="shell">
      <div className="film-grain" aria-hidden="true" />
      <div className="ambient ambient-left" aria-hidden="true" />
      <div className="ambient ambient-right" aria-hidden="true" />

      <section className="hero">
        <div className="masthead">
          <h1>thekeoghcut</h1>
          <p className="subtitle">hosted by HAL9000</p>
        </div>

        <div className="portal-grid">
          {destinations.map((destination, index) => (
            <a
              key={destination.label}
              className={`portal portal-${index + 1}`}
              href={destination.href}
              target="_blank"
              rel="noreferrer"
            >
              <span className="portal-label">{destination.label}</span>
              <span className="portal-copy">{destination.description}</span>
              <span className="portal-arrow" aria-hidden="true">
                Open
              </span>
            </a>
          ))}
        </div>

        <section className="first-time" aria-label="First time setup">
          <p className="first-time-title">First Time?</p>
          <p className="first-time-copy">
            Create a Plex account first at{' '}
            <a
              className="first-time-link"
              href="https://app.plex.tv/auth/"
              target="_blank"
              rel="noreferrer"
            >
              app.plex.tv/auth/
            </a>
            .
          </p>
        </section>
      </section>
    </main>
  )
}

export default App
