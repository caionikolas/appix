import { Descricao } from './descricao';

describe('Descrição do Vendedor', () => {
  test('deve ser possivel criar a descrição do vendedor', () => {
    const descricao = new Descricao('Vendedor de roupas');

    expect(descricao).toBeTruthy();
  });

  test('não deve ser possivel criar a descrição do vendedor com mais de 100 caracteres', () => {
    expect(() => {
      new Descricao('a'.repeat(101));
    }).toThrow();
  });
});
