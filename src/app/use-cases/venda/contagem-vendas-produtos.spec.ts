import { EmMemoriaVendasRepositorio } from '@test/repositorios/em-memoria-venda-repositorio';
import { AdicionarVenda } from './adicionar-venda';

describe('Contagem de vendas de um produto especifico', () => {
  test('Deve ser possivel a contagem de vendas de um produto especifico', async () => {
    const vendasRepositorio = new EmMemoriaVendasRepositorio();
    const adicionarVenda = new AdicionarVenda(vendasRepositorio);

    await adicionarVenda.execute({
      quantidade: 3,
      delivery: false,
      retirada: true,
      localEntrega: 'Rua Toin das coca',
      produtoId: 'exemplo-pid-1',
      compradorId: 'exemplo-cid-1',
    });

    await adicionarVenda.execute({
      quantidade: 3,
      delivery: false,
      retirada: true,
      localEntrega: 'Rua Toin das coca',
      produtoId: 'exemplo-pid-1',
      compradorId: 'exemplo-cid-1',
    });

    await adicionarVenda.execute({
      quantidade: 3,
      delivery: false,
      retirada: true,
      localEntrega: 'Rua Toin das coca',
      produtoId: 'exemplo-pid-2',
      compradorId: 'exemplo-cid-2',
    });

    const count = await vendasRepositorio.countManyProdutos('exemplo-pid-1');

    expect(count).toEqual(2);
  });
});
