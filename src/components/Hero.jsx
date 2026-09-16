import { asset, profile } from '../data/content.js'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__media">
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={profile.heroPoster}
        >
          <source src={asset('/videos/hero.mp4')} type="video/mp4" />
        </video>
        <div className="hero__overlay" />
        <div className="hero__noise" />
      </div>

      <div className="container hero__content">
        <div className="hero__side-mark" aria-hidden="true">
          <span>DESIGN PORTFOLIO</span>
          <b>01</b>
        </div>
        <p className="hero__overline">
          <span className="hero__overline-dot" />
          PORTFOLIO&nbsp;·&nbsp;2026&nbsp;·&nbsp;AVAILABLE FOR WORK
        </p>

        <h1 className="hero__title">
          视觉，在 AI 时代
          <br />
          被<span className="text-stroke">重新</span>定义。
        </h1>

        <p className="hero__sub">
          {profile.name} — {profile.roles.join(' / ')}。
          <br />
          视觉传达设计本科在读 · 专注 AIGC 创意与电商视觉转化。
        </p>

        <div className="hero__actions">
          <a href="#work" className="btn btn--primary">
            查看精选作品
            <span className="btn__arrow">→</span>
          </a>
          <a href="#contact" className="btn btn--ghost">
            发起合作
          </a>
        </div>

        <div className="hero__bottom">
          <div className="hero__roles">
            {profile.roles.map((r, i) => (
              <span key={r} className="hero__role">
                <em>0{i + 1}</em>
                {r}
              </span>
            ))}
          </div>
          <a href="#about" className="hero__scroll">
            <span className="hero__scroll-line" />
            SCROLL
          </a>
        </div>
      </div>
    </section>
  )
}
