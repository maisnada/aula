"use strict";

class Termo {
  constructor() {}

  static isPalindromo(texto) {
    let textoFormatado = this._formatarTexto(texto);

    return this._inverterTexto(textoFormatado) === textoFormatado
      ? true
      : false;
  }

  static _formatarTexto(texto) {
    return texto.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  }

  static _inverterTexto(texto) {
    let textoInvertido = [];

    for (let i = texto.length - 1; i >= 0; i--) {
      textoInvertido.push(texto[i]);
    }

    return textoInvertido.join().replaceAll(",", "");
  }
}

module.exports = Termo;
