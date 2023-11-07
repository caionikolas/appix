import { EmMemoriaVendedoresRepositorio } from '@test/repositorios/em-memoria-vendedor-repositorio';
import { RemoverVendedor } from './remover-vendedor';
import { Vendedor } from '@app/entidades/vendedor/vendedor';
import { Descricao } from '@app/entidades/vendedor/descricao';

describe('Remover vendedor', () => {
  test('Deve ser possivel remover um Vendedor', async () => {
    const vendedoresRepositorio = new EmMemoriaVendedoresRepositorio();
    const removerVendedor = new RemoverVendedor(vendedoresRepositorio);

    const vendedor = new Vendedor({
      nome: 'Eduardo',
      descricao: new Descricao('Vendedor de roupas'),
      delivery: false,
      retirada: true,
    });

    await vendedoresRepositorio.create(vendedor);

    await removerVendedor.execute({
      vendedorId: vendedor.id,
    });

    await vendedoresRepositorio.delete(vendedor);

    expect(vendedoresRepositorio.vendedores.length).toEqual(0);
  });
});
