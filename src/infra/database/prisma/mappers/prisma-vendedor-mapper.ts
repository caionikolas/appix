import { Vendedor } from '@app/entidades/vendedor/vendedor';

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
}
