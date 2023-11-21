import { Produto } from '@app/entidades/produto/produto';
import { EmMemoriaProdutosRepositorio } from '@test/repositorios/em-memoria-produto-repositorio';
import { ContagemProdutos } from './contagem-produtos-vendedor';
import { makeProduto } from '@test/factories/produto-factory';

describe('Contagem de produtos de um vendedor especifico', () => {
  test('Deve ser possivel a contagem de produtos de um vendedor especifico', async () => {
    const produtosRepositorio = new EmMemoriaProdutosRepositorio();
    const contagemProdutos = new ContagemProdutos(produtosRepositorio);

    await produtosRepositorio.create(
      makeProduto({ vendedorId: 'exemplo-id-1' }),
    );

    await produtosRepositorio.create(
      makeProduto({ vendedorId: 'exemplo-id-1' }),
    );

    await produtosRepositorio.create(
      makeProduto({ vendedorId: 'exemplo-id-2' }),
    );

    const { contador } = await contagemProdutos.execute({
      vendedorId: 'exemplo-id-1',
    });

    expect(contador).toEqual(2);
  });
});
