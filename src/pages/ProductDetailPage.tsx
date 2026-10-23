import type { Product } from '../types/product'

interface ProductDetailPageProps {
  product: Product
  onNavigate: (path: string) => void
}

export function ProductDetailPage({ product, onNavigate }: ProductDetailPageProps) {
  const noteGroups: { label: string; values?: string[] }[] = [
    { label: 'Top notes', values: product.topNotes },
    { label: 'Heart notes', values: product.heartNotes },
    { label: 'Base notes', values: product.baseNotes },
  ]

  return (
    <section className="product-detail-page">
      <div className="product-breadcrumbs">
        <button onClick={() => onNavigate('/')}>Beranda</button><span>/</span>
        <button onClick={() => onNavigate(`/${product.category.toLowerCase()}`)}>{product.category}</button><span>/</span>
        <span>{product.name}</span>
      </div>
      <div className="product-detail-layout">
        <div className="product-detail-visual"><img src={product.image} alt={product.name} /></div>
        <article className="product-detail-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> {product.category.toUpperCase()} · TRIVE EDIT</p>
          <p className="product-brand">{product.brand}</p>
          <h1>{product.name}</h1>
          {product.tag && <span className="detail-product-tag">{product.tag}</span>}
          <p className="product-detail-description">{product.description}</p>
          <div className="product-detail-price">{product.price}</div>
          <p className="price-reference-note">{product.priceNote ?? 'Harga referensi online; harga jual final TRIVE dan ketersediaan perlu dikonfirmasi.'}</p>

          <dl className="product-detail-facts">
            <div><dt>Isi / ukuran</dt><dd>{product.volume ?? 'Belum dikonfirmasi'}</dd></div>
            <div><dt>Konsentrasi</dt><dd>{product.concentration ?? 'Belum dikonfirmasi'}</dd></div>
            <div><dt>Karakter aroma</dt><dd>{product.scentFamily ?? 'Belum dirinci'}</dd></div>
            <div><dt>Kategori pemakaian</dt><dd>{product.gender ?? 'Belum dirinci'}</dd></div>
          </dl>

          {noteGroups.some((group) => group.values?.length) && (
            <section className="detail-scent-notes" aria-label="Catatan aroma">
              <h2>Catatan aroma</h2>
              {noteGroups.filter((group) => group.values?.length).map((group) => (
                <div className="detail-scent-note" key={group.label}>
                  <h3>{group.label}</h3><p>{group.values?.join(' · ')}</p>
                </div>
              ))}
            </section>
          )}
          {product.occasion && <p className="product-detail-occasion"><strong>Saran pemakaian:</strong> {product.occasion}</p>}
          <div className="detail-source-links">
            {product.detailsSourceUrl && <a href={product.detailsSourceUrl} target="_blank" rel="noreferrer">Detail aroma ↗</a>}
            {product.priceSourceUrl && <a href={product.priceSourceUrl} target="_blank" rel="noreferrer">Referensi harga ↗</a>}
          </div>
          <div className="detail-note"><span>✳</span><p>Gambar katalog merupakan visual AI, bukan bukti foto barang aktual. Pastikan nama varian, ukuran, kemasan, penjual, dan stok sebelum menetapkan harga jual.</p></div>
          <button className="button button-dark product-detail-back" onClick={() => onNavigate(`/${product.category.toLowerCase()}`)}>Kembali ke {product.category.toLowerCase()} <span>↗</span></button>
        </article>
      </div>
    </section>
  )
}
