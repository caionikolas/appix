import { EmMemoriaProdutosRepositorio } from '@test/repositorios/em-memoria-produto-repositorio';
import { makeProduto } from '@test/factories/produto-factory';
import { ObterProdutos } from './obter-produtos-vendedor';

describe('Obter produtos de um vendedor especifico', () => {
  test('Deve ser possivel obter produtos de um vendedor especifico', async () => {
    const produtosRepositorio = new EmMemoriaProdutosRepositorio();
    const obterProdutos = new ObterProdutos(produtosRepositorio);

    await produtosRepositorio.create(
      makeProduto({ vendedorId: 'exemplo-id-1' }),
    );

    await produtosRepositorio.create(
      makeProduto({ vendedorId: 'exemplo-id-1' }),
    );

    await produtosRepositorio.create(
      makeProduto({ vendedorId: 'exemplo-id-2' }),
    );

    const { produtos } = await obterProdutos.execute({
      vendedorId: 'exemplo-id-1',
    });

    expect(produtos).toHaveLength(2);
    expect(produtos).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ vendedorId: 'exemplo-id-1' }),
        expect.objectContaining({ vendedorId: 'exemplo-id-1' }),
      ]),
    );
  });
});
