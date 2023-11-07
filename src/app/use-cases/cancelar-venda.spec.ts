import { EmMemoriaVendasRepositorio } from '@test/repositorios/em-memoria-venda-repositorio';
import { CancelarVenda } from './cancelar-venda';
import { Venda } from '@app/entidades/venda/venda';

describe('Cancelando uma venda', () => {
  test('Deve ser possivel cancelar uma venda', async () => {
    const vendasRepositorio = new EmMemoriaVendasRepositorio();
    const cancelarVenda = new CancelarVenda(vendasRepositorio);

    const venda = new Venda({
      quantidade: 3,
      delivery: false,
      retirada: true,
      localEntrega: 'Rua Toin das coca',
      produtoId: '0e8b0998-65e6-4a4e-a319-0c35bb551c4d',
      compradorId: '3a6d12c5-7f1d-46f6-b6e3-9d8bf06a35d8',
    });

    await vendasRepositorio.create(venda);

    await cancelarVenda.execute({
      produtoId: venda.produtoId,
      compradorId: venda.compradorId,
    });

    expect(vendasRepositorio.vendas[0].canceledAt).toEqual(expect.any(Date));
  });
});
