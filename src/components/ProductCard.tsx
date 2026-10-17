import type { Product } from '../types/product'

interface ProductCardProps {
  product: Product
  index: number
  onSelect: (product: Product) => void
}

export function ProductCard({ product, index, onSelect }: ProductCardProps) {
  return (
    <article className="product-card">
      <button className="product-image-button" onClick={() => onSelect(product)} aria-label={'Lihat detail ' + product.name}>
        <div className="product-image-wrap">
          <img src={product.image} alt={product.name} loading={index > 1 ? 'lazy' : 'eager'} />
          <span className="product-quick-view">Lihat detail ↗</span>
          {product.tag && <span className="product-label">{product.tag}</span>}
        </div>
      </button>
      <div className="product-info">
        <div className="product-brand">{product.brand}</div>
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-bottom">
          <span className="product-price">{product.price}</span>
          <button className="text-link" onClick={() => onSelect(product)}>Detail <span>↗</span></button>
        </div>
      </div>
    </article>
  )
}
