interface AboutPageProps {
  onNavigate: (path: string) => void
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="about-page">
      <section className="about-hero">
        <p className="eyebrow"><span className="eyebrow-line" /> TENTANG JADE DISTRICT</p>
        <h1>Lebih sedikit distraksi.<br /><em>Lebih banyak makna.</em></h1>
        <p>JADE DISTRICT adalah katalog pilihan lifestyle untuk orang yang menghargai karakter, detail, dan pilihan yang terasa personal.</p>
      </section>

      <section className="about-story">
        <div className="about-mark" lang="zh-Hans">玉<span>境</span></div>
        <div className="about-story-copy">
          <p className="eyebrow">CERITA KAMI</p>
          <h2>Your style.<br /><em>Your signature.</em></h2>
        </div>
        <div className="about-story-body">
          <p>JADE DISTRICT mempertemukan pilihan yang melengkapi gaya personal: aroma yang mudah diingat, tas yang selalu ingin dibawa, dan detail yang berbicara tanpa berlebihan.</p>
          <p>Kami percaya pengalaman menemukan produk seharusnya terasa sederhana dan menyenangkan. Karena itu, koleksi disajikan dengan fokus pada karakter produk dan informasi yang dapat ditinjau sebelum kamu menentukan pilihan.</p>
        </div>
      </section>

      <section className="about-principles">
        <div>
          <span className="about-principle-number">01</span>
          <h3>Kurasi yang cermat</h3>
          <p>Koleksi disusun agar kamu lebih mudah mengeksplorasi produk berdasarkan kategori dan karakter.</p>
        </div>
        <div>
          <span className="about-principle-number">02</span>
          <h3>Informasi yang jelas</h3>
          <p>Detail dan referensi disajikan untuk membantu proses pertimbangan, bukan menggantikan verifikasi barang aktual.</p>
        </div>
        <div>
          <span className="about-principle-number">03</span>
          <h3>Gaya yang personal</h3>
          <p>Setiap orang punya selera sendiri. JADE DISTRICT hadir sebagai tempat menemukan pilihan yang terasa cocok untukmu.</p>
        </div>
      </section>

      <section className="about-cta">
        <div>
          <p className="eyebrow">TEMUKAN PILIHANMU</p>
          <h2>Mulai dari apa yang<br /><em>kamu sukai.</em></h2>
        </div>
        <button className="button button-dark" onClick={() => onNavigate('/products')}>Jelajahi koleksi <span>↗</span></button>
      </section>
    </div>
  )
}
