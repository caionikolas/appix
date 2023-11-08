import { Produto } from '@app/entidades/produto/produto';
import { ProdutosRepositorios } from '@app/repositorios/produtos-repositorio';

export class EmMemoriaProdutosRepositorio implements ProdutosRepositorios {
  public produtos: Produto[] = [];

  async findById(produtoId: string): Promise<Produto> {
    const produto = this.produtos.find((item) => item.id === produtoId);

    if (!produto) {
      return null;
    }

    return produto;
  }

  async countManyProdutos(vendedorId: string): Promise<number> {
    const count = this.produtos.filter(
      (item) => item.vendedorId === vendedorId,
    ).length;

    return count;
  }

  async create(produto: Produto) {
    this.produtos.push(produto);
  }

  async delete(produto: Produto): Promise<void> {
    const produtoIndex = this.produtos.indexOf(produto);

    if (produtoIndex == undefined) {
      return null;
    }

    this.produtos.splice(produtoIndex, 1);
  }
}
