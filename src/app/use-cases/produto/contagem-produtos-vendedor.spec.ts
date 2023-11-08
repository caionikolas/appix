import { EmMemoriaProdutosRepositorio } from '@test/repositorios/em-memoria-produto-repositorio';
import { AdicionarProduto } from './adicionar-produto';

describe('Contagem de produtos de um vendedor especifico', () => {
  test('Deve ser possivel a contagem de produtos de um vendedor especifico', async () => {
    const produtosRepositorio = new EmMemoriaProdutosRepositorio();
    const adicionarProduto = new AdicionarProduto(produtosRepositorio);

    await adicionarProduto.execute({
      nome: 'Sabão',
      observacao: 'Lavanda',
      preco: 12.9,
      vendedorId: 'exemplo-id-1',
    });

    await adicionarProduto.execute({
      nome: 'Sabão',
      observacao: 'Lavanda',
      preco: 12.9,
      vendedorId: 'exemplo-id-1',
    });

    await adicionarProduto.execute({
      nome: 'Sabão',
      observacao: 'Lavanda',
      preco: 12.9,
      vendedorId: 'exemplo-id-2',
    });

    const count = await produtosRepositorio.countManyProdutos('exemplo-id-1');

    expect(count).toEqual(2);
  });
});
