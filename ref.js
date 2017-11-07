
var asterisco='';

var num=prompt('Introduzca un numero entre 2 y 6');
while (num<2 || num>6) {
num=prompt('Introduzca un numero entre 2 y 6');
}
console.log('Num',num);
for (var i = 1; i <= num; i++) {
asterisco= asterisco+'*';
console.log(asterisco);
}
