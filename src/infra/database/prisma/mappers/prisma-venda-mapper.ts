import { Venda as RawVenda } from '@prisma/client';
import { Venda } from '@app/entidades/venda/venda';

export class PrismaVendaMapper {
  static toPrisma(venda: Venda) {
    return {
      id: venda.id,
      quantidade: venda.quantidade,
      delivery: venda.delivery,
      retirada: venda.retirada,
      localEntrega: venda.localEntrega,
      updateAt: venda.updateAt,
      createdAt: venda.createdAt,
      Produto: {
        connect: {
          id: venda.produtoId,
        },
      },
      Comprador: {
        connect: {
          id: venda.compradorId,
        },
      },
    };
  }

  static toDomain(raw: RawVenda) {
    return new Venda(
      {
        quantidade: raw.quantidade,
        delivery: raw.delivery,
        retirada: raw.retirada,
        localEntrega: raw.localEntrega,
        updateAt: raw.updateAt,
        createdAt: raw.createdAt,
        produtoId: raw.produtoId,
        compradorId: raw.compradorId,
      },
      raw.id,
    );
  }
}
