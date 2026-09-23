const websiteData = {
    // 1. DATA TOKO & KONTAK
    brand: {
        namaUtama: "AREMA",
        namaSub: "KASUR",
        tagline: "Toko Favorit Warga Malang Raya",
        nomorWA: "6288989684438" // Format: 628xxx (tanpa tanda + atau 0 di depan)
    },

    // 2. BANNER PROMOSI UTAMA (HERO SECTION)
    banner: {
        badge: "Kualitas dan Pelayanan No.1",
        judulBesar: "Toko Kasur Favorit, Warga Malang Raya.",
        deskripsi: "Rasakan kemewahan sandaran dan divan laci untuk kamar tidur keluarga anda",
        foto: "https://down-id.img.susercontent.com/file/id-11134207-81ztl-mrqwwc6v44qv31.webp",
        badgeDiskon: "Promo 40%",
        namaProdukPromo: "SET DIVAN LACI"
    },

    // 3. KATALOG PRODUK (Ubah, Tambah, atau Hapus Produk di Sini)
    katalog: [
        {
            id: 1,
            kategori: "springbed",
            labelKategori: "Spring Bed Premium",
            nama: "Arema Royal Pillow Top",
            deskripsiSingkat: "Lapisan Pillowtop ekstra empuk dengan Pocket Spring independen tanpa bising.",
            deskripsiLengkap: "Kasur Springbed tingkat kenyamanan Plush Medium. Dilengkapi teknologi Pocket Spring dan busa latex alami.",
            harga: "Rp 2.850.000",
            hargaCoret: "Rp 4.380.000",
            badge: "Diskon 35%",
            badgeWarna: "bg-red-500 text-white",
            foto: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=600"
        },
        {
            id: 2,
            kategori: "orthopedic",
            labelKategori: "Orthopedic Foam",
            nama: "Arema Ortho Health Spine",
            deskripsiSingkat: "Dirancang khusus menopang tulang belakang & meredakan nyeri punggung.",
            deskripsiLengkap: "Busa High Density Rebonded khusus medis tulang belakang. Didesain tidak gampang amblas dan menjaga postur tidur.",
            harga: "Rp 3.200.000",
            hargaCoret: "Rp 4.800.000",
            badge: "Rekomendasi Dokter",
            badgeWarna: "bg-gold-500 text-slate-950",
            foto: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=600"
        },
        {
            id: 3,
            kategori: "matras",
            labelKategori: "Matras Lipat Portable",
            nama: "Arema Travel Fold Mat",
            deskripsiSingkat: "Kasur busa lipat 3 yang praktis disimpan, empuk, dan mudah dibawa bepergian.",
            deskripsiLengkap: "Matras Busa Lipat 3 tebal 10cm. Dilengkapi tas penyimpanan, bahan kain katun adem dan penutup resleting bisa dicuci.",
            harga: "Rp 650.000",
            hargaCoret: "Rp 950.000",
            badge: "Praktis",
            badgeWarna: "bg-blue-600 text-white",
            foto: "https://images.unsplash.com/photo-1582582621959-48d273528920?auto=format&fit=crop&q=80&w=600"
        },
        {
            id: 4,
            kategori: "aksesoris",
            labelKategori: "Aksesoris Tidur",
            nama: "Bantal Memory Foam Ergonomis",
            deskripsiSingkat: "Bantal kesehatan leher berbahan memory foam mengikat lekuk kepala secara sempurna.",
            deskripsiLengkap: "Bantal berkontur anti sakit leher saat bangun tidur. Busa responsif terhadap suhu tubuh.",
            harga: "Rp 220.000",
            hargaCoret: "Rp 350.000",
            badge: "",
            badgeWarna: "",
            foto: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&q=80&w=600"
        }
    ]
};
