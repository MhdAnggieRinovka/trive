interface SiteFooterProps {
  onNavigate: (path: string) => void
}

export function SiteFooter({ onNavigate }: SiteFooterProps) {
  const follow = (event: React.MouseEvent<HTMLAnchorElement>, path: string) => {
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
