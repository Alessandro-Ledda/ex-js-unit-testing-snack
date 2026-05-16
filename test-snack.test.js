// import function from refactor
const { getInitials, createSlug, average, isPalindroma, findPostId, addPost, removePost } = require("./refactor-test.js");

// function string manipolation

describe('manipolazione stringhe', () => {

    // SNACK 1
    test('la funzione "getInitials" restuisce la prima lettera del nomw completo ', () => {
        expect(getInitials("Alessnadro Le")).toBe("A.L");
        expect(getInitials("alessnadro le")).toBe("A.L");
        expect(getInitials("alessnadro  le")).toBe("A.L");

    });

    // SNACK 5
    test('la funzione "isPalindroma" verifica se la stinga è palindroma', () => {
        expect(isPalindroma("anna")).toBeTruthy();
        expect(isPalindroma("anna ")).toBeTruthy();
        expect(isPalindroma("casa")).toBeFalsy();
    })
})

// CREAZIONE OGGETTO 
let posts;

beforeEach(() => {
    posts = [
        { id: 1, title: "caoitolo 1", slug: "capitolo-1" },
        { id: 2, title: "caoitolo 2", slug: "capitolo-2" }
    ]
});

afterEach(() => {
    posts = [];
});

// function manipoliation array
describe('manipolazione array', () => {

    // SNACK 3
    test('la funzione "average" ritorna la media aritmetica di un array di numeri', () => {
        expect(average([1, 2, 3, 4, 5, 6])).toBe(3.5);
        expect(() => average([17, "hotel", 3])).toThrow();
    });

    // SNACK 7



    test("la funzione 'findPostId' restituisce il post corretto dato dall'array di post e l'id", () => {
        expect(findPostId(posts, 2)).toEqual({ id: 2, title: "caoitolo 2", slug: "capitolo-2" });
        expect(findPostId(posts, 7)).toBe(null);
        expect(() => findPostId(posts, "casa")).toThrow("casa non è un id");
        expect(() => findPostId([33, 45, 667], 2)).toThrow("il primo argomento non si aspetta un array");
    })
})

describe('generazione di slug', () => {

    // SNACK 2
    test('la funzione "createSlug" restituisce la stringa completa in minuscolo', () => {
        expect(createSlug("JAVASCRIPT")).toBe("javascript");
        expect(createSlug("Javascript")).toBe("javascript");
        expect(createSlug("jAvAsCrIpT")).toBe("javascript");
    })

    // SNACK 4

    test("la funzione 'createSlug' sostituisce gli spazi con '-' ", () => {
        expect(createSlug("ciao sono ale")).toBe("ciao-sono-ale");
    });


    // SNACK 6
    test('la funzione "createSlug" lanci aun errore se l astringa non è valida', () => {
        expect(() => createSlug("")).toThrow("titolo non valido");
        expect(() => createSlug(null)).toThrow("titolo non valido");
    });

})


// SNACK 8 --BONUS
test('dopo aver aggiunto un post con la funzione "addPost" l arrey post deve contenere un elemento in piu', () => {
    addPost(posts, { id: 3, title: "caoitolo 3", slug: "capitolo-3" })
    expect(posts).toHaveLength(3);
});
test('dopo aver rimosso il post con la funzione"removePost" l array post deve contenere un alemento in meno', () => {
    removePost(posts, 2);
    expect(posts).toHaveLength(1);
});






