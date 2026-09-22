import Reveal from './Reveal.jsx'
import { experience, interests, profile, skills } from '../data/content.js'

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <Reveal className="section__head section__head--row">
          <div>
            <p className="section__label">
              <span>05</span>SKILLS &amp; BACKGROUND
            </p>
            <h2 className="section__title">技能与经历</h2>
          </div>
          <p className="section__desc">
            工具、语言、证书与实习经历，
            <br />
            构成完整的创作与协作能力。
          </p>
        </Reveal>

        <div className="skills__grid">
          {skills.map((g, gi) => (
            <Reveal className="skills__col" key={g.group} delay={gi * 80} y={30}>
              <p className="skills__group">{g.group}</p>
              <p className="skills__en">{g.en}</p>
              <ul className="skills__list">
                {g.items.map((it) => (
                  <li key={`${it.name}-${it.level}`}>
                    <span>{it.name}</span>
                    <em>{it.level}</em>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}

          <Reveal className="skills__col skills__col--interest" delay={240} y={30}>
            <p className="skills__group">兴趣 / 特长</p>
            <p className="skills__en">INTERESTS</p>
            <div className="skills__tags">
              {interests.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <p className="skills__note">
              {profile.age} · {profile.location}
              <br />
              求职方向：{profile.intent}
            </p>
          </Reveal>
        </div>

        {/* ---------- 实习与社团经历 ---------- */}
        <div className="exp">
          {experience.map((e, i) => (
            <Reveal className="exp__item" key={e.org} delay={i * 90} y={28}>
              <div className="exp__left">
                <span className="exp__kind">{e.kind}</span>
                <span className="exp__period">{e.period}</span>
              </div>
              <div className="exp__right">
                <h4 className="exp__org">{e.org}</h4>
                <p className="exp__role">{e.role}</p>
                <p className="exp__desc">{e.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ---------- 个人总结 ---------- */}
        <Reveal className="summary" y={30}>
          <p className="summary__label">PROFILE SUMMARY</p>
          <p className="summary__text">{profile.summary}</p>
        </Reveal>
      </div>
    </section>
  )
}
