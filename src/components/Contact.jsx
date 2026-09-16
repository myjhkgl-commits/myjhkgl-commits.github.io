import { useState } from 'react'
import Reveal from './Reveal.jsx'
import { asset, profile } from '../data/content.js'

export default function Contact() {
  const [qrOpen, setQrOpen] = useState(false)

  return (
    <footer className="contact" id="contact">
      <div className="contact__glow" />
      <div className="container contact__inner">
        <Reveal className="contact__head">
          <p className="section__label section__label--center">
            <span>04</span>LET&apos;S WORK TOGETHER
          </p>
          <h2 className="contact__title">
            一起做点
            <br />
            <span className="text-stroke">不一样</span>的设计。
          </h2>
        </Reveal>

        <Reveal className="contact__email" delay={120}>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </Reveal>

        <Reveal className="contact__meta" delay={200}>
          <div className="contact__row">
            <span>微信</span>
            <p>{profile.wechat}</p>
          </div>
          <div className="contact__row">
            <span>电话</span>
            <a href={`tel:${profile.phone}`}>{profile.phone}</a>
          </div>
          <div className="contact__row">
            <span>坐标</span>
            <p>{profile.location}</p>
          </div>
          <div className="contact__row">
            <span>求职意向</span>
            <p>{profile.intent}</p>
          </div>
        </Reveal>

        <Reveal className="contact__cta" delay={260}>
          <button
            className="btn btn--primary btn--large"
            onClick={() => setQrOpen(true)}
          >
            与我联系
            <span className="btn__arrow">→</span>
          </button>
        </Reveal>

        {qrOpen && (
          <div className="qr-modal" onClick={() => setQrOpen(false)}>
            <div className="qr-modal__inner" onClick={(e) => e.stopPropagation()}>
              <button
                className="qr-modal__close"
                onClick={() => setQrOpen(false)}
                aria-label="关闭"
              >
                ✕
              </button>
              <img src={asset('/wechat-qr.jpg')} alt="微信二维码" className="qr-modal__img" />
              <p className="qr-modal__hint">扫一扫，添加我为朋友。</p>
              <p className="qr-modal__wechat">{profile.wechat}</p>
            </div>
          </div>
        )}

        <div className="contact__foot">
          <span>© 2026 {profile.nameEn} PORTFOLIO</span>
          <span>DESIGNED &amp; BUILT WITH CARE</span>
          <a href="#home" className="contact__top">
            回到顶部 ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
