import { EmMemoriaVendedoresRepositorio } from '../../../test/repositorios/em-memoria-vendedor-repositorio';
import { AdicionarVendedor } from './adicionar-vendedor';

describe('Adicionar vendedor', () => {
  test('Deve ser possivel adicionar um Vendedor', async () => {
    const vendedoresRepositorio = new EmMemoriaVendedoresRepositorio();
    const adicionarVendedor = new AdicionarVendedor(vendedoresRepositorio);

    const { vendedor } = await adicionarVendedor.execute({
      nome: 'Eduardo',
      descricao: 'Vendedor de roupas',
      delivery: false,
      retirada: true,
    });

    expect(
      vendedoresRepositorio.vendedores[
        vendedoresRepositorio.vendedores.length - 1
      ],
    ).toEqual(vendedor);
  });
});
