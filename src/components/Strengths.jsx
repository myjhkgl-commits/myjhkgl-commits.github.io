import Reveal from './Reveal.jsx'
import { strengths } from '../data/content.js'

export default function Strengths() {
  return (
    <section className="section capabilities" id="capabilities">
      <div className="container">
        <Reveal className="section__head section__head--row">
          <div>
            <p className="section__label">
              <span>03</span>CAPABILITIES
            </p>
            <h2 className="section__title">个人优势</h2>
          </div>
          <p className="section__desc">
            横跨平面设计、AIGC 与内容运营的
            <br />
            复合能力结构。
          </p>
        </Reveal>

        <div className="cap__grid">
          {strengths.map((s, i) => (
            <Reveal key={s.no} className="cap__item" delay={i * 90} y={32}>
              <div className="cap__top">
                <span className="cap__no">{s.no}</span>
                <span className="cap__icon" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              <h3 className="cap__title">{s.title}</h3>
              <p className="cap__en">{s.en}</p>
              <p className="cap__desc">{s.desc}</p>
              <ul className="cap__points">
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
