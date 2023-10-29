import { AdicionarVendedor } from './adicionar-vendedor';

describe('Adicionar vendedor', () => {
  test('Deve ser possivel adicionar um Vendedor', async () => {
    const adicionarVendedor = new AdicionarVendedor();

    const { vendedor } = await adicionarVendedor.execute({
      nome: 'Eduardo',
      descricao: 'Vendedor de roupas',
      delivery: false,
      retirada: true,
    });

    expect(vendedor).toBeTruthy();
  });
});
