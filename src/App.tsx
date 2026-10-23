import { useEffect, useState, type ReactNode } from 'react'
import './App.css'
import { products } from './data/products'
import type { Layout, ProductCategory } from './types/product'
import { SiteHeader } from './components/SiteHeader'
import { SiteFooter } from './components/SiteFooter'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { CollectionPage } from './pages/CollectionPage'
import { ProductDetailPage } from './pages/ProductDetailPage'
import { NotFoundPage } from './pages/NotFoundPage'

const categoryRoutes: Record<string, ProductCategory> = {
  '/parfum': 'Parfum',
  '/tas': 'Tas',
  '/vape': 'Vape',
}

function App() {
  const [pathname, setPathname] = useState(() => normalizePath(window.location.pathname))
  const [dark, setDark] = useState(false)
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('featured')
  const [layout, setLayout] = useState<Layout>('grid')

  useEffect(() => {
    const handlePopState = () => {
      setPathname(normalizePath(window.location.pathname))
      window.scrollTo({ top: 0, behavior: 'auto' })
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = (destination: string) => {
    const nextPath = normalizePath(destination)
    if (nextPath !== pathname) {
      window.history.pushState({}, '', nextPath)
      setPathname(nextPath)
    }
    setSearch('')
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  const productRoute = pathname.match(/^\/(parfum|tas|vape)\/([^/]+)$/)
  const selectedProduct = productRoute
    ? products.find((product) => product.id === productRoute[2] && product.category.toLowerCase() === productRoute[1])
    : undefined

  let page: ReactNode

  if (pathname === '/') {
    page = <HomePage featuredProducts={products.slice(0, 4)} totalProducts={products.length} onNavigate={navigate} />
  } else if (pathname === '/about') {
    page = <AboutPage onNavigate={navigate} />
  } else if (pathname === '/products' || categoryRoutes[pathname]) {
    const currentCategory = categoryRoutes[pathname]
    const isAllProducts = pathname === '/products'
    page = (
      <CollectionPage
        title={isAllProducts ? 'Semua' : currentCategory === 'Parfum' ? 'Aroma' : currentCategory === 'Tas' ? 'Teman gaya' : 'Pilihan'}
        titleEmphasis={isAllProducts ? 'pilihan' : currentCategory === 'Parfum' ? 'berkarakter.' : currentCategory === 'Tas' ? 'harian.' : 'vape.'}
        intro={isAllProducts
          ? 'Jelajahi semua pilihan lifestyle yang sedang dikurasi oleh TRIVE.'
          : currentCategory === 'Parfum'
            ? 'Kenali karakter aroma dari yang segar dan ringan hingga hangat dan berlapis.'
            : currentCategory === 'Tas'
              ? 'Temukan tas yang melengkapi gaya dan aktivitas sehari-hari.'
              : 'Koleksi kategori ini akan ditampilkan saat produk tersedia.'}
        category={currentCategory}
        products={products}
        search={search}
        sort={sort}
        layout={layout}
        onSortChange={setSort}
        onLayoutChange={setLayout}
        onNavigate={navigate}
      />
    )
  } else if (selectedProduct) {
    page = <ProductDetailPage product={selectedProduct} onNavigate={navigate} />
  } else {
    page = <NotFoundPage onNavigate={navigate} />
  }

  return (
    <div className={'site-shell ' + (dark ? 'theme-dark' : 'theme-light')}>
      <SiteHeader
        currentPath={pathname}
        dark={dark}
        search={search}
        onNavigate={navigate}
        onToggleTheme={() => setDark((value) => !value)}
        onSearchChange={setSearch}
      />
      <main key={pathname}>{page}</main>
      <SiteFooter onNavigate={navigate} />
    </div>
  )
}

function normalizePath(path: string) {
  if (!path || path === '/') return '/'
  return path.replace(/\/+$/, '') || '/'
}

export default App
