import { useMemo, useState } from 'react'
import './App.css'
import { products, categories, categoryDescriptions } from './data/products'
import type { Category, Layout, Product } from './types/product'
import { ProductCard } from './components/ProductCard'
import { ProductModal } from './components/ProductModal'

function App() {
  const [layout, setLayout] = useState<Layout>('grid')
  const [dark, setDark] = useState(false)
  const [category, setCategory] = useState<Category>('Semua')
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('featured')
  const [selected, setSelected] = useState<Product | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  const visibleProducts = useMemo(() => {
    const filtered = products.filter((p) => (category === 'Semua' || p.category === category) && [p.name, p.brand, p.category].some((v) => v.toLowerCase().includes(search.toLowerCase().trim())))
    if (sort === 'name') return [...filtered].sort((a, b) => a.name.localeCompare(b.name))
    if (sort === 'price') return [...filtered].sort((a, b) => (a.priceValue ?? Number.POSITIVE_INFINITY) - (b.priceValue ?? Number.POSITIVE_INFINITY))
    return filtered
  }, [category, search, sort])

  return <div className={'site-shell ' + (dark ? 'theme-dark' : 'theme-light')}>
    <div className="announcement">Pilihan lifestyle yang dikurasi dengan cermat <span>Temukan pilihan TRIVE ↗</span></div>
    <header className="site-header">
      <button className="icon-button mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Buka menu">{menuOpen ? '×' : '☰'}</button>
      <a className="wordmark" href="#home">TRIVE<span>®</span><small>CURATED LIFESTYLE GOODS</small></a>
      <nav className={'main-nav ' + (menuOpen ? 'nav-open' : '')}>
        <a href="#collection" onClick={() => { setCategory('Semua'); setMenuOpen(false) }}>Semua produk</a>
        <a href="#collection" onClick={() => { setCategory('Parfum'); setMenuOpen(false) }}>Parfum</a>
        <a href="#collection" onClick={() => { setCategory('Tas'); setMenuOpen(false) }}>Tas</a>
        <a href="#collection" onClick={() => { setCategory('Vape'); setMenuOpen(false) }}>Vape</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>Tentang TRIVE</a>
      </nav>
      <div className="header-actions">
        <label className="search-box"><span>⌕</span><input aria-label="Cari produk" placeholder="Cari produk" value={search} onChange={(e) => setSearch(e.target.value)} /></label>
        <button className="icon-button theme-toggle" onClick={() => setDark(!dark)} aria-label={dark ? 'Aktifkan tema terang' : 'Aktifkan tema gelap'} title={dark ? 'Tema terang' : 'Tema gelap'}>{dark ? '☼' : '☾'}</button>
      </div>
    </header>
    <main id="home">
      <section className="hero">
        <div className="hero-copy"><p className="eyebrow"><span className="eyebrow-line" /> THE TRIVE SELECTION · VOL. 01</p><h1>Selera yang baik.<br /><em>Dipilih dengan cermat.</em></h1><p className="hero-description">Kurasi parfum, tas, dan produk lifestyle untuk melengkapi gayamu. Temukan pilihan yang terasa personal, relevan, dan berkarakter.</p><a className="button button-dark" href="#collection">Jelajahi koleksi <span>↗</span></a><div className="hero-footnote"><span>✳</span> PILIHAN BERMAKNA, TANPA BERLEBIHAN.</div></div>
        <div className="hero-visual"><img className="hero-image" src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1400&q=90" alt="Foto editorial botol parfum dengan pencahayaan hangat" /><div className="hero-image-caption"><span>THE ART OF EVERYDAY</span><span>01 — 03</span></div><div className="floating-note"><span className="note-star">✳</span><span>CURATED<br />WITH INTENTION</span></div></div>
        <div className="hero-index">01 / KOLEKSI PILIHAN</div>
      </section>
      <section className="category-strip" aria-label="Pilih kategori">{categories.map((item, i) => <button key={item} className={'category-tile ' + (category === item ? 'category-active' : '')} onClick={() => { setCategory(item); document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' }) }}><span className="category-number">0{i + 1}</span><span className="category-name">{item === 'Semua' ? 'Semua pilihan' : item}</span><span className="category-description">{categoryDescriptions[i]}</span><span className="category-arrow">↗</span></button>)}</section>
      <section className="collection-section" id="collection">
        <div className="section-heading"><div><p className="eyebrow">KOLEKSI TRIVE</p><h2>Produk pilihan, <em>penuh karakter.</em></h2><p className="section-subtitle">Dikurasi untuk gayamu. Dipilih untuk duniamu.</p></div><div className="collection-tools"><label className="sort-control"><span>Urutkan</span><select value={sort} onChange={(e) => setSort(e.target.value)}><option value="featured">Pilihan</option><option value="name">Nama A–Z</option><option value="price">Harga terendah</option></select></label><div className="layout-toggle" role="group" aria-label="Layout katalog"><button className={layout === 'grid' ? 'selected' : ''} onClick={() => setLayout('grid')} aria-label="Tampilan grid" title="Grid">▦</button><button className={layout === 'carousel' ? 'selected' : ''} onClick={() => setLayout('carousel')} aria-label="Tampilan carousel" title="Carousel">↔</button><button className={layout === 'list' ? 'selected' : ''} onClick={() => setLayout('list')} aria-label="Tampilan list" title="List">☷</button></div></div></div>
        <div className="filter-row"><div className="category-filters">{categories.map((item) => <button key={item} className={category === item ? 'filter-chip active' : 'filter-chip'} onClick={() => setCategory(item)}>{item === 'Semua' ? 'Semua produk' : item}</button>)}</div><span className="result-count">{visibleProducts.length} produk</span></div>
        {visibleProducts.length ? <div className={'product-layout layout-' + layout}>{visibleProducts.map((product, index) => <ProductCard key={product.id} product={product} index={index} onSelect={setSelected} />)}</div> : <div className="empty-state"><span className="empty-symbol">✳</span><p className="eyebrow">{category === 'Vape' ? 'KOLEKSI VAPE' : 'BELUM ADA HASIL'}</p><h3>{category === 'Vape' ? 'Barang belum tersedia.' : 'Belum ada produk yang cocok.'}</h3><p>{category === 'Vape' ? 'Kami sedang mengkurasi kategori ini. Silakan kunjungi kembali nanti.' : 'Coba kata kunci lain atau lihat semua koleksi.'}</p><button className="button button-outline" onClick={() => { setCategory('Semua'); setSearch('') }}>Lihat semua produk <span>↗</span></button></div>}
        <div className="collection-endnote"><span>✳</span> GOOD FINDS, CHOSEN WITH INTENTION.</div>
      </section>
      <section className="manifesto" id="about"><div className="manifesto-mark">T<span>.</span></div><div className="manifesto-copy"><p className="eyebrow">TENTANG TRIVE</p><h2>Lebih sedikit distraksi.<br /><em>Lebih banyak makna.</em></h2></div><div className="manifesto-description"><p>TRIVE mempertemukan pilihan yang melengkapi gaya personal: aroma yang mudah diingat, tas yang selalu ingin dibawa, dan detail yang berbicara tanpa berlebihan.</p><p>Karena selera itu personal. Kami ingin membuat proses menemukan produk terasa lebih menyenangkan dan terkurasi.</p><a href="#collection" className="underlined-link">Temukan pilihanmu <span>↗</span></a></div></section>
      <section className="newsletter"><div><p className="eyebrow">TRIVE NOTES</p><h2>Temuan menarik,<br /><em>sesekali hadir.</em></h2><p>Produk pilihan dan kabar terbaru, tanpa kebisingan.</p></div><a className="button button-light" href="#collection">Jelajahi koleksi <span>↗</span></a></section>
    </main>
    <footer className="site-footer"><a className="footer-wordmark" href="#home">TRIVE<span>®</span></a><p>Three essentials. One lifestyle.</p><div className="footer-links"><a href="#collection">Koleksi</a><a href="#about">Tentang kami</a><a href="mailto:hello@trive.store">Kontak</a></div><span className="copyright">© {new Date().getFullYear()} TRIVE. MADE WITH INTENTION.</span></footer>
    {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
  </div>
}
export default App
