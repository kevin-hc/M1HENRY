'use strict';

//unction BinarioADecimal(num) {}

//function DecimalABinario(num) {}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
/*## 👩‍💻 **CONSIGNA**

En ambos deberás declarar funciones. Cada función tiene que permitir traducir un número a los dos diferentes sistemas numéricos que vimos en clase.

En el archivo **_homework.js_** resuelve los siguientes ejercicios:

</br >

### 🟡 **Ejercicio 1: BinarioADecimal**

Declara una función que reciba por parámetro un número en formato string en base binaria y retorne el mismo número en base decimal. El valor retornado debe ser de tipo number. Por ejemplo:

```javascript
BinarioADecimal('1100'); // debe retornar 12 */

function BinarioADecimal(num) {  
   var sum = 0
   var numReverse = (num.split('').reverse(''))
   let arrayDeNumeros = numReverse.map(function(numeroComoString) {
     return parseInt(numeroComoString);
   });
 
   for (var i = 0; i < numReverse.length; i++) {   
     sum = sum + arrayDeNumeros[i] * 2 ** i;
   }
 
   return sum;}
 
   console.log(BinarioADecimal('1100'));


/*### 🟡 **Ejercicio 2: DecimalABinario**

Escribe una función que reciba por parámetro un número en base decimal y retorne el mismo número en base binaria. El valor retornado debe ser de tipo string. Por ejemplo:

```javascript
DecimalABinario(8); // debe retornar '1000' */

function DecimalABinario(num) {}