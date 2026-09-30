const POSTS = [
  {
    date: 'Sep 12, 2026',
    category: 'Design',
    time: '6 min read',
    title: 'Designing for attention without stealing it',
    excerpt:
      'The web is loud by default. A field guide to interfaces that respect focus — and earn it honestly.',
  },
  {
    date: 'Aug 03, 2026',
    category: 'Craft',
    time: '8 min read',
    title: 'What makes an interface feel inevitable',
    excerpt:
      'Great products don’t feel designed; they feel discovered. On the quiet mechanics of obviousness.',
  },
  {
    date: 'Jun 21, 2026',
    category: 'Engineering',
    time: '5 min read',
    title: 'Building motion systems that stay accessible',
    excerpt:
      'How to ship expressive animation that still respects reduced motion, focus, and performance budgets.',
  },
]

export default function Journal() {
  return (
    <section className="section" id="journal">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Journal</p>
          <h2>Notes from the studio.</h2>
        </div>
        <div className="posts">
          {POSTS.map((post, i) => (
            <article className="post" key={post.title} data-reveal style={{ '--reveal-delay': `${i * 90}ms` }}>
              <p className="post-date">{post.date}</p>
              <div>
                <h3>
                  <a className="post-link" href="#journal" aria-label={`Read: ${post.title}`}>
                    {post.title}
                  </a>
                </h3>
                <p className="post-excerpt">{post.excerpt}</p>
              </div>
              <p className="post-meta">
                {post.category} · {post.time}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
