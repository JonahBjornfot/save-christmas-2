
export function randomArray(len, n) {

    // Skapa en ny tom array av längd len
    const a = new Array(len)

    // Fyll varje plats i arrayen med ett random heltal
    for (let i = 0; i < a.length; i++) {
        a[i] = randomInt(n)
    }

    return a
}

function randomInt(n) {
    return Math.floor(Math.random() * (n + 1))
}

let h = [8, 2, 4, 7]

export function swap(k, a, b) {
    let temp = k[a];
    k[a] = k[b];
    k[b] = temp;
}

swap(h, 0, 1);
swap(h, 1, 3);
swap(h, 2, 1);

console.log(h)

// function swap(array, a, b) {
//     const temp = array[a];
//     array[a] = array[b];
//     array[b] = temp;
// }
