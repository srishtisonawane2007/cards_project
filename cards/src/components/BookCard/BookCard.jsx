import './BookCard.css'

export default function BookCard({ title, author, price, category, description, image }) {
  return (
    <article className="book-card">
      <div className="book-cover-wrap">
        <img className="book-cover" src={image} alt={`Cover of ${title}`} loading="lazy" />
        <span className="book-category">{category}</span>
      </div>
      <div className="book-details">
        <h3>{title}</h3>
        <p className="book-author">by {author}</p>
        <p className="book-description">{description}</p>
        <div className="book-bottom">
          <span className="book-price">₹{price}</span>
          <span className="book-note">A good read <span aria-hidden="true">↗</span></span>
        </div>
      </div>
    </article>
  )
}