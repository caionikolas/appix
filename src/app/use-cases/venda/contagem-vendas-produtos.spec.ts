import { EmMemoriaVendasRepositorio } from '@test/repositorios/em-memoria-venda-repositorio';
import { ContagemVendasProduto } from './contagem-vendas-produto';
import { makeVenda } from '@test/factories/venda-factory';

describe('Contagem de vendas de um produto especifico', () => {
  test('Deve ser possivel a contagem de vendas de um produto especifico', async () => {
    const vendasRepositorio = new EmMemoriaVendasRepositorio();
    const contagemVendasProduto = new ContagemVendasProduto(vendasRepositorio);

    await vendasRepositorio.create(makeVenda({ produtoId: 'exemplo-pid-1' }));

    await vendasRepositorio.create(makeVenda({ produtoId: 'exemplo-pid-1' }));

    await vendasRepositorio.create(makeVenda({ produtoId: 'exemplo-pid-2' }));

    const { contador } = await contagemVendasProduto.execute({
      produtoId: 'exemplo-pid-1',
    });

    expect(contador).toEqual(2);
  });
});
