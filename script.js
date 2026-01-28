document.getElementById("ceramahForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const telefon = document.getElementById("telefon").value;
    const kategori = document.getElementById("kategori").value;
    const slot = parseInt(document.getElementById("slot").value); // CHANGED

    const hargaSeunit = 50;
    const jumlah = hargaSeunit * slot;

    const pengesahan = document.getElementById("pengesahan");

    let html = `  <!-- CHANGED -->
        <h2>Pengesahan Pendaftaran</h2>

        <table class="pengesahan-table">
            <tr>
                <th colspan="2">Maklumat Ceramah</th>
            </tr>
            <tr>
                <td>Tajuk</td>
                <td>Ceramah Profesional Web Development</td>
            </tr>
            <tr>
                <td>Penceramah</td>
                <td>Pensyarah Pakar Web Development</td>
            </tr>
            <tr>
                <td>Tarikh</td>
                <td>30 Mac 2026</td>
            </tr>
            <tr>
                <td>Masa</td>
                <td>9.00 pagi – 5.00 petang</td>
            </tr>
            <tr>
                <td>Lokasi</td>
                <td>Dewan Utama Politeknik</td>
            </tr>
            <tr>
                <td>Yuran</td>
                <td>RM 50.00 / slot</td>
            </tr>

            <tr>
                <th colspan="2">Maklumat Peserta</th>
            </tr>
            <tr>
                <td>Nama</td>
                <td>${nama}</td>
            </tr>
            <tr>
                <td>Email</td>
                <td>${email}</td>
            </tr>
            <tr>
                <td>No Telefon</td>
                <td>${telefon}</td>
            </tr>
            <tr>
                <td>Kategori</td>
                <td>${kategori}</td>
            </tr>
            <tr>
                <td>Bilangan Slot</td>
                <td>${slot}</td>
            </tr>

            <tr>
                <th>Jumlah Bayaran</th>
                <th>RM ${jumlah.toFixed(2)}</th>
            </tr>
        </table>
    `;

    pengesahan.innerHTML = html; // CHANGED
    pengesahan.classList.remove("hidden");
});
