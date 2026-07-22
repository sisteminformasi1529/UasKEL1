<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Eksplor Nusa Penida - Informasi Objek Wisata</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Header & Navigasi Mobile-friendly -->
  <header class="main-header">
    <div class="logo">
      <h1>Kelompok1<span>Travel</span></h1>
    </div>
    <button class="nav-toggle" id="navToggle" aria-label="Buka Menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <nav class="nav-menu" id="navMenu">
      <ul>
        <li><a href="#beranda">Beranda</a></li>
        <li><a href="#destinasi">Destinasi</a></li>
        <li><a href="#paket">Paket & Harga</a></li>
        <li><a href="#kontak">Kontak</a></li>
        <li><button id="themeToggle" class="theme-btn">🌙 Dark Mode</button></li>
      </ul>
    </nav>
  </header>

  <!-- Konten Utama -->
  <main>
    <!-- Hero Section -->
    <section id="beranda" class="hero">
      <div class="hero-content">
        <h2>Jelajahi Keindahan Surga Tersembunyi di Nusa Penida</h2>
        <p>Temukan tebing spektakuler, pantai pasir putih, dan keajaiban bawah laut yang tak terlupakan.</p>
        <a href="#destinasi" class="btn-primary">Lihat Destinasi</a>
      </div>
    </section>

    <!-- Section Destinasi Wisata -->
    <section id="destinasi" class="destinasi-section">
      <div class="section-title">
        <h2>Destinasi Populer</h2>
        <p>Pilihan tempat wisata paling favorit yang wajib Anda kunjungi.</p>
      </div>

      <div class="card-grid">
        <article class="card">
          <img src="https://images.unsplash.com/photo-1537996194471-e657df975ab4" alt="Kelingking Beach" class="responsive-img">
          <div class="card-body">
            <h3>Kelingking Beach</h3>
            <p>Ikon Nusa Penida dengan tebing berbentuk T-Rex dan pemandangan laut biru jernih.</p>
            <button class="btn-toggle-text">Baca Selengkapnya</button>
            <p class="more-info hidden">Akses menuju pantai memerlukan stamina ekstra melalui tangga tebing. Disarankan datang pada pagi hari untuk menghindari terik matahari.</p>
          </div>
        </article>

        <article class="card">
          <img src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62" alt="Angel's Billabong" class="responsive-img">
          <div class="card-body">
            <h3>Angel's Billabong</h3>
            <p>Kolam renang alami di tepi laut dengan air jernih bak kristal.</p>
            <button class="btn-toggle-text">Baca Selengkapnya</button>
            <p class="more-info hidden">Waktu terbaik berkunjung adalah saat air laut surut. Selalu utamakan keselamatan dan perhatikan peringatan ombak besar.</p>
          </div>
        </article>

        <article class="card">
          <img src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2" alt="Diamond Beach" class="responsive-img">
          <div class="card-body">
            <h3>Diamond Beach</h3>
            <p>Pantai indah dengan tebing batu karang runcing menyerupai berlian.</p>
            <button class="btn-toggle-text">Baca Selengkapnya</button>
            <p class="more-info hidden">Dilengkapi dengan tangga batu yang diukir langsung di dinding tebing, menawarkan akses aman serta spot foto spektakuler.</p>
          </div>
        </article>
      </div>
    </section>

    <!-- Section Tabel Paket & Informasi -->
    <section id="paket" class="paket-section">
      <div class="section-title">
        <h2>Paket Tur & Biaya Retribusi</h2>
        <p>Informasi estimasi biaya perjalanan wisata ke Nusa Penida.</p>
      </div>

      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Jenis Paket / Tiket</th>
              <th>Durasi</th>
              <th>Fasilitas</th>
              <th>Harga (IDR)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tiket Retribusi Masuk</td>
              <td>1 Hari</td>
              <td>Akses seluruh area publik</td>
              <td>Rp 25.000 / orang</td>
            </tr>
            <tr>
              <td>West Penida Tour</td>
              <td>1 Hari (08:00 - 16:00)</td>
              <td>Mobil, Driver, Bensin, Tiket Masuk</td>
              <td>Rp 500.000 / mobil</td>
            </tr>
            <tr>
              <td>East Penida Tour</td>
              <td>1 Hari (08:00 - 16:00)</td>
              <td>Mobil, Driver, Bensin, Tiket Masuk</td>
              <td>Rp 550.000 / mobil</td>
            </tr>
            <tr>
              <td>Snorkeling Package</td>
              <td>Half Day (3 Jam)</td>
              <td>Peralatan Snorkeling, Kapal, Guide</td>
              <td>Rp 200.000 / orang</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Section Form Kontak / Pesan Tiket -->
    <section id="kontak" class="kontak-section">
      <div class="kontak-container">
        <div class="form-wrapper">
          <h2>Hubungi Kami / Booking</h2>
          <p>Isi formulir di bawah ini untuk konsultasi atau reservasi perjalanan.</p>

          <form id="contactForm" novalidate>
            <div class="form-group">
              <label for="nama">Nama Lengkap *</label>
              <input type="text" id="nama" name="nama" required minlength="3" maxlength="50" placeholder="Masukkan nama Anda">
            </div>

            <div class="form-group">
              <label for="email">Alamat Email *</label>
              <input type="email" id="email" name="email" required placeholder="contoh@email.com">
            </div>

            <div class="form-group">
              <label for="pesan">Pesan / Catatan Khusus *</label>
              <textarea id="pesan" name="pesan" rows="4" required minlength="10" maxlength="200" placeholder="Tuliskan pesan Anda di sini..."></textarea>
              <small class="char-count"><span id="charCount">0</span>/200 karakter</small>
            </div>

            <button type="submit" class="btn-primary">Kirim Pesan</button>
          </form>

          <!-- Pesan konfirmasi submission -->
          <div id="confirmationMessage" class="confirmation-msg hidden">
            ✔ Terima kasih! Pesan Anda telah berhasil terkirim. Kami akan segera menghubungi Anda.
          </div>
        </div>

        <!-- Element Aside -->
        <aside class="aside-info">
          <h3>Informasi Penting</h3>
          <ul>
            <li><strong>Mata Uang:</strong> Rupiah (IDR). Disarankan membawa uang tunai secukupnya.</li>
            <li><strong>Transportasi:</strong> Penyewaan motor atau mobil lokal adalah opsi terbaik.</li>
            <li><strong>Musim Terbaik:</strong> Mei hingga Oktober (Musim Kemarau).</li>
          </ul>
        </aside>
      </div>
    </section>
  </main>

  <!-- Tombol Back to Top -->
  <button id="backToTop" class="back-to-top" aria-label="Kembali ke atas">↑</button>

  <!-- Footer -->
  <footer class="main-footer">
    <p>&copy; 2026 Eksplor Nusa Penida. Hak Cipta Dilindungi Undang-Undang.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
