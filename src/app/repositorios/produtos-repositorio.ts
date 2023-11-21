import { Produto } from '../entidades/produto/produto';

export abstract class ProdutosRepositorios {
  abstract create(produto: Produto): Promise<void>;
  abstract findById(produtoId: string): Promise<Produto | null>;
  abstract delete(produto: Produto): Promise<void>;
  abstract countManyProdutos(vendedorId: string): Promise<number>;
  abstract findManyProdutosId(vendedorId: string): Promise<Produto[]>;
}
