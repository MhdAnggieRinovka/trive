// Isi nomor WhatsApp penjual di sini nanti, gunakan format internasional tanpa tanda + atau spasi.
// Contoh: 6281234567890
export const WHATSAPP_NUMBER = '+6281770883997'

export function getWhatsAppUrl(product?: { name: string; category?: string }) {
  const number = WHATSAPP_NUMBER.replace(/\D/g, '')
  if (!number) return null
  const message = product
    ? `Halo JADE DISTRICT, saya tertarik dengan produk ${product.name}. Apakah produknya masih tersedia?`
    : 'Halo JADE DISTRICT, saya ingin bertanya mengenai produk dan ketersediaannya.'
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}
