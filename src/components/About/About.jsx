import './About.css'

export default function About() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="about-heading">
        <p className="eyebrow">A note from the bookshop</p>
        <h2 id="about-title">A small shop for<br /><em>big inner worlds.</em></h2>
      </div>
      <div className="about-copy">
        <p>Paper Trail is an independent bookshop built around the feeling of finding exactly the right book at exactly the right time.</p>
        <p>Our shelves bring together thoughtful nonfiction, absorbing fiction, and creative inspiration. Browse at your own pace, follow a curiosity, and leave room for a happy surprise.</p>
        <a className="text-link" href="/#collection">Explore the shelf <span aria-hidden="true">↗</span></a>
      </div>
      <div className="about-signoff" aria-hidden="true">Read<br />something<br /><em>good.</em></div>
    </section>
  )
}