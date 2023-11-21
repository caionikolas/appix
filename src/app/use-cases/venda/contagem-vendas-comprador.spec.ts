import { EmMemoriaVendasRepositorio } from '@test/repositorios/em-memoria-venda-repositorio';
import { ContagemVendasComprador } from './contagem-vendas-comprador';
import { makeVenda } from '@test/factories/venda-factory';

describe('Contagem de vendas de um comprador especifico', () => {
  test('Deve ser possivel a contagem de vendas de um comprador especifico', async () => {
    const vendasRepositorio = new EmMemoriaVendasRepositorio();
    const contagemVendasComprador = new ContagemVendasComprador(
      vendasRepositorio,
    );

    await vendasRepositorio.create(
      makeVenda({
        compradorId: 'exemplo-cid-1',
      }),
    );

    await vendasRepositorio.create(
      makeVenda({
        compradorId: 'exemplo-cid-1',
      }),
    );

    await vendasRepositorio.create(
      makeVenda({
        compradorId: 'exemplo-cid-2',
      }),
    );

    const { contador } = await contagemVendasComprador.execute({
      compradorId: 'exemplo-cid-1',
    });

    expect(contador).toEqual(2);
  });
});
