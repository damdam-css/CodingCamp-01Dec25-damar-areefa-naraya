let userName = prompt("siapa nama mu?");
const defaultName = "Guest"; 

let displayName;
if (userName === null || userName.trim() === "") {
    displayName = defaultName;
} else {
    displayName = userName;
}
const headerElement = document.getElementById("nama-sambutan");
if (headerElement) {
    headerElement.innerHTML = "Hi " + displayName + ",  Welcome To Website";
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('messageForm');
    const outputDiv = document.getElementById('outputData');
    const currentTimeSpan = document.getElementById('currentTime');
    function updateCurrentTime() {
        const now = new Date();
        const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };
        currentTimeSpan.textContent = now.toLocaleDateString('en-US', options);
    }
    updateCurrentTime();
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const nama = document.getElementById('nama').value;
        const tanggalLahirInput = document.getElementById('tanggalLahir').value;
        const jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked');
        const pesan = document.getElementById('pesan').value;

        // Validasi input
        if (!nama || !tanggalLahirInput || !jenisKelamin) {
            alert('Mohon lengkapi semua data wajib (Nama, Tanggal Lahir, Jenis Kelamin).');
            return;
        }
        const [year, month, day] = tanggalLahirInput.split('-');
        const tanggalLahirFormatted = `${day}/${month}/${year}`;

        updateCurrentTime();
        document.getElementById('outNama').textContent = nama;
        document.getElementById('outTanggalLahir').textContent = tanggalLahirFormatted;
        document.getElementById('outJenisKelamin').textContent = jenisKelamin ? jenisKelamin.value : '';
        document.getElementById('outPesan').textContent = pesan;
    });
});