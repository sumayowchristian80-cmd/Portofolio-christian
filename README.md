# Portfolio Christian Jeremia Sumajow

Website portfolio pribadi yang statis, responsif, dan siap digunakan untuk seleksi magang. Desainnya menggunakan nuansa navy-biru yang profesional serta dapat langsung di-host di GitHub Pages tanpa server atau database.

## Teknologi

- HTML5
- CSS3
- JavaScript vanilla
- Bootstrap 5 dan Bootstrap Icons melalui CDN

## Struktur folder

```text
portfolio-christian/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── profile.jpg              # Foto profil Anda
    ├── cv.pdf                   # Tambahkan CV Anda di sini
    ├── project-1.jpg            # Opsional: gambar proyek 1
    ├── project-2.jpg            # Opsional: gambar proyek 2
    ├── project-3.jpg            # Opsional: gambar proyek 3
    ├── project-4.jpg            # Opsional: gambar proyek 4
    ├── project-5.jpg            # Opsional: gambar proyek 5
    ├── project-6.jpg            # Opsional: gambar proyek 6
    └── certificates/
        ├── certificate-1.jpg    # Opsional
        ├── certificate-2.jpg    # Opsional
        └── certificate-3.jpg    # Opsional
```

> Gambar proyek, sertifikat, dan CV bersifat opsional. Situs secara otomatis menampilkan placeholder rapi untuk proyek, tidak menampilkan sertifikat palsu, dan tombol CV tetap tersedia sampai file asli dimasukkan.

## Menjalankan secara lokal

1. Unduh atau salin folder proyek ini.
2. Buka `index.html` dengan browser (klik dua kali file tersebut).
3. Tidak perlu instalasi Node.js, database, atau server lokal.

## Mengganti konten

### Foto profil

Ganti file `assets/profile.jpg` dengan foto Anda sendiri. Gunakan nama file dan ekstensi yang sama agar tidak perlu mengubah kode.

### CV

Masukkan CV dalam format PDF sebagai `assets/cv.pdf`. Tombol **Download CV** pada navbar otomatis mengarah ke file tersebut.

### Gambar proyek

Masukkan gambar proyek dengan nama `project-1.jpg` sampai `project-6.jpg` ke dalam folder `assets`. Judul, deskripsi, teknologi, serta tautan tombol setiap proyek dapat diubah di bagian `#projects` pada `index.html`.

### Sertifikat

Masukkan gambar sertifikat sebagai `assets/certificates/certificate-1.jpg` sampai `certificate-3.jpg`. Galeri dan modal perbesar akan aktif otomatis untuk file yang tersedia.

### Kontak

Cari `EMAIL-ANDA@gmail.com`, `08xxxxxxxxxx`, dan `USERNAME` pada `index.html`, lalu ganti dengan data kontak Anda. Setelah itu ubah nilai `href` pada tautan terkait agar mengarah ke WhatsApp dan akun sosial Anda yang sebenarnya.

## Upload ke GitHub

1. Buat repository baru di GitHub, misalnya `portfolio-christian`.
2. Upload semua isi folder proyek ini ke repository tersebut, termasuk folder `assets`.
3. Pastikan `index.html` berada di folder paling atas (root) repository.
4. Commit dan push seluruh perubahan ke branch `main`.

## Mengaktifkan GitHub Pages

Di repository GitHub, buka:

```text
Settings → Pages → Build and deployment
Source: Deploy from a branch
Branch: main
Folder: / (root)
Save
```

Tunggu beberapa saat sampai deployment selesai. Portfolio dapat dibagikan melalui:

```text
https://USERNAME.github.io/NAMA-REPOSITORY/
```

Contoh, bila username GitHub adalah `christian` dan repository bernama `portfolio-christian`, alamatnya menjadi `https://christian.github.io/portfolio-christian/`.
