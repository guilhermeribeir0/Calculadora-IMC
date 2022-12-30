
const calc = document.getElementById('calc');
const clean = document.getElementById('clean');

function calculateImc() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const resultImc = document.getElementById('resultImc');
    const resultClassification = document.getElementById('resultClassification');

    let classification = '';

    if (weight !== '' && height !== '') {
        const imc = (weight / (height * height)).toFixed(2);

        if (imc < 18.5) {
            classification = 'Abaixo do Peso!'
        } else if (imc < 25) {
            classification = 'Peso ideal!'
        } else if (imc < 30) {
            classification = 'Sobrepeso!'
        } else if (imc < 35) {
            classification = 'Obesidade Grau I'
        } else if (imc < 40) {
            classification = 'Obesidade Grau II'
        } else if (imc >= 40) {
            classification = 'Obesidade Grau III'
        }

        resultImc.textContent = `Valor do IMC: ${imc}`;

        resultClassification.textContent = `Valor do IMC: ${classification}`;
    }
}

calc.addEventListener('click', calculateImc);

