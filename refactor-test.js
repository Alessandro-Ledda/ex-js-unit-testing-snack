// SNACK 1
const getInitials = (string) => {
    const [nome, cognome] = string.split(" ").filter((str) => str !== "");
    return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}`;
}

// SNACK 2 / SNACK 4 (replaceAll) SNACK 6 (SE SRINGA è valida) / SNACK 10 
const createSlug = (str, posts) => {
    // se stringa non è valida
    if (!str) {
        throw new Error("titolo non valido")
    }
    let slug = str.toLowerCase().replaceAll(" ", "-");
    if (posts) {
        for (let i = 0; i < posts.length; i++) {
            const post = posts[i];
            if (post.slug === slug) {
                return slug + "-1";
            }
        }
    }

    return slug;
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

// SNACK 7
const findPostId = (posts, id) => {
    // se è valido l'id
    if (isNaN(id)) {
        throw new Error(`${id} non è un id`);
    }
    posts.forEach((post) => {
        if (
            post.id === undefined ||
            post.title === undefined ||
            post.slug === undefined
        ) {
            throw new Error("il primo argomento non si aspetta un array")
        }
    })
    return posts.find(post => post.id === id) || null;
}

// SNACK 8 --BONUS
function addPost(posts, post) {
    const ids = posts.map(post => post.id);
    if (ids.includes(post.id)) {
        throw new Error("id gia presente");
    }

    const slugs = posts.map(post => post.slug);
    if (slugs.includes(post.slug)) {
        throw new Error('slug gia presente')
    }
    posts.push(post);
}

function removePost(posts, id) {
    const index = posts.findIndex(post => post.id === id);
    posts.splice(index, 1);

}


module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindroma,
    findPostId,
    addPost,
    removePost
}
