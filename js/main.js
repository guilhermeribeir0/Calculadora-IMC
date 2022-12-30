const weight = document.getElementById('weight').value;
const height = document.getElementById('height').value;

const imc = (weight / (height * height)).toFixed(2);