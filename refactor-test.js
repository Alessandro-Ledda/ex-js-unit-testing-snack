// SNACK 1
const getInitials = (string) => {
    const [nome, cognome] = string.split(" ").filter((str) => str !== "");
    return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}`;
}

// SNACK 2 / SNACK 4 (replaceAll) SNACK 6 (SE SRINGA è valida)
const createSlug = (str) => {
    // se stringa non è valida
    if (!str) {
        throw new Error("titolo non valido")
    }

    return str.toLowerCase().replaceAll(" ", "-");
}

// SNACK 3
const average = (numeri) => {
    // nel caso avessimo stringhe in un array di numeri
    numeri.forEach(numeri => {
        if (isNaN(numeri)) {
            throw new Error("Accetta solo valori numerici")
        }
    });
    return numeri.reduce((acc, curr) => acc + curr, 0) / numeri.length;
}


// SNACK 5
const isPalindroma = (string) => {
    const stringaInversa = string.trim().split("").reverse().join("");
    return string.trim() === stringaInversa
}


module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindroma
}
