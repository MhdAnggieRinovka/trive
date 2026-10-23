interface NotFoundPageProps {
  onNavigate: (path: string) => void
}

export function NotFoundPage({ onNavigate }: NotFoundPageProps) {
  return (
    <section className="not-found-page">
      <p className="eyebrow">404 · HALAMAN TIDAK DITEMUKAN</p>
      <h1>Sepertinya kamu<br /><em>tersesat sedikit.</em></h1>
      <p>Halaman yang dicari tidak tersedia atau alamatnya sudah berubah.</p>
      <button className="button button-dark" onClick={() => onNavigate('/')}>Kembali ke beranda <span>↗</span></button>
    </section>
  )
}
