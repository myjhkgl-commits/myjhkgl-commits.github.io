import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal.jsx'
import { profile, stats } from '../data/content.js'

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const [n, setN] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const duration = 1400
        const start = performance.now()
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - p, 3)
          setN(Math.round(eased * value))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [value])

  return (
    <div className="stat__num" ref={ref}>
      {n}
      <span className="stat__suffix">{suffix}</span>
    </div>
  )
}

const contacts = [
  { k: '邮箱', v: profile.email, href: `mailto:${profile.email}` },
  { k: '微信', v: profile.wechat },
  { k: '电话', v: profile.phone, href: `tel:${profile.phone}` },
  { k: '所在地', v: profile.location }
]

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <Reveal className="section__head">
          <p className="section__label">
            <span>01</span>ABOUT
          </p>
          <h2 className="section__title">个人经历</h2>
        </Reveal>

        <div className="about__grid">
          <Reveal className="about__visual" y={36}>
            <div className="about__portrait">
              <img src={profile.portrait} alt={`${profile.name} 人物肖像`} loading="lazy" />
              <div className="about__portrait-badge">
                <strong>TOP 3%</strong>
                <span>DESIGN RANKING</span>
              </div>
            </div>
          </Reveal>

          <div className="about__body">
            <Reveal as="h3" className="about__lead">
              扎实的平面功底，
              <br />
              乘以 AI 时代的效率。
            </Reveal>
            <Reveal as="p" className="about__text" delay={80}>
              {profile.intro}
            </Reveal>
            <Reveal as="p" className="about__text about__text--muted" delay={140}>
              {profile.intro2}
            </Reveal>

            <Reveal className="about__contacts" delay={200}>
              {contacts.map((c) => (
                <div className="about__contact" key={c.k}>
                  <span>{c.k}</span>
                  {c.href ? (
                    <a href={c.href} target="_blank" rel="noreferrer">
                      {c.v}
                    </a>
                  ) : (
                    <p>{c.v}</p>
                  )}
                </div>
              ))}
            </Reveal>

            <Reveal className="about__stats" delay={260}>
              {stats.map((s) => (
                <div className="stat" key={s.label}>
                  <Counter value={s.value} suffix={s.suffix} />
                  <div className="stat__label">{s.label}</div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
