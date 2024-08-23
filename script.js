document.getElementById('btn').addEventListener('click', function() {
    const textisi = document.getElementById('text');
    let angka = 5;

    textisi.textContent = `Peringatan ini akan ditutup dalam ${angka} detik`;

    const timer = setInterval(function() {
        angka--;
        textisi.textContent = `Peringatan ini akan ditutup dalam ${angka} detik`;

        if (angka <= 0) {
            clearInterval(timer);
            textisi.textContent = ''; 
        }
        x
    }, 1000); 
});