function esPalindromo(str) {
  let regexStr = str.toLowerCase().replace(/\W+|_/g, "");    //O(1) - constante
  return regexStr === regexStr.split("").reverse().join("")  //O(3n) - lineal
}

/* 
  El enfoque que he tomado para resolver es el siguiente:
  * Uso el método toLowerCase() para que devuelva una cadena convertida en minuscula
    y con el método replace remplazo alguna o todas las concidiencias según el patron regex, la 
    ejecución del código se realiza en tiempo constante, ya que no importa el tamaño del string
    el tiempo de ejecución no va variar. Complejidad: O(1)
  * Al momento de retornar el boleano(segun la comparación), al comprobar el segundo valor se va generar iteraciones 
    mediante los métodos split, reverse y join, al ejecutarse las iteraciones este va ser en tiempo
    lineal, el tiempo de ejecución varia según el tamaño del string. Complejidad: O(n)
*/

function esPalindromo2(str) {
  str = str.toLowerCase().replace(/\W+|_/g, "");        //O(1) => Se convierte en O(n) ya que el tamaño de la cadena va variar
  //segun como se va eliminando los extremos del texto.
  if (str.length < 2) {                                 //O(n)
    return true
  }
  return str[0] == str[str.length - 1]                  //O(n)
    && esPalindromo2(str.substring(1, str.length - 1))  //O(n/2)
}

/*
  El enfoque que he tomado para resolver es el siguiente:
  * La solución recursiva del problema consiste en la descomposición, para 
    comprobar si un texto es palíndromo. Se va llamar a la función 
    recursivamente n/2 veces, ya que se va eliminar los 2 extremos de la cadena y tardara 
    la mitad de n la ejecución. Complejidad O(n/2) = O(n)
*/