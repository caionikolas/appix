import { EmMemoriaVendasRepositorio } from '@test/repositorios/em-memoria-venda-repositorio';
import { makeVenda } from '@test/factories/venda-factory';
import { ObterComprasComprador } from './obter-compras-comprador';

describe('Obter vendas de um comprador especifico', () => {
  test('Deve ser possivel obter vendas de um comprador especifico', async () => {
    const vendasRepositorio = new EmMemoriaVendasRepositorio();
    const obterComprasComprador = new ObterComprasComprador(vendasRepositorio);

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

    const { compras } = await obterComprasComprador.execute({
      compradorId: 'exemplo-cid-1',
    });

    expect(compras).toHaveLength(2);
    expect(compras).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ compradorId: 'exemplo-cid-1' }),
        expect.objectContaining({ compradorId: 'exemplo-cid-1' }),
      ]),
    );
  });
});
