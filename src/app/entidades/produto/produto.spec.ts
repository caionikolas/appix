import { Produto } from './produto';

describe('Produto', () => {
  test('deve ser possivel cadastrar um Produto', () => {
    const produto = new Produto({
      nome: 'Sabão',
      observacao: 'Lavanda',
      preco: 12.9,
      vendedorId: 'eabbc8b8-3bce-44cc-94dd-d6c6636161cf',
    });

    expect(produto).toBeTruthy();
  });
});
