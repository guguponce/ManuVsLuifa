  const quienHizoVeintiuno = (picado) => {
    const picArr = picado.split("");
    let manu = 0;
    let luifa = 0;
    let contadorManu = 0;
    let contadorLuifa = 0;
    const valores = { m: 2, M: 3, l: 2, L: 3 };
    for (let puntoIndex = 0; puntoIndex < picArr.length; puntoIndex++) {
      const punto = picArr[puntoIndex];
      let currentPunto = valores[punto];

      if (punto.toLowerCase() == "m") {
        manu += currentPunto;
        contadorManu++;
      } else {
        luifa += currentPunto;
        contadorLuifa++;
      }

      if (manu === 21) {
        console.log(`Manu ganó en su tiro: ${contadorManu}`);
        break;
      } else if (manu === 20 || manu > 21) { //Si llega a 20 se le resta el punto actual, sino no tiene chance con dobles o triples
        manu -= currentPunto;
      } else if (luifa === 21) {
        console.log(`Luifa ganó en su tiro: ${contadorLuifa}`);
        break;
      } else if (luifa === 20 || luifa > 21) {
        luifa -= currentPunto;
      }
    }
  }
