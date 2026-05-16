// SNACK 1
const getInitials = (string) => {
    const [nome, cognome] = string.split(" ").filter((str) => str !== "");
    return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}`;
}

// SNACK 2 / SNACK 4 (replaceAll)
const createSlug = (str) => {
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


// SNACK 4


module.exports = {
    getInitials,
    createSlug,
    average
}
