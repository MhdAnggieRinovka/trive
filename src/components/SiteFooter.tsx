import type { MouseEvent } from 'react'

interface SiteFooterProps {
  onNavigate: (path: string) => void
}

export function SiteFooter({ onNavigate }: SiteFooterProps) {
  const follow = (event: MouseEvent<HTMLAnchorElement>, path: string) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return
    event.preventDefault()
    onNavigate(path)
  }

  return (
    <footer className="site-footer">
      <a className="footer-wordmark" href="/" onClick={(event) => follow(event, '/')} aria-label="JADE DISTRICT, 玉境, beranda">
        <span className="footer-wordmark-name">JADE DISTRICT</span>
        <span className="brand-chinese" lang="zh-Hans">玉境</span>
      </a>
      <p>玉境 · Your style. Your signature.</p>
      <div className="footer-links">
        <a href="/products" onClick={(event) => follow(event, '/products')}>Koleksi</a>
        <a href="/about" onClick={(event) => follow(event, '/about')}>Tentang kami</a>
        <a href="mailto:hello@trive.store">Kontak</a>
      </div>
      <span className="copyright">© {new Date().getFullYear()} JADE DISTRICT. MADE WITH INTENTION.</span>
    </footer>
  )
}
