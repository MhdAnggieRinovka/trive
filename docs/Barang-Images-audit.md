# Audit awal — Barang Images.zip

Arsip berisi 179 file JPG. Nama file berasal dari WhatsApp dan tidak menyertakan nama produk yang konsisten, sehingga identifikasi produk perlu dilakukan dari gambar.

## Kandidat foto yang sama / sangat mirip

Pemeriksaan perceptual-hash awal menemukan kelompok kandidat berikut. Ini adalah petunjuk untuk review visual, bukan klaim bahwa semua gambar dalam satu kelompok pasti identik:

- IMG-20261017-WA0172.jpg, IMG-20261017-WA0002.jpg
- IMG-20261017-WA0171.jpg, IMG-20261017-WA0126.jpg
- IMG-20261017-WA0169.jpg, IMG-20261017-WA0156.jpg
- IMG-20261017-WA0163.jpg, IMG-20261017-WA0160.jpg, IMG-20261017-WA0110.jpg
- IMG-20261017-WA0149.jpg, IMG-20261017-WA0135.jpg
- IMG-20261017-WA0108.jpg, IMG-20261017-WA0063.jpg
- IMG-20261017-WA0080.jpg, IMG-20261017-WA0031.jpg
- IMG-20261017-WA0060.jpg, IMG-20261017-WA0070.jpg
- IMG-20261017-WA0067.jpg, IMG-20261017-WA0020.jpg
- IMG-20261017-WA0023.jpg, IMG-20261017-WA0051.jpg
- IMG-20261017-WA0022.jpg, IMG-20261017-WA0019.jpg
- IMG-20261017-WA0056.jpg, IMG-20261017-WA0050.jpg
- IMG-20261017-WA0078.jpg, IMG-20261017-WA0045.jpg
- IMG-20261017-WA0046.jpg, IMG-20261017-WA0059.jpg

## Aturan katalog

1. Jangan buat entri produk baru hanya karena ada foto baru.
2. Foto dengan produk yang sama digabung ke satu produk; pilih satu foto utama dan simpan foto lain sebagai galeri bila memang sudut/foto berbeda dan berguna.
3. Produk yang berbeda tetap menjadi entri berbeda meskipun mereknya sama.
4. Gambar informasi aroma/notes, foto kemasan pengiriman, atau foto barang yang belum bisa dikenali jangan otomatis diperlakukan sebagai produk katalog.
5. Nama produk, varian, ukuran, harga, dan klaim keaslian tidak boleh ditebak. Tandai untuk verifikasi jika tidak terbaca jelas.

## Catatan integrasi

Kode katalog sekarang sudah dipisah dari UI ke `src/data/products.ts`, dengan tipe produk di `src/types/product.ts` dan komponen kartu/modal di `src/components/`. Data yang ada di kode masih diberi label CONTOH dan bukan katalog final.

File JPG asli belum ditambahkan ke repositori melalui perubahan kode ini. Setelah aset disalin ke `public/products/`, data katalog dapat menggunakan path lokal, misalnya `/products/IMG-20261017-WA0172.jpg`.