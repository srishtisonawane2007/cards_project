import './Header.css'

export default function Header() {
  return (
    <header className="topbar">
      <a className="wordmark" href="/#top" aria-label="Paper Trail home">
        <span className="wordmark-mark" aria-hidden="true">P.</span>
        paper trail
      </a>
      <span className="topbar-note">Independent books, thoughtfully found</span>
      <nav className="topbar-nav" aria-label="Main navigation">
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a className="topbar-link" href="/#collection">Browse books <span aria-hidden="true">↘</span></a>
      </nav>
    </header>
  )
}