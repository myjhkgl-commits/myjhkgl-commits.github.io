import Reveal from './Reveal.jsx'
import { directions, profile } from '../data/content.js'

export default function Direction() {
  return (
    <section className="section direction" id="direction">
      <div className="container direction__inner">
        <Reveal className="section__head section__head--row">
          <div>
            <p className="section__label">
              <span>04</span>CAREER DIRECTION
            </p>
            <h2 className="section__title">求职方向</h2>
          </div>
          <p className="section__desc">
            以{profile.intent}为核心，
            <br />
            兼顾 AIGC、品牌与新媒体视觉。
          </p>
        </Reveal>

        <div className="direction__grid">
          {directions.map((item, index) => (
            <Reveal className="direction__item" delay={index * 80} y={30} key={item.title}>
              <span className="direction__no">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
