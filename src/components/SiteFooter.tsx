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
      <a className="footer-wordmark" href="/" onClick={(event) => follow(event, '/')}>TRIVE<span>®</span></a>
      <p>Three essentials. One lifestyle.</p>
      <div className="footer-links">
        <a href="/products" onClick={(event) => follow(event, '/products')}>Koleksi</a>
        <a href="/about" onClick={(event) => follow(event, '/about')}>Tentang kami</a>
        <a href="mailto:hello@trive.store">Kontak</a>
      </div>
      <span className="copyright">© {new Date().getFullYear()} TRIVE. MADE WITH INTENTION.</span>
    </footer>
  )
}
