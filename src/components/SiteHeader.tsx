import { useState, type MouseEvent } from 'react'
interface SiteHeaderProps {
  currentPath: string
  dark: boolean
  search: string
  onNavigate: (path: string) => void
  onToggleTheme: () => void
  onSearchChange: (value: string) => void
}

const navItems: { label: string; path: string }[] = [
  { label: 'Semua produk', path: '/products' },
  { label: 'Parfum', path: '/parfum' },
  { label: 'Tas', path: '/tas' },
  { label: 'Vape', path: '/vape' },
  { label: 'Tentang JADE DISTRICT', path: '/about' },
]

export function SiteHeader({ currentPath, dark, search, onNavigate, onToggleTheme, onSearchChange }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const activeCategory = currentPath.split('/')[1]
  const isAbout = currentPath === '/about'
  const isHome = currentPath === '/'

  const follow = (event: MouseEvent<HTMLAnchorElement>, path: string) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return
    event.preventDefault()
    setMenuOpen(false)
    onNavigate(path)
  }

  return (
    <>
      <div className="announcement">
        <span>Pilihan lifestyle yang dikurasi dengan cermat</span>
        <span>Temukan pilihan JADE DISTRICT ↗</span>
      </div>
      <header className="site-header">
        <button className="icon-button mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'} aria-expanded={menuOpen}>
          {menuOpen ? '×' : '☰'}
        </button>
        <a className="wordmark" href="/" onClick={(event) => follow(event, '/')} aria-label="JADE DISTRICT, 玉境, beranda">
          <span className="wordmark-name">JADE DISTRICT</span>
          <span className="brand-chinese" lang="zh-Hans">玉境</span>
          <small>CURATED LIFESTYLE GOODS</small>
        </a>
        <nav className={'main-nav ' + (menuOpen ? 'nav-open' : '')} aria-label="Navigasi utama">
          {navItems.map((item) => {
            const isActive = item.path === '/about'
              ? isAbout
              : item.path === '/products'
                ? currentPath === '/products'
                : item.path === '/'
                  ? isHome
                  : activeCategory === item.path.slice(1)
            return (
              <a key={item.path} href={item.path} className={isActive ? 'active' : ''} aria-current={isActive ? 'page' : undefined} onClick={(event) => follow(event, item.path)}>
                {item.label}
              </a>
            )
          })}
        </nav>
        <div className="header-actions">
          <label className="search-box">
            <span aria-hidden="true">⌕</span>
            <input aria-label="Cari produk" placeholder="Cari produk" value={search} onChange={(event) => onSearchChange(event.target.value)} />
          </label>
          <button className="icon-button theme-toggle" onClick={onToggleTheme} aria-label={dark ? 'Aktifkan tema terang' : 'Aktifkan tema gelap'} title={dark ? 'Tema terang' : 'Tema gelap'}>{dark ? '☼' : '☾'}</button>
        </div>
      </header>
    </>
  )
}
