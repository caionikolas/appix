import { EmMemoriaProdutosRepositorio } from '../../../test/repositorios/em-memoria-produto-repositorio';
import { AdicionarProduto } from './adicionar-produto';

describe('Cadastrando um produto', () => {
  test('Deve ser possivel adicionar um produto', async () => {
    const produtosRepositorio = new EmMemoriaProdutosRepositorio();
    const adicionarProduto = new AdicionarProduto(produtosRepositorio);

    const { produto } = await adicionarProduto.execute({
      nome: 'Sabão',
      observacao: 'Lavanda',
      preco: 12.9,
    });

    expect(
      produtosRepositorio.produtos[produtosRepositorio.produtos.length - 1],
    ).toEqual(produto);
  });
});
