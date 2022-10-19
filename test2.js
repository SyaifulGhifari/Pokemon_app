const word = (input) => {
  let number = 0;
  for (let kata of input.split(' ')) {
    if (!kata.match(/[\[_(!\*=&]/gm)) {
      number += 1;
    }
  }
  return number;
};

console.log(word('Saat meng*ecat tembok, Agung dib_antu oleh Raihan.'));
console.log(word('Berapa u(mur minimal[ untuk !mengurus ktp?'));
console.log(word('Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda.'));
