console.log('\n'); //erzeugt eine Leere neue Row / Zeile
console.log('Willkommen bei den Grundlagen von JavaScript.');
console.log(
  'In den nächsten paar Aufgaben gehen wir nochmals alles wichtige durch, dass du wissen musst',
);
//Wichtig zu Wissen: Dieses Beispiel kann in der Konsole über "node grundlagenVonJavaScript.js" gestartet werden!
console.log('\n');
console.log('Deklarationen und Variablen: \n');
//AUFGABE: Deklariere drei Variablen: Die lokale Variable "scope1", die Konstante "konstant" und die globale Variable "global". Weise "scope1" und "konstant" jeweils einen sinnvollen Wert zu!

console.log('scope1: ' + scope1);
//AUFGABE: Gib die Variable "konstant" nun selber aus
console.log(`global: '${global}' \n`);
console.log('Das sind die Variablen welche wir später noch gebrauchen werden :)');

console.log(
  'Nun da wir unsere ersten Variablen angelegt haben, können wir auch etwas Spaß mit ihnen haben',
);

console.log('_'.repeat(process.stdout.columns) + '\n'); //gibt an wie weit (in Columns) das Terminal ist und wiederholt "-"" so oft.

console.log('Manipulation von Variablen: \n');

//AUFGABE: Ändere die Werte unserer 2 Variablen und gib ein vorher, wie nachher aus!

console.log('_'.repeat(process.stdout.columns) + '\n');

console.log('Schleifen und Bedingungen: \n');

//AUFGABE: Erstelle eine While Schleife, welche unser console.log'_'.repeat(process.stdout.columns)) simuliert. Ersetze das "-" durch ein "~"
//Tipp: Alle notwendigen Variablen wurden schon für dich angelegt!

console.log('Das ist eine While-Schleife:');
let counter = 0;
let ergebnis = '~';
while (counter < process.stdout.columns - 1) {
  //Dein Code hier...
}
console.log(ergebnis + '\n');

console.log('Und das ist eine For-Schleife:');

//AUFGABE: Mit der Erfahrung von der While-Schleife, probiere nun die For-Schleife alleine zu programmieren
ergebnis = '.';

//Dein Code hier...

console.log(ergebnis + '\n');

console.log('Doch was können eigentlich Bedingungen? \n');

console.log('Sie können Code bedingt rendern:');

//AUFGABE: Gib den Text nur aus, wenn ergebnis eine Länge von über Null hat!
if () {
  console.log(' - ergebnis.length war größer Null!');
}

console.log('Oder sie können zwischen Code Blöcke bestimmt auswählen und rendern:');

const wert1 = 8;
const wert2 = '8';

//AUFGABE: Setze die richtigen Bedingungen, so dass der ausgegebene Satz mit dieser übereinstimmt.

if () {
  console.log(' - Beide haben den selben Wert und Datentypen');
} else if () {
  console.log(' - Beiden haben den selben Wert');
} else {
  console.log(' - Die beiden Werte sind ungleich');
}

console.log('\nUnd somit haben wir auch die einfachsten Basics von JavaScript hinter uns. Yuhu!');
