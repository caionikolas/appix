import { Produto } from '../entidades/produto/produto';

export abstract class ProdutosRepositorios {
  abstract create(produto: Produto): Promise<void>;
}
