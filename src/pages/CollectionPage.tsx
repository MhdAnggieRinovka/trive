import type { Product, ProductCategory } from '../types/product'
import { ProductCard } from '../components/ProductCard'

interface CollectionPageProps {
  title: string
  intro: string
  category?: ProductCategory
  products: Product[]
  search: string
  sort: string
  layout: 'grid' | 'carousel' | 'list'
  onSortChange: (sort: string) => void
  onLayoutChange: (layout: 'grid' | 'carousel' | 'list') => void
  onNavigate: (path: string) => void
}

export function CollectionPage({ title, intro, category, products, search, sort, layout, onSortChange, onLayoutChange, onNavigate }: CollectionPageProps) {
  const visibleProducts = products
    .filter((product) => (!category || product.category === category) && [product.name, product.brand, product.category, product.description].some((value) => value.toLowerCase().includes(search.trim().toLowerCase())))
    .sort((a, b) => {
      if (sort === 'name') return a.name.localeCompare(b.name)
      if (sort === 'price') return (a.priceValue ?? Number.POSITIVE_INFINITY) - (b.priceValue ?? Number.POSITIVE_INFINITY)
      return 0
    })

  const openProduct = (product: Product) => onNavigate(`/${product.category.toLowerCase()}/${product.id}`)
  const categoryPath = (value: string) => value === 'Semua' ? '/products' : `/${value.toLowerCase()}`

  return (
    <section className="collection-section collection-page">
      <div className="collection-page-intro">
        <p className="eyebrow"><span className="eyebrow-line" /> KOLEKSI TRIVE</p>
        <h1>{title.split('|')[0]} {title.includes('|') && <em>{title.split('|')[1]}</em>}</h1>
        <p>{intro}</p>
      </div>
      <div className="section-heading collection-page-heading">
        <div><p className="eyebrow">TEMUKAN FAVORITMU</p><p className="section-subtitle">Pilih dengan tenang, temukan yang cocok.</p></div>
        <div className="collection-tools">
          <label className="sort-control"><span>Urutkan</span><select value={sort} onChange={(event) => onSortChange(event.target.value)}><option value="featured">Pilihan</option><option value="name">Nama A–Z</option><option value="price">Harga terendah</option></select></label>
          <div className="layout-toggle" role="group" aria-label="Layout katalog">
            <button className={layout === 'grid' ? 'selected' : ''} onClick={() => onLayoutChange('grid')} aria-label="Tampilan grid" title="Grid">▦</button>
            <button className={layout === 'carousel' ? 'selected' : ''} onClick={() => onLayoutChange('carousel')} aria-label="Tampilan carousel" title="Carousel">↔</button>
            <button className={layout === 'list' ? 'selected' : ''} onClick={() => onLayoutChange('list')} aria-label="Tampilan list" title="List">☷</button>
          </div>
        </div>
      </div>
      <div className="filter-row">
        <div className="category-filters">
          {['Semua', 'Parfum', 'Tas', 'Vape'].map((item) => (
            <button key={item} className={(item === (category ?? 'Semua') ? 'filter-chip active' : 'filter-chip')} onClick={() => onNavigate(categoryPath(item))}>{item === 'Semua' ? 'Semua produk' : item}</button>
          ))}
        </div>
        <span className="result-count">{visibleProducts.length} produk</span>
      </div>
      {visibleProducts.length ? (
        <div className={'product-layout layout-' + layout}>
          {visibleProducts.map((product, index) => <ProductCard key={product.id} product={product} index={index} onSelect={openProduct} />)}
        </div>
      ) : (
        <div className="empty-state">
          <span className="empty-symbol">✳</span>
          <p className="eyebrow">{category ? `KOLEKSI ${category.toUpperCase()}` : 'BELUM ADA HASIL'}</p>
          <h2>{category && visibleProducts.length === 0 && !search.trim() ? 'Barang belum tersedia.' : 'Belum ada produk yang cocok.'}</h2>
          <p>{category && !search.trim() ? 'Kami sedang mengkurasi kategori ini. Silakan kunjungi kembali nanti.' : 'Coba kata kunci lain atau lihat semua koleksi.'}</p>
          <button className="button button-outline" onClick={() => onNavigate('/products')}>Lihat semua produk <span>↗</span></button>
        </div>
      )}
      <div className="collection-endnote"><span>✳</span> GOOD FINDS, CHOSEN WITH INTENTION.</div>
    </section>
  )
}
