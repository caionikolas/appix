import { EmMemoriaVendasRepositorio } from '@test/repositorios/em-memoria-venda-repositorio';
import { AdicionarVenda } from './adicionar-venda';

describe('Cadastrando uma venda', () => {
  test('Deve ser possivel adicionar uma venda', async () => {
    const vendasRepositorio = new EmMemoriaVendasRepositorio();
    const adicionarVenda = new AdicionarVenda(vendasRepositorio);

    const { venda } = await adicionarVenda.execute({
      quantidade: 3,
      delivery: false,
      retirada: true,
      localEntrega: 'Rua Toin das coca',
      produtoId: '0e8b0998-65e6-4a4e-a319-0c35bb551c4d',
      compradorId: '3a6d12c5-7f1d-46f6-b6e3-9d8bf06a35d8',
    });

    expect(
      vendasRepositorio.vendas[vendasRepositorio.vendas.length - 1],
    ).toEqual(venda);
  });
});
