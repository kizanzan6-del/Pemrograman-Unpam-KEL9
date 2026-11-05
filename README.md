# Garuda Net - Company Profile Website

Website company profile responsif untuk Garuda Net, dibuat dengan **HTML, CSS, dan JavaScript murni**, tanpa framework dan tanpa database.

## Struktur

- `index.html` - halaman utama, navigasi, layanan, paket, FAQ, formulir kontak.
- `styles.css` - tampilan dan responsivitas.
- `script.js` - navigasi mobile, pemilihan paket, formulir WhatsApp.
- `assets/favicon.svg` - ikon situs.
- `manual-book.pdf` - panduan penggunaan dan deployment.

## Menjalankan di komputer

Buka `index.html` di browser, atau jalankan `python3 -m http.server 8000`, kemudian akses `http://localhost:8000`.

## Konfigurasi sebelum publikasi

1. Nomor WhatsApp resmi sudah dikonfigurasi: **081286104276**, format kode `6281286104276`. Konsultasi dan pertanyaan diarahkan ke WhatsApp.
2. Pendaftaran dan permintaan pemasangan diarahkan ke Google Form resmi: https://docs.google.com/forms/d/e/1FAIpQLSf3lKvsMKcCxCvy-Ra9_6JEIUovfCQaEFyTPjUNqmcjOL-7dA/viewform?usp=dialog . Periksa dan sesuaikan klaim perusahaan, informasi layanan, cakupan, dan kemitraan ASNET.
3. Isi detail paket/harga **hanya jika sudah ditetapkan**. Template saat ini tidak mengklaim harga atau bandwidth tertentu.
4. Perbarui identitas visual jika mempunyai logo Garuda Net resmi.

## Upload melalui GitHub Website

1. Daftar/login di https://github.com/ .
2. Klik **New repository**, isi nama `garuda-net-company-profile`, pilih **Public**, lalu klik **Create repository**.
3. Pilih **uploading an existing file**, unggah seluruh file/folder situs (jangan hanya ZIP), lalu klik **Commit changes**.
4. Buka **Settings > Pages**, pada **Build and deployment** pilih **Deploy from a branch**, branch `main`, folder `/(root)`, lalu **Save**.
5. Setelah deployment berhasil, situs biasanya dapat diakses pada `https://USERNAME.github.io/garuda-net-company-profile/`.

> Website ini statis dan cocok untuk GitHub Pages gratis. GitHub Pages pada repository publik dapat digunakan pada paket GitHub Free, tunduk kebijakan layanan GitHub.

## Alternatif upload menggunakan Git

```bash
git init
git add .
git commit -m "Initial Garuda Net company profile"
git branch -M main
git remote add origin https://github.com/USERNAME/garuda-net-company-profile.git
git push -u origin main
```

Ganti `USERNAME` dengan username GitHub Anda. GitHub meminta autentikasi sesuai mekanisme akun; password biasa bukan metode autentikasi Git HTTPS.

## Catatan

Formulir tidak mengirim data ke server dan tidak menyimpan identitas pengunjung. Ketika WhatsApp sudah diatur, pesan akan dibuka di WhatsApp pengguna dan baru terkirim jika pengguna memilih mengirimnya.


## Revisi identitas dan harga (November 2026)
- Logo resmi dari pemilik: `assets/logo-garuda-net.png` (navbar/footer), `assets/garuda-symbol.png` (hero).
- Kartu harga internet rumahan ada di `script.js` pada array `HOME_PACKAGES`.
- **Harga dan Mbps masih kosong karena gambar brosur sebelumnya tidak tersedia untuk diverifikasi pada sesi revisi ini.** Masukkan data brosur yang sudah disetujui ke `speedMbps` dan `priceIdr`, misalnya `speedMbps: 20, priceIdr: 150000` HANYA bila sesuai brosur.
- Promo bayar 6 bulan menikmati 8 bulan masih diberi catatan verifikasi syarat.
- Setelah revisi, uji semua harga dan promosi sebelum publikasi.

## Alur CTA / Hubungi Garuda Net

- **Tanya / konsultasi:** WhatsApp https://wa.me/6281286104276 (081286104276). Formulir konsultasi website menyusun pesan dan membuka WhatsApp.
- **Daftar / pasang:** https://docs.google.com/forms/d/e/1FAIpQLSf3lKvsMKcCxCvy-Ra9_6JEIUovfCQaEFyTPjUNqmcjOL-7dA/viewform?usp=dialog . Tombol di navbar, hero, bagian kontak, dan setiap kartu paket membuka Google Form.
- Pastikan formulir Google bisa diakses calon pelanggan (pengaturan akses responden) sebelum website dipublikasikan.
