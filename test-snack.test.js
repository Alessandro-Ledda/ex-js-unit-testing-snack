// import function from refactor
const { getInitials, createSlug, average } = require("./refactor-test.js");

// SNACK 1
test('la funzione "getInitials" restuisce la prima lettera del nomw completo ', () => {
    expect(getInitials("Alessnadro Le")).toBe("A.L");
    expect(getInitials("alessnadro le")).toBe("A.L");
    expect(getInitials("alessnadro  le")).toBe("A.L");
});

// SNACK 2
test('la funzione "createSlug" restituisce la stringa completa in minuscolo', () => {
    expect(createSlug("JAVASCRIPT")).toBe("javascript");
    expect(createSlug("Javascript")).toBe("javascript");
    expect(createSlug("jAvAsCrIpT")).toBe("javascript");
})

// SNACK 3

test('la funzione "average" ritorna la media aritmetica di un array di numeri', () => {
    expect(average([1, 2, 3, 4, 5, 6])).toBe(3.5);
    expect(() => average([17, "hotel", 3])).toThrow();
});

// SNACK 4

test("la funzione 'createSlug' sostituisce gli spazi con '-' ", () => {
    expect(createSlug("ciao sono ale")).toBe("ciao-sono-ale");
});

