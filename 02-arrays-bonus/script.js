const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = [];

for (let i = teachers.lenght - 1; i >= 0; i--){
  reversedTeachers.push(teachers[i]);
}
console.log(reversedTeachers)

//OPPURE

// const = reversedTeachers = teachers.toReverse();
console.log(reversedTeachers)

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];

for (let i = 0; i < teachers.lenght; i++){
  const name = teachers[i];
  if(name.lenght >= 5){
    longNames.push(name)
  }
}
console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers

const edIndex = teachers.indexOf('Ed')
teachers.splice(edIndex, 1)

console.log(teachers);