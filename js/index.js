const btn = document.querySelector('button');
const prenom = ['Tony', 'Yannick', 'David', 'Laura', 'Tristan', 'Max1','Hasna', 'Quentin', 'Rihab', 'Dylan', 'Pierre', 'Max2'];


function random() {
  let random = Math.round(Math.random() * (prenom.length - 1));

  console.log(prenom[random]);

}

btn.addEventListener('click', random);
