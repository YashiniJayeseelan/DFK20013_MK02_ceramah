document.getElementById("ceramahForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const telefon = document.getElementById("telefon").value;
    const kategori = document.getElementById("kategori").value;
    const slot = document.getElementById("slot").value;

    const hargaSeunit = 50;
    const jumlah = hargaSeunit * slot;

    const pengesahan = document.getElementById("pengesahan");

    pengesahan.innerHTML = `
        <h2>Pengesahan Pendaftaran</h2>

        <hr>

        <h3>Maklumat Ceramah</h3>
        <p><strong>Tajuk:</strong> Ceramah Profesional Web Development</p>
        <p><strong>Penceramah:</strong> Pensyarah Pakar Web Development</p>
        <p><strong>Tarikh:</strong> 30 Mac 2026</p>
        <p><strong>Masa:</strong> 9.00 pagi – 5.00 petang</p>
        <p><strong>Lokasi:</strong> Dewan Utama Politeknik</p>
        <p><strong>Yuran:</strong> RM50.00 / slot</p>

        <hr>

        <h3>Maklumat Peserta</h3>
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>No Telefon:</strong> ${telefon}</p>
        <p><strong>Kategori:</strong> ${kategori}</p>
        <p><strong>Bilangan Slot:</strong> ${slot}</p>

        <hr>

        <h3>Jumlah Bayaran</h3>
        <p><strong>RM ${jumlah.toFixed(2)}</strong></p>
    `;

    pengesahan.classList.remove("hidden");
});
