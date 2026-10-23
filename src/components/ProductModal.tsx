import type { Product } from '../types/product'

interface ProductModalProps {
  product: Product
  onClose: () => void
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const noteGroups: { label: string; values?: string[] }[] = [
    { label: 'Top notes', values: product.topNotes },
    { label: 'Heart notes', values: product.heartNotes },
    { label: 'Base notes', values: product.baseNotes },
  ]

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <section className="product-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close icon-button" onClick={onClose} aria-label="Tutup detail">×</button>
        <div className="modal-image"><img src={product.image} alt={product.name} /></div>
        <div className="modal-content">
          <p className="eyebrow">{product.category.toUpperCase()} · TRIVE EDIT</p>
          <p className="product-brand">{product.brand}</p>
          <h2 id="modal-title">{product.name}</h2>
          <p className="modal-description">{product.description}</p>

          <div className="modal-price">{product.price}</div>
          <p className="price-reference-note">
            {product.priceNote ?? 'Harga referensi online; harga jual final TRIVE dan ketersediaan perlu dikonfirmasi.'}
          </p>

          <dl className="modal-facts">
            <div><dt>Isi / ukuran</dt><dd>{product.volume ?? 'Belum dikonfirmasi'}</dd></div>
            <div><dt>Konsentrasi</dt><dd>{product.concentration ?? 'Belum dikonfirmasi'}</dd></div>
            <div><dt>Karakter aroma</dt><dd>{product.scentFamily ?? 'Belum dirinci'}</dd></div>
            <div><dt>Kategori pemakaian</dt><dd>{product.gender ?? 'Belum dirinci'}</dd></div>
          </dl>

          {noteGroups.some((group) => group.values?.length) && (
            <section className="scent-notes" aria-label="Catatan aroma">
              <h3>Catatan aroma</h3>
              <div className="scent-notes-grid">
                {noteGroups.filter((group) => group.values?.length).map((group) => (
                  <div className="scent-note-group" key={group.label}>
                    <h4>{group.label}</h4>
                    <p>{group.values?.join(' · ')}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {product.occasion && (
            <p className="occasion-note"><strong>Saran pemakaian:</strong> {product.occasion}</p>
          )}

          <div className="detail-source-links">
            {product.detailsSourceUrl && <a href={product.detailsSourceUrl} target="_blank" rel="noreferrer">Detail aroma ↗</a>}
            {product.priceSourceUrl && <a href={product.priceSourceUrl} target="_blank" rel="noreferrer">Referensi harga ↗</a>}
          </div>

          <div className="detail-note"><span>✳</span><p>Foto katalog merupakan visual AI, bukan bukti foto barang aktual. Pastikan nama varian, ukuran, kemasan, penjual, dan stok sebelum menetapkan harga jual.</p></div>
          <button className="button button-dark modal-done" onClick={onClose}>Kembali ke koleksi <span>↗</span></button>
        </div>
      </section>
    </div>
  )
}
