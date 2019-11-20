const btn = document.querySelector('button');

function randomize(tab) {
    var i, j, tmp;
    for (i = tab.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        tmp = tab[i];
        tab[i] = tab[j];
        tab[j] = tmp;
    }
    console.log(tab);
    return tab;
}

var tab = ['Tony', 'Yannick', 'David', 'Laura', 'Tristan', 'Max1','Hasna', 'Quentin', 'Rihab', 'Dylan', 'Pierre', 'Max2'];
tab = randomize(tab);
console.log(tab);

btn.addEventListener('click' , () => {
  const random = randomize(tab)
  /**random.forEach((value, key) => {
    document.getElementById(place-${key + 1}).innerHTML = value;
  })*/

  random.forEach(function (value, key) {
    console.log(key, value)
    document.getElementById('place-' + (key + 1)).innerHTML = value;
  })


});
