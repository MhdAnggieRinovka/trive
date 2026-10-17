import type { Product } from '../types/product'

interface ProductModalProps {
  product: Product
  onClose: () => void
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <section className="product-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close icon-button" onClick={onClose} aria-label="Tutup detail">×</button>
        <div className="modal-image"><img src={product.image} alt={product.name} /></div>
        <div className="modal-content">
          <p className="eyebrow">{product.category.toUpperCase()} · TRIVE EDIT</p>
          <p className="product-brand">{product.brand}</p>
          <h2 id="modal-title">{product.name}</h2>
          <p>{product.description}</p>
          <div className="modal-price">{product.price}</div>
          <div className="detail-note"><span>✳</span><p>Detail, foto, harga, dan ketersediaan akan ditampilkan setelah data produk diverifikasi.</p></div>
          <button className="button button-dark modal-done" onClick={onClose}>Kembali ke koleksi <span>↗</span></button>
        </div>
      </section>
    </div>
  )
}
