import type { Category, Product } from '../types/product'

/**
 * Katalog sementara untuk menjaga UI tetap bisa dijalankan.
 * Nama, harga, dan gambar perlu diganti dengan hasil verifikasi Barang Images.zip.
 * Jangan menganggap data contoh ini sebagai informasi produk final.
 */
export const products: Product[] = [
  { id: 'sample-libre', name: 'Libre Eau de Parfum', brand: 'Yves Saint Laurent', category: 'Parfum', description: 'Karakter floral hangat dengan sentuhan aromatik.', price: 'Harga dikonfirmasi', image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=85', tag: 'CONTOH' },
  { id: 'sample-bag-01', name: 'Structured Everyday Bag', brand: 'Belum diverifikasi', category: 'Tas', description: 'Detail produk akan dilengkapi setelah identifikasi foto.', price: 'Harga dikonfirmasi', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85', tag: 'CONTOH' },
  { id: 'sample-sandalwood', name: 'Sandalwood No. 04', brand: 'Belum diverifikasi', category: 'Parfum', description: 'Detail aroma dan ukuran perlu dikonfirmasi.', price: 'Harga dikonfirmasi', image: 'https://images.unsplash.com/photo-1615634260167-c8cdedd6b6c5?auto=format&fit=crop&w=900&q=85', tag: 'CONTOH' },
  { id: 'sample-bag-02', name: 'Mini Shoulder Bag', brand: 'Belum diverifikasi', category: 'Tas', description: 'Detail produk akan dilengkapi setelah identifikasi foto.', price: 'Harga dikonfirmasi', image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85', tag: 'CONTOH' },
]

export const categories: Category[] = ['Semua', 'Parfum', 'Tas', 'Vape']
export const categoryDescriptions = [
  'Seluruh koleksi',
  'Temukan aroma khasmu',
  'Teman gaya harian',
  'Koleksi kategori',
]
