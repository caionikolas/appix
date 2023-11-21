import { Produto, ProdutoProps } from '@app/entidades/produto/produto';

type Override = Partial<ProdutoProps>;

export function makeProduto(override: Override = {}) {
  return new Produto({
    nome: 'Sabão',
    observacao: 'Lavanda',
    preco: 12.9,
    vendedorId: 'exemplo-id-1',
    ...override,
  });
}
