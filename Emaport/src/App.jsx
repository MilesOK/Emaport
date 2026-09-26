import { useEffect, useState } from 'react'

const collections = ['All work', 'Portraits', 'Editorial', 'Stories']

const work = [
  { title: 'Untitled no. 08', category: 'Portraits', place: 'Lagos, 2025', image: '/images/portrait.jpg', tone: 'tall' },
  { title: 'On the move', category: 'Editorial', place: 'Accra, 2025', image: '/images/movement.jpg', tone: 'wide' },
  { title: 'Soft focus', category: 'Portraits', place: 'Cape Town, 2024', image: '/images/studio.jpg', tone: 'square' },
  { title: 'In the city', category: 'Stories', place: 'Nairobi, 2024', image: '/images/city.jpg', tone: 'short' },
  { title: 'After light', category: 'Editorial', place: 'Lagos, 2024', image: '/images/editorial.jpg', tone: 'tall' },
  { title: 'Golden hours', category: 'Stories', place: 'Marrakech, 2024', image: '/images/golden-hour.jpg', tone: 'wide' },
]

const testimonials = [
  {
    quote: 'Mara has a rare way of making a room fall away. The photographs feel like the version of ourselves we were hoping for, but completely honest.',
    name: 'Nora & Michael',
    detail: 'Private celebration, Amalfi',
  },
  {
    quote: 'The entire process was quietly precise, generous, and full of beautiful surprises. Every frame feels considered without ever feeling staged.',
    name: 'Amina O.',
    detail: 'Founder portrait session, Lagos',
  },
  {
    quote: 'Mara saw the atmosphere of the day before we had words for it. Our album feels less like documentation and more like a place we can return to.',
    name: 'Esi & Dara',
    detail: 'Destination wedding, Accra',
  },
]

function App() {
  const [activeCollection, setActiveCollection] = useState('All work')
  const [testimonialIndex, setTestimonialIndex] = useState(0)

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.14 },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  const visibleWork = activeCollection === 'All work'
    ? work
    : work.filter((piece) => piece.category === activeCollection)
  const testimonial = testimonials[testimonialIndex]

  const changeTestimonial = (direction) => {
    setTestimonialIndex((current) => (current + direction + testimonials.length) % testimonials.length)
  }

  return (
    <main>
      <section className="hero" id="home">
        <nav className="nav shell" aria-label="Primary navigation">
          <a className="wordmark" href="#home" aria-label="Ben Walker home">Ben<span>Walker</span></a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#journal">Journal</a>
          </div>
          <a className="nav-contact" href="#contact">Let's talk <span aria-hidden="true">&#8599;</span></a>
        </nav>

        <div className="hero-copy shell">
          <p className="eyebrow light">Ben Walker / photographer</p>
          <h1>Making room<br />for the real.</h1>
          <div className="hero-bottom">
            <p>Portraits, celebrations, and quiet stories for people who want to remember how it felt.</p>
            <a className="text-link light" href="#work">Explore selected work <span aria-hidden="true">&#8595;</span></a>
          </div>
        </div>
        <p className="hero-location">Based in Uyo<br />Available anywhere</p>
      </section>

      <section className="intro shell" id="about" data-reveal>
        <p className="eyebrow">01 / A little introduction</p>
        <div className="intro-grid">
          <h2>There is beauty in the<br /><em>in-between.</em></h2>
          <div className="intro-copy">
            <p>I am Ben, a Uyo-based photographer drawn to honest gestures, imperfect light, and the pulse of people together. My work lives somewhere between observation and feeling.</p>
            <a className="text-link" href="#contact">More about my approach <span aria-hidden="true">&#8599;</span></a>
          </div>
        </div>
        <div className="intro-image-wrap">
          <img src="/images/golden-hour.jpg" alt="Warm outdoor portrait in evening light" />
          <p>Photographing people and places since 2021.</p>
        </div>
      </section>

      <section className="work-section" id="work" data-reveal>
        <div className="shell work-heading">
          <div>
            <p className="eyebrow">02 / Selected work</p>
            <h2>Stories worth<br />holding onto.</h2>
          </div>
          <div className="collection-switch" aria-label="Filter gallery">
            {collections.map((collection) => (
              <button
                className={activeCollection === collection ? 'active' : ''}
                key={collection}
                onClick={() => setActiveCollection(collection)}
                type="button"
              >
                {collection}
              </button>
            ))}
          </div>
        </div>
        <div className="gallery shell">
          {visibleWork.map((piece) => (
            <article className={`work-card ${piece.tone}`} key={piece.title}>
              <div className="work-image">
                <img src={piece.image} alt={`${piece.title} photography`} />
                <span className="view-mark" aria-hidden="true">&#8599;</span>
              </div>
              <div className="work-meta">
                <h3>{piece.title}</h3>
                <p>{piece.category} / {piece.place}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="shell archive-link"><a className="text-link" href="#contact">View the full archive <span aria-hidden="true">&#8599;</span></a></div>
      </section>

      <section className="services shell" data-reveal>
        <p className="eyebrow">03 / Ways to work together</p>
        <div className="services-grid">
          <h2>For the moments that ask to be <em>felt again.</em></h2>
          <div className="service-list">
            <article><span>01</span><div><h3>Portraiture</h3><p>Editorial portraits with warmth, character, and a little breathing room.</p></div></article>
            <article><span>02</span><div><h3>Weddings & celebrations</h3><p>Unscripted coverage of big days and all the smaller moments inside them.</p></div></article>
            <article><span>03</span><div><h3>Brand stories</h3><p>Images for considered brands, creative people, and places with a point of view.</p></div></article>
          </div>
        </div>
      </section>

      <section className="testimonial-section" data-reveal>
        <div className="shell testimonial-layout">
          <div className="testimonial-photo"><img src="/images/editorial.jpg" alt="Editorial portrait in a field" /></div>
          <div className="testimonial-content">
            <p className="eyebrow">04 / Kind words</p>
            <blockquote>“{testimonial.quote}”</blockquote>
            <div className="testimonial-footer">
              <p><strong>{testimonial.name}</strong><br />{testimonial.detail}</p>
              <div className="slider-actions">
                <button type="button" onClick={() => changeTestimonial(-1)} aria-label="Previous testimonial">&#8592;</button>
                <span>{String(testimonialIndex + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}</span>
                <button type="button" onClick={() => changeTestimonial(1)} aria-label="Next testimonial">&#8594;</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="journal shell" id="journal" data-reveal>
        <div className="journal-top"><p className="eyebrow">05 / From the journal</p><a className="text-link" href="#contact">All field notes <span aria-hidden="true">&#8599;</span></a></div>
        <div className="journal-grid">
          <article><p>Notes from Lagos / 2025</p><h3>The colour of home, in all its forms.</h3><a href="#contact" aria-label="Read The colour of home, in all its forms">Read story <span aria-hidden="true">&#8599;</span></a></article>
          <article><p>Travel / 2025</p><h3>A long weekend on the Atlantic coast.</h3><a href="#contact" aria-label="Read A long weekend on the Atlantic coast">Read story <span aria-hidden="true">&#8599;</span></a></article>
          <article><p>Process / 2024</p><h3>Why I will always leave room for the unexpected.</h3><a href="#contact" aria-label="Read Why I will always leave room for the unexpected">Read story <span aria-hidden="true">&#8599;</span></a></article>
        </div>
      </section>

      <section className="contact" id="contact" data-reveal>
        <div className="shell contact-inner">
          <p className="eyebrow light">06 / Enquiries & collaborations</p>
          <h2>Let's make<br /><em>something true.</em></h2>
          <a className="contact-email" href="mailto:hello@maranolan.studio">hello@maranolan.studio <span aria-hidden="true">&#8599;</span></a>
        </div>
      </section>

      <footer className="footer shell">
        <a className="wordmark dark" href="#home">BEN<span>WALKER</span></a>
        <p>© {new Date().getFullYear()} Ben Walker Studios</p>
        <div><a href="#home">Instagram</a><a href="#home">Pinterest</a></div>
      </footer>
    </main>
  )
}

export default App
