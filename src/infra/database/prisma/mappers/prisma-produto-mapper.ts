import { Produto as RawProduto } from '@prisma/client';
import { Produto } from '@app/entidades/produto/produto';

export class PrismaProdutoMapper {
  static toPrisma(produto: Produto) {
    return {
      id: produto.id,
      nome: produto.nome,
      observacao: produto.observacao,
      preco: produto.preco,
      updateAt: produto.updateAt,
      createdAt: produto.createdAt,
      Vendedor: {
        connect: {
          id: produto.vendedorId,
        },
      },
    };
  }

  static toDomain(raw: RawProduto): Produto {
    return new Produto(
      {
        nome: raw.nome,
        observacao: raw.observacao,
        preco: raw.preco,
        updateAt: raw.updateAt,
        createdAt: raw.createdAt,
        vendedorId: raw.vendedorId,
      },
      raw.id,
    );
  }
}
