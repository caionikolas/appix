import { Vendedor as RawVendedor } from '@prisma/client';
import { Vendedor } from '@app/entidades/vendedor/vendedor';
import { Descricao } from '@app/entidades/vendedor/descricao';

export class PrismaVendedorMappper {
  static toPrisma(vendedor: Vendedor) {
    return {
      id: vendedor.id,
      nome: vendedor.nome,
      descricao: vendedor.descricao.value,
      delivery: vendedor.delivery,
      retirada: vendedor.retirada,
      updateAt: vendedor.updateAt,
      createdAt: vendedor.createdAt,
    };
  }

  static toDomain(raw: RawVendedor): Vendedor {
    return new Vendedor(
      {
        nome: raw.nome,
        descricao: new Descricao(raw.descricao),
        delivery: raw.delivery,
        retirada: raw.retirada,
        updateAt: raw.updateAt,
        createdAt: raw.createdAt,
      },
      raw.id,
    );
  }
}
