import { useState } from 'react'
import './App.css'
import books from '../data.json'
import BookCard from './components/BookCard/BookCard.jsx'

function App() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All books')
  const categories = ['All books', ...new Set(books.map((book) => book.category))]
  const filteredBooks = books.filter((book) => {
    const matchesCategory = activeCategory === 'All books' || book.category === activeCategory
    const matchesQuery = `${book.title} ${book.author}`.toLowerCase().includes(query.toLowerCase())
    return matchesCategory && matchesQuery
  })

  return (
    <main className="storefront">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Paper Trail home">
          <span className="wordmark-mark" aria-hidden="true">P.</span>
          paper trail
        </a>
        <span className="topbar-note">Independent books, thoughtfully found</span>
        <a className="topbar-link" href="#collection">Browse the collection <span aria-hidden="true">↘</span></a>
      </header>

      <section className="intro" id="top">
        <div className="intro-copy">
          <p className="eyebrow">A little room for a good book</p>
          <h1>Stories worth<br /><em>staying up for.</em></h1>
          <p className="intro-description">A considered shelf of ideas, adventures, and small perspective shifts. Find your next favorite.</p>
        </div>
        <div className="intro-stamp" aria-hidden="true">
          <span>TAKE<br />YOUR<br />TIME</span>
          <span className="stamp-star">✳</span>
        </div>
      </section>

      <section className="collection" id="collection" aria-labelledby="collection-title">
        <div className="collection-heading">
          <div>
            <p className="eyebrow">The bookshop shelf</p>
            <h2 id="collection-title">Find something lovely</h2>
          </div>
          <label className="search-box">
            <span className="search-icon" aria-hidden="true">⌕</span>
            <input
              type="search"
              placeholder="Search title or author"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              aria-label="Search books by title or author"
            />
          </label>
        </div>

        <div className="category-tabs" aria-label="Filter by category">
          {categories.map((category) => (
            <button
              className={`category-tab${activeCategory === category ? ' is-active' : ''}`}
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredBooks.length > 0 ? (
          <div className="book-grid">
            {filteredBooks.map((book) => <BookCard key={book.title} {...book} />)}
          </div>
        ) : (
          <p className="empty-state">No books found. Try another title or category.</p>
        )}
      </section>

      <footer className="site-footer">
        <span>Paper Trail Bookshop</span>
        <span>Good books. No hurry.</span>
      </footer>
    </main>
  )
}

export default App
