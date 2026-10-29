import { useState, useEffect, useCallback, useMemo } from 'react'
import Reveal from './Reveal.jsx'
import { academic, academic2, awardsSummary, certificates, certFilters } from '../data/content.js'

export default function Awards() {
  const [filter, setFilter] = useState('all')
  const [active, setActive] = useState(null) // 当前查看的证书（在过滤后列表中的索引）

  const list = useMemo(
    () => certificates.filter(certFilters.find((f) => f.key === filter).match),
    [filter]
  )

  const close = useCallback(() => setActive(null), [])
  const prev = useCallback(
    () => setActive((i) => (i === null ? null : (i - 1 + list.length) % list.length)),
    [list.length]
  )
  const next = useCallback(
    () => setActive((i) => (i === null ? null : (i + 1) % list.length)),
    [list.length]
  )

  useEffect(() => {
    if (active === null) return
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

  const current = active === null ? null : list[active]

  return (
    <section className="section awards" id="awards">
      <div className="container">
        <Reveal className="section__head section__head--row">
          <div>
            <p className="section__label">
              <span>03</span>ACADEMIC &amp; AWARDS
            </p>
            <h2 className="section__title">大创项目与获奖</h2>
          </div>
          <p className="section__desc">
            以大学生创新创业项目为研究底座，
            <br />
            累计斩获 19 项国家级 / 省级奖项，荣誉资质一并陈列。
          </p>
        </Reveal>

        <div className="awards__grid">
          {/* ---------- 左：大创项目 ---------- */}
          <Reveal className="academic" y={34}>
            <div className="academic__head">
              <span className="academic__badge">{academic.badge}</span>
              <span className="academic__period">{academic.period}</span>
            </div>

            <p className="academic__role">
              <em>{academic.role}</em>
              <span>{academic.level}</span>
            </p>

            <h3 className="academic__title">{academic.title}</h3>
            <p className="academic__subtitle">{academic.subtitle}</p>
            <p className="academic__desc">{academic.desc}</p>

            <ul className="academic__list">
              {academic.items.map((it) => (
                <li key={it.no}>
                  <span className="academic__no">{it.no}</span>
                  <div>
                    <strong>{it.key}</strong>
                    <p>{it.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* ---------- 右：获奖统计概览 ---------- */}
          <Reveal className="awsum" y={34} delay={90}>
            <div className="awsum__hero">
              <div className="awsum__num">
                {awardsSummary.total}
                <span>项</span>
              </div>
              <div className="awsum__hero-side">
                <p className="awsum__hero-line">
                  国家级 <b>{awardsSummary.national}</b> 项
                </p>
                <p className="awsum__hero-line">
                  省级 <b>{awardsSummary.province}</b> 项
                </p>
                <p className="awsum__span">{awardsSummary.span}</p>
              </div>
            </div>

            <ul className="awsum__list">
              {awardsSummary.breakdown.map((b) => (
                <li key={b.label}>
                  <span>{b.label}</span>
                  <i style={{ '--w': `${(b.value / 6) * 100}%` }} />
                  <b>{b.value}</b>
                </li>
              ))}
            </ul>

            <p className="awsum__note">{awardsSummary.note}</p>
          </Reveal>
        </div>

        {/* ---------- 第二项大创：枣庄石榴文化 ---------- */}
        <Reveal className="academic academic--wide" y={34}>
          <div className="academic__head">
            <span className="academic__badge">{academic2.badge}</span>
            <span className="academic__period">{academic2.period}</span>
          </div>
          <div className="academic__body">
            <div className="academic__main">
              <p className="academic__role">
                <em>{academic2.role}</em>
                <span>{academic2.level}</span>
              </p>
              <h3 className="academic__title">{academic2.title}</h3>
              <p className="academic__subtitle">{academic2.subtitle}</p>
              <p className="academic__desc">{academic2.desc}</p>
              <ul className="academic__list">
                {academic2.items.map((it) => (
                  <li key={it.no}>
                    <span className="academic__no">{it.no}</span>
                    <div>
                      <strong>{it.key}</strong>
                      <p>{it.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="academic__gallery">
              {academic2.images.map((src, i) => (
                <img key={src} src={src} alt={`${academic2.title} ${i + 1}`} loading="lazy" />
              ))}
            </div>
          </div>
        </Reveal>

        {/* ---------- 证书墙 ---------- */}
        <Reveal className="certs__bar" y={26}>
          <div className="certs__filters">
            {certFilters.map((f) => (
              <button
                key={f.key}
                className={`certs__chip ${filter === f.key ? 'certs__chip--on' : ''}`}
                onClick={() => {
                  setFilter(f.key)
                  setActive(null)
                }}
              >
                {f.label}
                <em>{certificates.filter(f.match).length}</em>
              </button>
            ))}
          </div>
          <p className="certs__hint">点击证书查看大图，支持 ← → 键切换</p>
        </Reveal>

        <div className="certs__wall" key={filter}>
          {list.map((c, i) => (
            <button
              key={c.id}
              className={`cert cert--${c.level}`}
              onClick={() => setActive(i)}
              style={{ animationDelay: `${Math.min(i, 12) * 45}ms` }}
            >
              <span className="cert__media">
                <img src={c.image} alt={`${c.comp} ${c.grade}`} loading="lazy" />
              </span>
              <span className="cert__body">
                <span className="cert__meta">
                  <span className="cert__date">{c.date}</span>
                  <span className="cert__level">{c.grade}</span>
                </span>
                <span className="cert__work">{c.work}</span>
                <span className="cert__comp">{c.comp}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ---------- 大图查看 ---------- */}
      {current && (
        <div className="lightbox" onClick={close}>
          <div className="lightbox__inner" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox__close" onClick={close} aria-label="关闭">
              ✕
            </button>

            <button className="lightbox__nav lightbox__nav--prev" onClick={prev} aria-label="上一张">
              ‹
            </button>
            <button className="lightbox__nav lightbox__nav--next" onClick={next} aria-label="下一张">
              ›
            </button>

            <img src={current.image} alt={`${current.comp} ${current.grade}`} className="lightbox__img" />

            <div className="lightbox__meta">
              <p className="lightbox__category">
                {current.date} · {current.grade}
              </p>
              <h3 className="lightbox__title">
                {current.work}
                <span className="lightbox__count">
                  {active + 1} / {list.length}
                </span>
              </h3>
              <p className="lightbox__desc">{current.comp}</p>
              {current.team && (
                <div className="lightbox__tags">
                  <span>作者 / 团队：{current.team}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
