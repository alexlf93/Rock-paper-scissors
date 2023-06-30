module.import(quienGana)=require('./script.js');

test("Si el ordenador saca papel, y el humano tijera, gana el humano", () => {
    expect(quienGana("papel")).toBe("humano");
  });

