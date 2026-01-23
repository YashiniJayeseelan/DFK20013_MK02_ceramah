document.getElementById("ceramahForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const telefon = document.getElementById("telefon").value;
    const kategori = document.getElementById("kategori").value;
    const slot = document.getElementById("slot").value;

    const hargaSeunit = 2500;
    const jumlah = hargaSeunit * slot;

    const pengesahan = document.getElementById("pengesahan");

    pengesahan.innerHTML = `
        <h2>Pengesahan Pendaftaran</h2>
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>No Telefon:</strong> ${telefon}</p>
        <p><strong>Kategori:</strong> ${kategori}</p>
        <p><strong>Bilangan Slot:</strong> ${slot}</p>
        <p><strong>Jumlah Yuran:</strong> RM ${jumlah.toFixed(2)}</p>
    `;

    pengesahan.classList.remove("hidden");
});
