// Data Pelanggan Tetap
const pelangganData = [
  {
    nama: "Ripqi Alamsyah",
    email: "iqiw@example.com",
    telepon: "0808347289",
  },
  { nama: "Fadhilah Az Zahra", email: "zahra2@example.com", telepon: "08129876543" },
  { nama: "Jara", email: "jar002@example.com", telepon: "08122334455" },
  { nama: "Zara", email: "zar89@example.com", telepon: "08134567890" },
  { nama: "Zahra", email: "zahra07@example.com", telepon: "08198765432" },
];

// Memuat Data Pelanggan ke Tabel
window.onload = () => {
  const tableBody = document.getElementById("customerTableBody");

  pelangganData.forEach((pelanggan, index) => {
    const row = `
        <tr>
          <td>${index + 1}</td>
          <td>${pelanggan.nama}</td>
          <td>${pelanggan.email}</td>
          <td>${pelanggan.telepon}</td>
        </tr>`;
    tableBody.innerHTML += row;
  });
};
