const readline = require("node:readline"); // Import module readline
const { stdin: input, stdout: output } = require("node:process"); // Import object input dan output dari module process
const rl = readline.createInterface({ input, output }); // Buat interface readline

let todos = []; // Array untuk menyimpan daftar tugas


function showMenu() {
    console.log('\n==== To-Do List ====')
    console.log('1. Tambah Tugas')
    console.log('2. Lihat Tugas')
    console.log('3. Tandai Tugas Selesai')
    console.log('4. Hapus Tugas')
    console.log('5. Keluar')
    rl.question('Pilih Menu: ', (number) => {
        switch (number) {
            case '1':
                addTodo() // Panggil fungsi untuk menambah tugas
                break
            case '2':
                listTodo() // Panggil fungsi untuk melihat daftar tugas
                break
            case '3':
                markTodo() // Panggil fungsi untuk menandai tugas sebagai selesai
                break
            case '4':
                deleteTodo() // Panggil fungsi untuk menghapus tugas
                break
            case '5':
                console.log('terima kasih')
                rl.close() // Tutup interface readline dan keluar dari aplikasi
                break
            default:
                console.log('Pilihan tidak valid, coba lagi')
                showMenu() // Tampilkan menu lagi jika pilihan tidak valid
        }
    })
}

// Fungsi untuk menambah tugas baru ke dalam daftar
function addTodo() {
    rl.question("Masukkan tugas baru: ", task => {
        if (task.trim() === '') {
            console.log('tidak boleh kosong') // Validasi input tidak boleh kosong
        } else {
            todos.push(task) // Tambahkan tugas ke dalam array todos
            console.log('Tugas Telah Ditambah')
        }
        showMenu() // Tampilkan menu lagi setelah menambah tugas
    })
}

// Fungsi untuk menampilkan daftar tugas yang ada
function listTodo() {
    console.log('\n===Daftar Tugas===')
    if (todos.length === 0) {
        console.log('Belum ada tugas') // Tampilkan pesan jika tidak ada tugas
    } else {
        todos.forEach((todo, index) => {
            console.log(`${index + 1}. ${todo}`) // Tampilkan setiap tugas dengan nomor urut
        })
    }
    showMenu() // Tampilkan menu lagi setelah melihat daftar tugas
}

// Fungsi untuk menandai tugas sebagai selesai
function markTodo() {
    rl.question('Masukkan nomor yang akan ditandai: ', (number) => {
        const index = parseInt(number) - 1
        if (isNaN(index) || index < 0 || index >= todos.length) {
            console.log('Maaf, Nomor tidak ada') // Validasi nomor tugas yang dimasukkan
        } else {
            todos = todos.map((todo, i) => i === index ? `${todo} [Selesai]` : todo) // Tandai tugas sebagai selesai
            console.log('Selamat Tugas Selesai')
        }
        showMenu() // Tampilkan menu lagi setelah menandai tugas
    })
}

// Fungsi untuk menghapus tugas
function deleteTodo() {
    rl.question('Masukkan nomor tugas yang ingin dihapus: ', (number) => {
        const index = parseInt(number) - 1;
        if (isNaN(index) || index < 0 || index >= todos.length) {
            console.log('Maaf, Nomor tidak ada'); // Validasi nomor tugas yang dimasukkan
        } else {
            todos.splice(index, 1); // Hapus tugas dari array
            console.log('Tugas Telah dihapus');
        }
        showMenu(); // Tampilkan menu lagi setelah menghapus tugas
    });
}

showMenu(); // Tampilkan menu utama saat program dijalankan
