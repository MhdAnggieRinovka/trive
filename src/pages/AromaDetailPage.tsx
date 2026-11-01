import type { Product } from '../types/product'

interface AromaDetailPageProps {
  product: Product
  onNavigate: (path: string) => void
}

interface IngredientVisual {
  title: string
  description: string
  image: string
  alt: string
  keywords: string[]
}

const ingredientVisuals: IngredientVisual[] = [
  {
    title: 'Citrus & bright fruits',
    description: 'Nuansa cerah, juicy, dan menyegarkan.',
    image: 'https://blog.delacourte.com/uploads/2019/11/composition-olfactive-la-famille-hesperidee-et-la-fraicheur-des-agrumes.png',
    alt: 'Buah citrus, kulit lemon, daun hijau, dan minyak esensial',
    keywords: ['bergamot', 'lemon', 'lime', 'orange', 'mandarin', 'grapefruit', 'yuzu', 'blackcurrant', 'currant', 'apple', 'pear', 'cherry', 'raspberry', 'plum', 'pineapple', 'peach', 'fruit'],
  },
  {
    title: 'Botanical florals',
    description: 'Kesan lembut, floral, dan berlapis.',
    image: 'https://sdcdn.io/el/el_prod_1956_3000x3000_2.png?height=700px&width=700px',
    alt: 'Bunga mawar putih, melati, dan kelopak bunga',
    keywords: ['rose', 'jasmine', 'lily', 'violet', 'peony', 'tuberose', 'gardenia', 'orchid', 'neroli', 'magnolia', 'floral', 'flower'],
  },
  {
    title: 'Warming spices',
    description: 'Aksen hangat, pedas, dan aromatik.',
    image: 'https://assets.seobotai.com/cdn-cgi/image/quality%3D75%2Cw%3D1536%2Ch%3D1024/scento.com/6943719b12e0ddc125dc2032-1766030034766.jpg',
    alt: 'Kayu manis, kapulaga, cengkih, dan rempah-rempah',
    keywords: ['pepper', 'ginger', 'cinnamon', 'cardamom', 'nutmeg', 'saffron', 'clove', 'oregano', 'pimento', 'coriander', 'spicy', 'spice'],
  },
  {
    title: 'Sweet & gourmand',
    description: 'Sentuhan creamy, manis, dan hangat.',
    image: 'https://filosofia.co.id/cdn/shop/collections/amber-gourmand-olfactory-family-elements-must-be-real.png?v=1770807232',
    alt: 'Vanilla pod, cokelat, rempah, dan resin amber',
    keywords: ['vanilla', 'cacao', 'cocoa', 'chocolate', 'caramel', 'marshmallow', 'tonka', 'sugar', 'coffee', 'praline', 'gourmand', 'sweet'],
  },
  {
    title: 'Woods & resin',
    description: 'Karakter earthy, smoky, dan mendalam.',
    image: 'https://cdn.shopify.com/s/files/1/0731/6825/7255/files/sandalwood-perfume-guide-hero.webp?v=1775558361',
    alt: 'Serpihan kayu sandalwood dan resin amber',
    keywords: ['sandalwood', 'cedarwood', 'cedar', 'patchouli', 'vetiver', 'oakmoss', 'oak', 'guaiac', 'oud', 'leather', 'wood', 'woody'],
  },
  {
    title: 'Resins & incense',
    description: 'Nuansa resinous, balsamic, dan smoky.',
    image: 'https://parfumcentral.com/cdn/shop/articles/oud-hero-1200.png?v=1776463736',
    alt: 'Kayu oud dan resin dupa dengan asap aromatik',
    keywords: ['incense', 'frankincense', 'myrrh', 'amber', 'opoponax', 'cistus', 'resin', 'smoky'],
  },
  {
    title: 'Fresh botanicals',
    description: 'Aroma hijau, herbal, dan terasa bersih.',
    image: 'https://divainparfums.com/cdn/shop/files/notas-divain-743_b9cb8f1b-a93e-4126-b79d-67ec606d0922.jpg?v=1750774474&width=1024',
    alt: 'Daun mint, lavender, dan lemon sebagai bahan aromatik',
    keywords: ['mint', 'lavender', 'sage', 'rosemary', 'basil', 'artemisia', 'davana', 'herbal', 'green', 'leaf'],
  },
]

function getIngredientVisual(values: string[]): IngredientVisual {
  const normalizedValues = values.map((value) => value.toLowerCase())
  let bestMatch = ingredientVisuals[0]
  let bestScore = 0

  for (const visual of ingredientVisuals) {
    const score = visual.keywords.reduce(
      (total, keyword) => total + (normalizedValues.some((value) => value.includes(keyword)) ? 1 : 0),
      0,
    )

    if (score > bestScore) {
      bestMatch = visual
      bestScore = score
    }
  }

  return bestMatch
}

export function AromaDetailPage({ product, onNavigate }: AromaDetailPageProps) {
  const notes = product.aromaNoteList?.length
    ? [{ label: 'Published notes · no official pyramid', values: product.aromaNoteList }]
    : [
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

      <div className="aroma-page-heading">
        <p className="eyebrow"><span className="eyebrow-line" /> THE SCENT STORY · JADE DISTRICT</p>
        <h1>Kenali karakter <em>aromanya.</em></h1>
        <p>Setiap lapisan punya peran. Jelajahi nuansa yang membentuk karakter parfum ini.</p>
      </div>

      <div className="product-detail-layout aroma-product-overview">
        <div className="product-detail-visual aroma-product-visual">
          <img src={product.image} alt={product.name} />
          <span className="aroma-visual-caption">THE FRAGRANCE · {product.brand.toUpperCase()}</span>
        </div>

        <article className="product-detail-copy aroma-product-copy">
          <p className="eyebrow">AROMA PROFILE</p>
          <p className="product-brand">{product.brand}</p>
          <h2>{product.name}</h2>
          <p className="product-detail-description">{product.description}</p>

          <div className="aroma-family-panel">
            <span>SCENT FAMILY</span>
            <strong>{product.scentFamily ?? 'Karakter aroma belum dirinci'}</strong>
          </div>

          <div className="product-detail-facts aroma-facts">
            {product.concentration && <div><dt>Konsentrasi</dt><dd>{product.concentration}</dd></div>}
            {product.volume && <div><dt>Ukuran tercantum</dt><dd>{product.volume}</dd></div>}
          </div>
        </article>
      </div>

      <section className="aroma-ingredients" aria-label="Komposisi dan inspirasi bahan aroma">
        <div className="aroma-ingredients-heading">
          <div>
            <p className="eyebrow"><span className="eyebrow-line" /> INSIDE THE NOTES</p>
            <h2>Ingredients behind<br /><em>the scent.</em></h2>
          </div>
          <p>Lapisan aroma yang menyusun karakter parfum, dari kesan pertama hingga jejak akhirnya.</p>
        </div>

        {notes.length > 0 ? (
          <div className="aroma-note-cards">
            {notes.map((group, index) => {
              const visual = getIngredientVisual(group.values ?? [])
              return (
                <article className="aroma-note-card" key={group.label}>
                  <div className="aroma-note-image">
                    <img
                      src={visual.image}
                      alt={visual.alt}
                      loading="lazy"
                      onError={(event) => { event.currentTarget.style.display = 'none' }}
                    />
                    <span className="aroma-note-number">{String(index + 1).padStart(2, '0')}</span>
                    <span className="aroma-note-image-title">{visual.title}</span>
                  </div>
                  <div className="aroma-note-content">
                    <span className="aroma-note-stage">{group.label}</span>
                    <p className="aroma-note-list">{group.values?.join(' · ')}</p>
                    <p className="aroma-note-description">{visual.description}</p>
                  </div>
                </article>
              )
            })}
          </div>
        ) : (
          <div className="aroma-empty-notes">Komposisi aroma belum tersedia untuk produk ini.</div>
        )}

        <p className="aroma-disclaimer">
          <span aria-hidden="true">✳</span>
          <span>Foto bahan merupakan ilustrasi visual berdasarkan keluarga notes yang tercantum, bukan daftar bahan baku atau bukti ekstrak yang digunakan dalam formulasi parfum. Informasi aroma dirangkum dari referensi yang tersedia dan dapat berbeda antarvarian atau reformulasi.</span>
        </p>
      </section>

      <div className="aroma-page-footer">
        <button className="button button-dark product-detail-back" onClick={() => onNavigate(`/parfum/${product.id}`)}>
          Kembali ke detail produk <span>↗</span>
        </button>
      </div>
    </section>
  )
}
