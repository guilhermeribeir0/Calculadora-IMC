
const calc = document.getElementById('calc');
const clean = document.getElementById('clean');
const resultImc = document.getElementById('resultImc');
const resultClassification = document.getElementById('resultClassification');

function calculateImc() {

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    
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

        resultImc.textContent = imc;

        resultClassification.textContent = classification;
    }
}

calc.addEventListener('click', calculateImc);

function cleanForm() {

    weight.value = '';
    height.value = '';
    resultImc.textContent = '';
    resultClassification.textContent = '';
    
}

clean.addEventListener('click', cleanForm);



