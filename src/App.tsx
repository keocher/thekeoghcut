import { useEffect, useState } from 'react'
import './App.css'

type View = 'home' | 'manual'

type Destination = {
  label: string
  href: string
  description: string
  action: string
  external?: boolean
}

type FaqItem = {
  question: string
  answer: string
}

const destinations: Destination[] = [
  {
    label: 'Request',
    href: 'https://request.thekeoghcut.com',
    description: 'feed the hungry server',
    action: 'Open',
    external: true,
  },
  {
    label: 'Watch',
    href: 'https://app.plex.tv',
    description: 'get some popcorn bitch',
    action: 'Open',
    external: true,
  },
]

const passwordRules = [
  'At least 12 characters',
  'At least 3 numbers',
  'At least 2 capitals',
  'Not a reused password',
  'Not saved on your computer in a file called mypasswords.txt like an idiot.',
]

const deviceList = [
  'Amazon Fire TV',
  'Xbox',
  'Playstation',
  "Most smart TV's",
  'Apple TV',
  'iOS',
  'Any web browser (chrome preferred)',
  'Android/Android TV',
  'Roku',
]

const houseRules = [
  'Do not share ANY of these links.',
  'Do not give ANYONE access to your account.',
  'Request only movies you are planning to watch. Unless you want to buy me a massive 8TB harddrive.',
]

const faqItems: FaqItem[] = [
  {
    question: 'Q. Is this legal?',
    answer: 'A. For you, yes',
  },
  {
    question: 'Q. How long will a request take to get added to the library?',
    answer: 'A. How long is a piece of string?',
  },
  {
    question: 'Q. Why is the movie buffering?',
    answer:
      'A. If your internet speed is below 30Mb/s, that\'s why. Else if there are multiple users streaming from the library at once it could stress the server. I have so far tested this setup with only 1 user (myself), but it should be powerful enough for around 8 concurrent streams. You will be one of 3-4 people with access, so probably your own internet. If you have really good internet and its buffering, try "Force Direct Play" in the movie settings.',
  },
  {
    question: 'Q. My request in Seerr is failing, why?',
    answer: "A. Let me know, it's a me problem.",
  },
  {
    question: "Q. My request says approved but it's not on the library after a few days.",
    answer: "A. Let me know, it's a me problem.",
  },
  {
    question: 'Q. Is there a limit to how much I can stream?',
    answer: 'A. No',
  },
  {
    question: 'Q. Will TV Shows ever be an option?',
    answer: 'A. Maybe, soon.',
  },
]

function getViewFromHash(): View {
  return window.location.hash === '#manual' ? 'manual' : 'home'
}

function App() {
  const [view, setView] = useState<View>(() => getViewFromHash())

  useEffect(() => {
    const syncView = () => {
      setView(getViewFromHash())
    }

    window.addEventListener('hashchange', syncView)

    return () => {
      window.removeEventListener('hashchange', syncView)
    }
  }, [])

  useEffect(() => {
    document.title =
      view === 'manual' ? 'thekeoghcut | manual' : 'thekeoghcut'
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [view])

  return view === 'manual' ? <ManualPage /> : <LandingPage />
}

function LandingPage() {
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
              target={destination.external ? '_blank' : undefined}
              rel={destination.external ? 'noreferrer' : undefined}
            >
              <span className="portal-label">{destination.label}</span>
              <span className="portal-copy">{destination.description}</span>
              <span className="portal-arrow" aria-hidden="true">
                {destination.action}
              </span>
            </a>
          ))}
        </div>

        <section className="first-time" aria-label="First time setup">
          <p className="first-time-title">Read The Fucking Manual</p>
          <p className="first-time-copy">
            <a className="first-time-link" href="#manual">
              Open the setup guide before you touch Plex.
            </a>
          </p>
        </section>
      </section>
    </main>
  )
}

function ManualPage() {
  return (
    <main className="shell shell-docs">
      <div className="film-grain" aria-hidden="true" />
      <div className="ambient ambient-left" aria-hidden="true" />
      <div className="ambient ambient-right" aria-hidden="true" />

      <article className="hero manual-page">
        <header className="manual-header">
          <p className="manual-kicker">Read The Fucking Manual</p>
          <h1 className="manual-title">thekeoghcut</h1>
          <p className="manual-subtitle">
            Invite-only streaming service with a private curation of films.
            Users must have their own Plex account, which they will use to sign
            into Seer to make requests for media to be added, and to Plex to
            watch the media.
          </p>
        </header>

        <div className="manual-actions">
          <a className="manual-action" href="#">
            Back Home
          </a>
          <a
            className="manual-action"
            href="https://www.plex.tv/sign-up"
            target="_blank"
            rel="noreferrer"
          >
            Create Plex Account
          </a>
          <a
            className="manual-action"
            href="https://app.plex.tv"
            target="_blank"
            rel="noreferrer"
          >
            Open Plex
          </a>
        </div>

        <div className="manual-content">
          <section className="manual-section">
            <h2>Get Started</h2>
            <p>
              First things first you will need your own Plex account. You can
              sign up{' '}
              <a
                className="manual-inline-link"
                href="https://www.plex.tv/sign-up"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              . Please don&apos;t sign in with Apple or Google, make an account
              with email and password.
            </p>
            <p className="manual-paragraph">
              After you&apos;ve created an account you should be redirected to{' '}
              <a
                className="manual-inline-link"
                href="https://app.plex.tv"
                target="_blank"
                rel="noreferrer"
              >
                app.plex.tv
              </a>
              . Make sure you are signed in, you might need to sign in again.
            </p>

            <div className="manual-callout">
              <p className="manual-callout-title">‼️Important‼️</p>
              <p className="manual-callout-copy">
                Don&apos;t set ilovemydog123 as your password. It must be:
              </p>
              <ul className="manual-list">
                {passwordRules.map((rule) => (
                  <li key={rule}>{rule}</li>
                ))}
              </ul>
              <p className="manual-callout-copy">
                If you get hacked. I get hacked. If I get hacked. I get sad.
              </p>
            </div>

            <p className="manual-paragraph">
              Now that you have you account created, click on the discover tab
              and go to find friends. Go to the search bar and search for the
              admin username (username is secret and will only be given on
              request). Send a friend request, and shortly after your request is
              seen you will be sent an invite link to the media library via
              email.
            </p>
            <p className="manual-paragraph">
              Once you&apos;ve been granted access to the server, you will see it
              on the left sidebar at{' '}
              <a
                className="manual-inline-link"
                href="https://app.plex.tv"
                target="_blank"
                rel="noreferrer"
              >
                app.plex.tv
              </a>
              . There will be multible tabs there named "Discover", "Movies and
              Shows", "Live TV". These are NOT hosted by the server, this is
              free media provided by Plex. The server name will be "hal9000",
              and the media library named "Films". To find this you may have to
              click on "More&gt;".
            </p>
            <p className="manual-paragraph">
              But you won&apos;t be watching it on your laptop. You will be
              watching it on your TV like a good civilised human. Plex is
              available as an app pretty much everywhere. Here are some of the
              supported devices:
            </p>
            <ul className="device-grid">
              {deviceList.map((device) => (
                <li key={device}>{device}</li>
              ))}
            </ul>
            <p className="manual-paragraph">
              Install the device on whichever app is connected to your TV, sign
              in, and your media will be there.
            </p>
          </section>

          <section className="manual-section">
            <h2>Want more movies?</h2>
            <p>
              Now that you are setup in Plex you will automatically have access
              to Seerr. Seerr is a platform where you can make requests for
              media, which must be approved by the admistrator (me hehe) before
              being added to the server. Seerr can be accessed at{' '}
              <a
                className="manual-inline-link"
                href="https://request.thekeoghcut.com"
                target="_blank"
                rel="noreferrer"
              >
                request.thekeoghcut.com
              </a>
              . Make sure you sign in with your Plex account, and you should
              automatically have access to search for movies and make requests.
            </p>

            <div className="manual-callout">
              <p className="manual-callout-title">‼️IMPORTANT‼️</p>
              <p className="manual-callout-copy">
                Only request with the preconfigured quality of "HD - 720/1080".
                This will be selected by default.
              </p>
              <p className="manual-callout-copy">
                Do NOT request shows. They will fail. I have not set up shows
                yet. If you request shows you will cause an error and ruin my
                day. Please don&apos;t ruin my day.
              </p>
            </div>

            <p className="manual-paragraph">
              If you request a movie and the request fails please let me know as
              it likely a server/network issue on my side.
            </p>
          </section>

          <section className="manual-section">
            <h2>Rules</h2>
            <p>These are important.</p>
            <ul className="manual-list">
              {houseRules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </section>

          <section className="manual-section">
            <h2>FAQ</h2>
            <div className="faq-grid">
              {faqItems.map((item) => (
                <section key={item.question} className="faq-card">
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </section>
              ))}
            </div>
          </section>
        </div>
      </article>
    </main>
  )
}

export default App
