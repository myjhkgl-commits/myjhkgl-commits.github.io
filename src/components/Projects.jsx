import { useState, useEffect, useCallback } from 'react'
import Reveal from './Reveal.jsx'
import { projects } from '../data/content.js'

export default function Projects() {
  const [active, setActive] = useState(null)
  const [index, setIndex] = useState(0)

  const openProject = (p) => {
    setActive(p)
    setIndex(0)
  }

  const close = useCallback(() => {
    setActive(null)
    setIndex(0)
  }, [])

  const prev = useCallback(() => {
    if (!active) return
    const total = active.images?.length || 1
    setIndex((i) => (i - 1 + total) % total)
  }, [active])

  const next = useCallback(() => {
    if (!active) return
    const total = active.images?.length || 1
    setIndex((i) => (i + 1) % total)
  }, [active])

  useEffect(() => {
    if (!active) return
    const handler = (e) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [active, close, prev, next])

  return (
    <section className="section work" id="work">
      <div className="container">
        <Reveal className="section__head section__head--row">
          <div>
            <p className="section__label">
              <span>02</span>SELECTED WORK
            </p>
            <h2 className="section__title">精选作品</h2>
          </div>
          <p className="section__desc">
            六个代表性作品，
            <br />
            覆盖字体、IP、信息可视化与产品设计。
          </p>
        </Reveal>

        <div className="work__grid">
          {projects.map((p, i) => (
            <Reveal
              key={p.id}
              className={`work__card work__card--${i + 1}`}
              delay={(i % 3) * 90}
              y={36}
            >
              <div
                className="work__card-inner work__card-inner--clickable"
                onClick={() => openProject(p)}
              >
                <div className="work__media">
                  <img src={p.image} alt={p.title} loading="lazy" />
                  <div className="work__media-veil" />
                  <span className="work__index">{p.id}</span>
                  <span className="work__year">{p.year}</span>
                  <span className="work__zoom">点击查看 · {p.images?.length || 1} 张图</span>
                </div>
                <div className="work__info">
                  <p className="work__category">{p.category}</p>
                  <h3 className="work__title">
                    {p.title}
                    <span className="work__arrow">→</span>
                  </h3>
                  <p className="work__desc">{p.desc}</p>
                  <div className="work__tags">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <div className="lightbox" onClick={close}>
          <div className="lightbox__inner" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox__close" onClick={close} aria-label="关闭">
              ✕
            </button>

            {active.images && active.images.length > 1 && (
              <>
                <button
                  className="lightbox__nav lightbox__nav--prev"
                  onClick={prev}
                  aria-label="上一张"
                >
                  ‹
                </button>
                <button
                  className="lightbox__nav lightbox__nav--next"
                  onClick={next}
                  aria-label="下一张"
                >
                  ›
                </button>
              </>
            )}

            <img
              src={active.images ? active.images[index] : active.image}
              alt={`${active.title} ${index + 1}`}
              className="lightbox__img"
              key={index}
            />

            {active.images && active.images.length > 1 && (
              <div className="lightbox__thumbnails">
                {active.images.map((src, i) => (
                  <button
                    key={src}
                    className={`lightbox__thumb ${i === index ? 'lightbox__thumb--active' : ''}`}
                    onClick={() => setIndex(i)}
                  >
                    <img src={src} alt="" loading="lazy" />
                  </button>
                ))}
              </div>
            )}

            <div className="lightbox__meta">
              <p className="lightbox__category">{active.category}</p>
              <h3 className="lightbox__title">
                {active.title}
                {active.images && active.images.length > 1 && (
                  <span className="lightbox__count">
                    {index + 1} / {active.images.length}
                  </span>
                )}
              </h3>
              <p className="lightbox__desc">{active.desc}</p>
              <div className="lightbox__tags">
                {active.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
