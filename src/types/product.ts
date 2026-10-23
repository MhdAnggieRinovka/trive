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
  volume?: string
  concentration?: string
  gender?: string
  scentFamily?: string
  topNotes?: string[]
  heartNotes?: string[]
  baseNotes?: string[]
  occasion?: string
  priceNote?: string
  priceSourceUrl?: string
  detailsSourceUrl?: string
  dimensions?: string
  material?: string
  bagStyle?: string
  closure?: string
  strap?: string
  color?: string
}
