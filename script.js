/* Garuda Net - situs statis, tanpa backend atau penyimpanan data. */
const CONFIG = {
  whatsappNumber: '6281286104276',
  registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSf3lKvsMKcCxCvy-Ra9_6JEIUovfCQaEFyTPjUNqmcjOL-7dA/viewform?usp=dialog'
};
const menuButton = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
menuButton.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi');
});
siteNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  siteNav.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = String(new Date().getFullYear());
const packageSelect = document.getElementById('customerPackage');
document.querySelectorAll('[data-interest]').forEach(link => link.addEventListener('click', () => {
  packageSelect.value = link.dataset.interest;
}));
document.getElementById('contactForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const name = document.getElementById('customerName').value.trim();
  const area = document.getElementById('customerArea').value.trim();
  const interest = packageSelect.value;
  const note = document.getElementById('customerMessage').value.trim();
  const message = `Halo tim Garuda Net, saya ingin konsultasi layanan internet.\n\nNama: ${name}\nArea pemasangan: ${area}\nLayanan: ${interest}${note ? `\nKebutuhan tambahan: ${note}` : ''}\n\nMohon informasi ketersediaan dan penawaran terbaru. Terima kasih.`;
  const feedback = document.getElementById('formFeedback');
  if (!/^62\d{8,13}$/.test(CONFIG.whatsappNumber)) {
    feedback.textContent = 'Nomor WhatsApp resmi belum dikonfigurasi. Pesan telah disiapkan. Silakan salin melalui tombol berikut.';
    const old = document.getElementById('copyWhatsApp');
    if (old) old.remove();
    const copy = document.createElement('button');
    copy.type = 'button'; copy.id = 'copyWhatsApp'; copy.className = 'btn btn-outline';
    copy.textContent = 'Salin Pesan';
    copy.addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(message); feedback.textContent = 'Pesan berhasil disalin.'; }
      catch { feedback.textContent = 'Gagal menyalin otomatis. Buka website melalui HTTPS atau localhost.'; }
    });
    feedback.after(copy);
    return;
  }
  document.getElementById('copyWhatsApp')?.remove();
  feedback.textContent = 'Membuka WhatsApp dengan pesan yang telah disiapkan...';
  window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});


// EDIT PAKET DI SINI: salin kecepatan dan harga persis dari brosur resmi Garuda Net.
// Kosongkan speedMbps / priceIdr jika belum terverifikasi. Jangan isi angka perkiraan.
const HOME_PACKAGES = [
  { name: 'Garuda Home 1', speedMbps: null, priceIdr: null, description: 'Paket internet rumah untuk kebutuhan sehari-hari.' },
  { name: 'Garuda Home 2', speedMbps: null, priceIdr: null, description: 'Paket rumah untuk streaming, belajar, dan bekerja.', featured: true },
  { name: 'Garuda Home 3', speedMbps: null, priceIdr: null, description: 'Paket rumah untuk banyak perangkat dan aktivitas keluarga.' }
];
const rupiah = amount => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(amount);
const packageContainer = document.getElementById('homePackages');
HOME_PACKAGES.forEach((item, i) => {
  const card = document.createElement('article');
  card.className = `package-card home-package-card${item.featured ? ' highlight' : ''}`;
  const label = document.createElement('span'); label.className = 'package-label'; label.textContent = item.featured ? 'PILIHAN POPULER' : `PAKET RUMAH ${String(i+1).padStart(2,'0')}`;
  const title = document.createElement('h3'); title.textContent = item.name;
  const speed = document.createElement('div'); speed.className = 'speed-big';
  speed.textContent = Number.isFinite(item.speedMbps) && item.speedMbps > 0 ? `${item.speedMbps} Mbps` : 'Kecepatan menyusul';
  if (!(Number.isFinite(item.speedMbps) && item.speedMbps > 0)) speed.style.fontSize='24px';
  const price = document.createElement('div'); price.className = 'price-big'; price.textContent = Number.isFinite(item.priceIdr) && item.priceIdr > 0 ? rupiah(item.priceIdr) + '/bulan' : 'Harga konfirmasi';
  const description = document.createElement('p'); description.className = 'package-detail'; description.textContent = item.description;
  const cta = document.createElement('a'); cta.className = 'btn btn-dark package-cta'; cta.href = CONFIG.registrationUrl; cta.target = '_blank'; cta.rel = 'noopener noreferrer'; cta.dataset.interest = item.name; cta.textContent = 'Daftar Paket ↗';
  card.append(label,title,speed,price,description,cta); packageContainer.append(card);
  const option=document.createElement('option'); option.value=item.name; option.textContent=item.name; packageSelect.add(option, packageSelect.options.length-1);
  cta.addEventListener('click',()=>{ packageSelect.value=item.name; });
});
