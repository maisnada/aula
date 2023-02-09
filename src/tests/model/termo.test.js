const Termo = require("../../model/Termo");

describe("Termo", () => {
  test("Deve retornar verdadeiro para palindromo único, capitalize e sem caracteres especiais", () => {
    expect(Termo.isPalindromo("Rotator")).toBe(true);
  });

  test("Deve retornar verdadeiro para palindromo único, lowercase e sem caracteres especiais", () => {
    expect(Termo.isPalindromo("bob")).toBe(true);
  });

  test("Deve retornar verdadeiro para palindromo único, camelcase e sem caracteres especiais", () => {
    expect(Termo.isPalindromo("mAlAyAlam")).toBe(true);
  });

  test("Deve retornar verdadeiro para palindromo único, tamanho 1 e sem caracteres especiais", () => {
    expect(Termo.isPalindromo("1")).toBe(true);
  });

  test("Deve retornar verdadeiro para palindromo composto com virgulas", () => {
    expect(Termo.isPalindromo("Able was I, ere I saw Elba")).toBe(true);
  });
  test("Deve retornar verdadeiro para palindromo composto com apostrofe", () => {
    expect(Termo.isPalindromo("Madam I'm Adam")).toBe(true);
  });
  test("Deve retornar verdadeiro para palindromo composto sem caracteres especiais", () => {
    expect(Termo.isPalindromo("Step on no pets")).toBe(true);
  });
  test("Deve retornar verdadeiro para palindromo composto com ponto de exclamação", () => {
    expect(Termo.isPalindromo("Top spot!")).toBe(true);
  });
  test("Deve retornar verdadeiro para palindromo único do tipo DD/MM/YYYY", () => {
    expect(Termo.isPalindromo("02/02/2020")).toBe(true);
  });
  test("Deve retornar verdadeiro para palindromo composto com caracteres especiais", () => {
    expect(Termo.isPalindromo("Socorram-me subi no ônibus em marrocos")).toBe(
      true
    );
  });
  test("Deve retornar falso para não palindromo único", () => {
    expect(Termo.isPalindromo("xyz")).toBe(false);
  });
  test("Deve retornar falso para não palindromo composto com ponto de exclamação", () => {
    expect(Termo.isPalindromo("Top . post!")).toBe(false);
  });
  test("Deve retornar falso para não palindromo único com hífem", () => {
    expect(Termo.isPalindromo("Wonderful-fool")).toBe(false);
  });
});
