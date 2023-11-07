import { EmMemoriaProdutosRepositorio } from '@test/repositorios/em-memoria-produto-repositorio';
import { RemoverProduto } from './remover-produto';
import { Produto } from '@app/entidades/produto/produto';

describe('Remover produto', () => {
  test('Deve ser possivel remover um produto', async () => {
    const produtosRepositorio = new EmMemoriaProdutosRepositorio();
    const removerProduto = new RemoverProduto(produtosRepositorio);

    const produto = new Produto({
      nome: 'Sabão',
      observacao: 'Lavanda',
      preco: 12.9,
      vendedorId: 'eabbc8b8-3bce-44cc-94dd-d6c6636161cf',
    });

    await produtosRepositorio.create(produto);

    await removerProduto.execute({
      produtoId: produto.id,
    });

    await produtosRepositorio.delete(produto);

    expect(produtosRepositorio.produtos.length).toEqual(0);
  });
});
