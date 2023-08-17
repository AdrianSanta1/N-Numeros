function analizarNumeros() {
    const numerosInput = document.getElementById('numerosInput').value;
    const numerosArray = numerosInput.split(' ').map(Number);

    const mayores = [];
    const menores = [];

    if (numerosArray.length > 0) {
        const maxNumber = Math.max(...numerosArray);
        const minNumber = Math.min(...numerosArray);

        for (let num of numerosArray) {
            if (num === maxNumber) {
                mayores.push(num);
            } else if (num === minNumber) {
                menores.push(num);
            }
        }
    }
    
    const resultadoDom = document.getElementById('resultadoDom');
    resultadoDom.innerHTML = `
        <div class="resultado-box">
            <p>Números mayores: ${mayores.join(', ')}</p>
            <p>Números menores: ${menores.join(', ')}</p>
        </div>
    `;

    console.log('Número Mayor:', mayores);
    console.log('Número Menor:', menores);
}
