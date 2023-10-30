import { Produto } from 'src/app/entidades/produto/produto';
import { ProdutosRepositorios } from 'src/app/repositorios/produtos-repositorio';

export class EmMemoriaProdutosRepositorio implements ProdutosRepositorios {
  public produtos: Produto[] = [];

  async create(produto: Produto) {
    this.produtos.push(produto);
  }
}
