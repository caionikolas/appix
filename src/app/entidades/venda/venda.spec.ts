import { Venda } from './venda';

describe('Venda', () => {
  test('deve ser possivel fazer um Venda', () => {
    const venda = new Venda({
      quantidade: 3,
      delivery: false,
      retirada: true,
      localEntrega: 'Bairro Fulano de Tal',
      produtoId: 'exemplo-produtoId',
      compradorId: 'exemplo-compradorId',
    });

    expect(venda).toBeTruthy();
  });
});
