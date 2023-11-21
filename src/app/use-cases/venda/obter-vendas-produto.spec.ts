import { EmMemoriaVendasRepositorio } from '@test/repositorios/em-memoria-venda-repositorio';
import { makeVenda } from '@test/factories/venda-factory';
import { ObterVendasProduto } from './obter-vendas-produto';

describe('Obter vendas de um produto especifico', () => {
  test('Deve ser possivel obter vendas de um produto especifico', async () => {
    const vendasRepositorio = new EmMemoriaVendasRepositorio();
    const obterVendasProduto = new ObterVendasProduto(vendasRepositorio);

    await vendasRepositorio.create(makeVenda({ produtoId: 'exemplo-pid-1' }));

    await vendasRepositorio.create(makeVenda({ produtoId: 'exemplo-pid-1' }));

    await vendasRepositorio.create(makeVenda({ produtoId: 'exemplo-pid-2' }));

    const { vendas } = await obterVendasProduto.execute({
      produtoId: 'exemplo-pid-1',
    });

    expect(vendas).toHaveLength(2);
    expect(vendas).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ produtoId: 'exemplo-pid-1' }),
        expect.objectContaining({ produtoId: 'exemplo-pid-1' }),
      ]),
    );
  });
});
