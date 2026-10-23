import type { Product } from '../types/product'
import { ProductCard } from '../components/ProductCard'

interface HomePageProps {
  featuredProducts: Product[]
  totalProducts: number
  onNavigate: (path: string) => void
}

const categoryTiles = [
  { number: '01', name: 'Semua pilihan', description: 'Seluruh koleksi', path: '/products' },
  { number: '02', name: 'Parfum', description: 'Temukan aroma khasmu', path: '/parfum' },
  { number: '03', name: 'Tas', description: 'Teman gaya harian', path: '/tas' },
  { number: '04', name: 'Vape', description: 'Koleksi kategori', path: '/vape' },
]

export function HomePage({ featuredProducts, totalProducts, onNavigate }: HomePageProps) {
  const openProduct = (product: Product) => onNavigate(`/${product.category.toLowerCase()}/${product.id}`)

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> THE TRIVE SELECTION · VOL. 01</p>
          <h1>Selera yang baik.<br /><em>Dipilih dengan cermat.</em></h1>
          <p className="hero-description">Kurasi parfum, tas, dan produk lifestyle untuk melengkapi gayamu. Temukan pilihan yang terasa personal, relevan, dan berkarakter.</p>
          <button className="button button-dark" onClick={() => onNavigate('/products')}>Jelajahi koleksi <span>↗</span></button>
          <div className="hero-footnote"><span>✳</span> PILIHAN BERMAKNA, TANPA BERLEBIHAN.</div>
        </div>
        <div className="hero-visual">
          <img className="hero-image" src="/products/parfum/Davidoff%20Cool%20Water%20by%20Wet%20Stone.png" alt="Davidoff Cool Water dalam foto editorial" />
          <div className="hero-image-caption"><span>THE ART OF EVERYDAY</span><span>01 — 03</span></div>
          <div className="floating-note"><span className="note-star">✳</span><span>CURATED<br />WITH INTENTION</span></div>
        </div>
        <div className="hero-index">01 / KOLEKSI PILIHAN</div>
      </section>

      <section className="category-strip" aria-label="Jelajahi kategori">
        {categoryTiles.map((item) => (
          <button key={item.path} className="category-tile" onClick={() => onNavigate(item.path)}>
            <span className="category-number">{item.number}</span>
            <span className="category-name">{item.name}</span>
            <span className="category-description">{item.description}</span>
            <span className="category-arrow">↗</span>
          </button>
        ))}
      </section>

      <section className="collection-section home-featured">
        <div className="section-heading">
          <div>
            <p className="eyebrow">PILIHAN TRIVE</p>
            <h2>Temuan yang <em>berkarakter.</em></h2>
            <p className="section-subtitle">Sebagian kecil dari {totalProducts} produk dalam koleksi kami.</p>
          </div>
          <button className="button button-outline" onClick={() => onNavigate('/products')}>Lihat semua produk <span>↗</span></button>
        </div>
        <div className="product-layout layout-grid">
          {featuredProducts.map((product, index) => <ProductCard key={product.id} product={product} index={index} onSelect={openProduct} />)}
        </div>
        <div className="collection-endnote"><span>✳</span> GOOD FINDS, CHOSEN WITH INTENTION.</div>
      </section>

      <section className="newsletter">
        <div>
          <p className="eyebrow">TRIVE NOTES</p>
          <h2>Temuan menarik,<br /><em>sesekali hadir.</em></h2>
          <p>Produk pilihan dan kabar terbaru, tanpa kebisingan.</p>
        </div>
        <button className="button button-light" onClick={() => onNavigate('/products')}>Jelajahi koleksi <span>↗</span></button>
      </section>
    </>
  )
}
