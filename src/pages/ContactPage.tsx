import { getWhatsAppUrl } from '../config/contact'

export function ContactPage() {
  const whatsappUrl = getWhatsAppUrl()
  return (
    <main className="contact-page">
      <section className="contact-panel">
        <p className="eyebrow"><span className="eyebrow-line" /> JADE DISTRICT · CONTACT</p>
        <h1>Let's <em>talk.</em></h1>
        <p>Punya pertanyaan mengenai produk, harga, atau ketersediaan? Hubungi penjual secara langsung melalui WhatsApp. Kami akan membantu memberikan informasi yang kamu butuhkan.</p>
        <a className={'button button-whatsapp' + (whatsappUrl ? '' : ' button-disabled')} href={whatsappUrl ?? undefined} target={whatsappUrl ? '_blank' : undefined} rel={whatsappUrl ? 'noreferrer' : undefined} aria-disabled={!whatsappUrl}>
          <span aria-hidden="true">◉</span> {whatsappUrl ? 'Chat via WhatsApp' : 'WhatsApp segera tersedia'} <span>↗</span>
        </a>
        {!whatsappUrl && <p className="contact-number-note">Nomor WhatsApp akan ditambahkan sebelum website dipublikasikan.</p>}
      </section>
    </main>
  )
}
