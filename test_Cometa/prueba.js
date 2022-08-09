// function juntarParImpar(arr) {
//     let par = [];
//     let impar = []
//     for (let i = arr.length - 1; i >= 0; i--) { //O(n)
//         if (arr[i] % 2 === 0) {
//             par.push(arr[i]); // O(n)
//         } else {
//             impar.push(arr[i]) // O(n)
//         }
//         arr.pop()
//     }
//     return par.concat(impar) // O(n)
// }

// En complejidad espacio ocupa O(2n)
// En complejidad tiempo ocupa O(2n)





function juntarParImpar(arr) {
    let num = [];
    for (let i = arr.length - 1; i >= 0; i--) { //O(n^2)
        if (arr[i] % 2 === 0) {
            num.push(arr[i]); //O(n)
            arr.splice(i, 1) //O(n)
        }
    }
    return num.concat(arr)
}

// En complejidad espacio ocupa O(n)
// En complejidad tiempo ocupa O(n^2)

console.log(juntarParImpar([5, 9, 3, 4, 5, 6]))

//