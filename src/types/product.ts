export type Category = 'Semua' | 'Parfum' | 'Tas' | 'Vape'
export type ProductCategory = Exclude<Category, 'Semua'>
export type Layout = 'grid' | 'carousel' | 'list'

export interface Product {
  id: string
  name: string
  brand: string
  category: ProductCategory
  description: string
  price: string
  priceValue?: number
  image: string
  tag?: string
  gallery?: string[]
}
