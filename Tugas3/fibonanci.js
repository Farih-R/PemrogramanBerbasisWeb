const fibonacci = (n) => {
    let fibSeries = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
    }
    return fibSeries;
};

let jumlah = parseInt(prompt("Masukkan jumlah deret Fibonacci yang ingin ditampilkan:", "10"));

if (!isNaN(jumlah) && jumlah > 0) {
    let hasil = fibonacci(jumlah);
    console.log("Deret Fibonacci:", hasil.join(", "));
    alert("Deret Fibonacci: " + hasil.join(", "));
} else {
    alert("Masukkan angka yang valid!");
}