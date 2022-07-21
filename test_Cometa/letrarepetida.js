function letraRepetida(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {  //O(n^2) O(n)
    if (arr.includes(str[i])) {
      return str[i];
    } else {
      arr.push(str[i])
    }
  }
  return null;
}

/*
  El enfoque que he tomado para resolver es el siguiente:
  * Para devolvolver la primera letra repetida he realizado un bucle anidado, el primer bucle 
    itera input text (str) y el segundo bucle itera array arr donde su recorrido se va basar segun 
    como evalua la condición, ya que estara aumentanto los items de array de forma lineal, hasta que se encuentre
    la letra repetida, al ser un bucle anidado el tiempo de ejecución aumenta. Complejidad: O(n^2).
  * En tanto a la complejidad de espacio, este es de manera lineal, a medida que se van agregando
    elementos al array, su capacidad crecera. Entonces cada vez que se realice push al array arr, su 
    capacidad crecera.
*/


function letraRepetida2(str) {
  const obj = {};
  for (let i = 0; i < str.length; i++) {  //O(n) O(n)
    if (obj[str[i]]) {
      return str[i];
    } else {
      obj[str[i]] = i + 1;
    }
  }
  return null;
}

/*
  El enfoque que he tomado para resolver es el siguiente:
  * En este caso para devolvolver la primera letra repetida he iterado segun el tamaño del input text, y dependiendo
    a la condicion voy a tener el resultado, en este caso al iterarse una vez su complejidad es lineal, ya que
    segun el tiempo de ejecución dependera de la veces que se itere, segun tamaño de str. Complejidad: O(n)
  * En tanto a la complejidad de espacio, este es de manera lineal al igual que el array, a medida que se van agregando
    propiedades al objeto, su capacidad crecera. 
*/

/*
  Situaciónes de uso:
  * En este caso por un tema de tiempo de ejecución seria recomendable usar letraRepetida() si el input es de menor tamaño, 
   si en caso fuera un texto grande seria recomendable usar letraRepetida2().
  * En el tema de spacio no hay variación alguno, pero se podría considerar que si durante el problema,
   nos mencionaran que manipulemos tanto el arreglo u objeto que se creo, seria preferible usar el array ya que nos brindan
   diferentes metodos para manipular el arreglo(para ello se podria crear incluso un arreglo de objeto).

*/