// Data Produk
const productData = [
  {
    nama: "Carrier Arei Kinabalu 70L",
    harga: 1395000,
    kategori: "Tas Gunung",
    deskripsi: "Tas Gunung / Carrier Premium Kinabalu 70+5L Liter Arei Outdoorgear",
    gambar: "Carrier Arei.jpeg",
  },
  {
    nama: "Sleeping Bag Arei",
    harga: 379000,
    kategori: "Kantong Tidur",
    deskripsi: "Kantong Tidur / Sleeping Bag Kerinci Premium Arei Outdoorgear",
    gambar: "Sleeping Bag Arei.jpeg",
  },
  {
    nama: "Tumbler Arei",
    harga: 175000,
    kategori: "Botol Minum",
    deskripsi: "Botol Minum Borraccia H Tumbler Arei Outdoorgear",
    gambar:"Tumbler Arei.jpeg",
  },
];

// Memuat Data Produk ke Halaman
window.onload = () => {
  const productList = document.getElementById("product-list");

  productData.forEach((product) => {
    const productCard = `
        <div class="product-card">
          <img src="${product.gambar}" alt="${product.nama}">
          <h3>${product.nama}</h3>
          <p>Kategori: ${product.kategori}</p>
          <p class="price">Rp${product.harga.toLocaleString()}</p>
          <p>${product.deskripsi}</p>
        </div>
      `;
    productList.innerHTML += productCard;
  });
};
