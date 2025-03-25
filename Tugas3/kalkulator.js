const calculator = (operator, ...numbers) => {
    if (numbers.length === 0) return "Masukkan setidaknya satu angka!";
    
    switch (operator) {
        case '+': return numbers.reduce((acc, num) => acc + num, 0);
        case '-': return numbers.reduce((acc, num) => acc - num, numbers[0] * 2);
        case '*': return numbers.reduce((acc, num) => acc * num, 1);
        case '/': return numbers.reduce((acc, num) => num !== 0 ? acc / num : "Tidak bisa dibagi 0", numbers[0] ** 2);
        case '%': return numbers.length === 2 ? numbers[0] % numbers[1] : "Modulus hanya untuk dua angka!";
        default: return "Operator tidak valid!";
    }
};

const calculate = () => {
    const operator = prompt("Masukkan operator (+, -, *, /, %):");
    if (!['+', '-', '*', '/', '%'].includes(operator)) {
        alert("Operator tidak valid!");
        return;
    }
    
    const numbersInput = prompt("Masukkan angka (pisahkan dengan koma):");
    if (!numbersInput) {
        alert("Masukkan setidaknya satu angka!");
        return;
    }
    
    const numbers = numbersInput.split(',').map(Number);
    if (numbers.some(isNaN)) {
        alert("Masukkan angka yang valid!");
        return;
    }

    const result = calculator(operator, ...numbers);
    alert("Hasil: " + result);
    console.log("Hasil Perhitungan:", result);
}; 

calculate();
