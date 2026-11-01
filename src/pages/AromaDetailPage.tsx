import type { Product } from '../types/product'

interface AromaDetailPageProps {
  product: Product
  onNavigate: (path: string) => void
}

export function AromaDetailPage({ product, onNavigate }: AromaDetailPageProps) {
  const notes = [
    { label: 'Top notes', values: product.topNotes },
    { label: 'Heart notes', values: product.heartNotes },
    { label: 'Base notes', values: product.baseNotes },
  ].filter((group) => group.values?.length)

  return (
    <section className="product-detail-page aroma-detail-page">
      <div className="product-breadcrumbs">
        <button onClick={() => onNavigate('/')}>Beranda</button><span>/</span>
        <button onClick={() => onNavigate('/parfum')}>Parfum</button><span>/</span>
        <button onClick={() => onNavigate(`/parfum/${product.id}`)}>{product.name}</button><span>/</span>
        <span>Detail aroma</span>
      </div>
      <div className="product-detail-layout">
        <div className="product-detail-visual"><img src={product.image} alt={product.name} /></div>
        <article className="product-detail-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> AROMA PROFILE · JADE DISTRICT</p>
          <p className="product-brand">{product.brand}</p>
          <h1>{product.name}</h1>
          <p className="product-detail-description">{product.description}</p>
          <div className="product-detail-facts">
            {product.concentration && <div><dt>Konsentrasi</dt><dd>{product.concentration}</dd></div>}
            {product.volume && <div><dt>Ukuran tercantum</dt><dd>{product.volume}</dd></div>}
            {product.scentFamily && <div><dt>Keluarga aroma</dt><dd>{product.scentFamily}</dd></div>}
          </div>
          <section className="detail-scent-notes" aria-label="Komposisi aroma">
            <h2>Komposisi aroma</h2>
            {notes.map((group) => <div className="detail-scent-note" key={group.label}><h3>{group.label}</h3><p>{group.values?.join(' · ')}</p></div>)}
          </section>
          <p className="detail-note"><span>✳</span><span>Informasi ini dirangkum dari halaman resmi brand untuk referensi. Komposisi dapat berbeda pada varian atau reformulasi produk.</span></p>
          <div className="detail-source-links">
            <a href={product.detailsSourceUrl} target="_blank" rel="noreferrer">Lihat sumber resmi brand ↗</a>
          </div>
          <button className="button button-dark product-detail-back" onClick={() => onNavigate(`/parfum/${product.id}`)}>Kembali ke detail produk <span>↗</span></button>
        </article>
      </div>
    </section>
  )
}
