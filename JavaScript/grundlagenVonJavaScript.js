console.log('\n'); //erzeugt eine Leere neue Row / Zeile
console.log('Willkommen bei den Grundlagen von JavaScript.');
console.log(
  'In den nächsten paar Aufgaben gehen wir nochmals alles wichtige durch, dass du wissen musst',
);
//Wichtig zu Wissen: Dieses Beispiel kann in der Konsole über "node grundlagenVonJavaScript.js" gestartet werden!
console.log('\n');
console.log('Deklarationen und Variablen: \n');

let scope1 = 'Ich bin gültig für das ganze File!';
const konstant = 'Ich kann nach meiner Deklaration nicht mehr geändert werden';
var global;

console.log('scope1: ' + scope1);
console.log('konstant: ' + konstant);
console.log(`global: '${global}' \n`);
console.log('Das sind die Variablen welche wir später noch gebrauchen werden :)');

console.log(
  'Nun da wir unsere ersten Variablen angelegt haben, können wir auch etwas Spaß mit ihnen haben',
);

console.log('_'.repeat(process.stdout.columns) + '\n'); //gibt an wie weit (in Columns) das Terminal ist und wiederholt - so oft.

console.log('Manipulation von Variablen: \n');

console.log('vorher:');
console.log(` scope1: ${scope1}; \n konstant: ${konstant}; global: \n '${global}'`);

scope1 = 'Neuer Wert';
global = 'Ich hab endlich einen Wert!!';

console.log('\nnachher');
console.log(` scope1: ${scope1}; \n konstant: ${konstant}; \n global: '${global}'`);

console.log('_'.repeat(process.stdout.columns) + '\n');

console.log('Schleifen und Bedingungen: \n');

console.log('Das ist eine While-Schleife:');
let counter = 0;
let ergebnis = '~';
while (counter < process.stdout.columns - 1) {
  ergebnis += '~';
  counter++;
}
console.log(ergebnis + '\n');

console.log('Und das ist eine For-Schleife:');

ergebnis = '.';
for (let i = 0; i < process.stdout.columns - 1; i++) {
  ergebnis += '.';
}
console.log(ergebnis + '\n');

console.log('Doch was können eigentlich Bedingungen? \n');

console.log('Sie können Code bedingt rendern:');

if (ergebnis.length > 0) {
  console.log(' - ergebnis.length war größer Null!');
}

console.log('Oder sie können zwischen Code Blöcke bestimmt auswählen und rendern:');

const wert1 = 8;
const wert2 = '8';

if (wert1 === wert2) {
  console.log(' - Beide haben den selben Wert und Datentypen');
} else if (wert1 == wert2) {
  console.log(' - Beiden haben den selben Wert');
} else {
  console.log(' - Die beiden Werte sind ungleich');
}

console.log('\nUnd somit haben wir auch die einfachsten Basics von JavaScript hinter uns. Yuhu!');
