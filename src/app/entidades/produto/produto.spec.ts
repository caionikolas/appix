import { Produto } from './produto';

describe('Produto', () => {
  test('deve ser possivel cadestrar um Produto', () => {
    const produto = new Produto({
      nome: 'Sabão',
      observacao: 'Lavanda',
      preco: 12.9,
    });

    expect(produto).toBeTruthy();
  });
});
