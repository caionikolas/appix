import { Vendedor } from '@app/entidades/vendedor/vendedor';

export class VendedorViewModel {
  static toHTTP(vendedor: Vendedor) {
    return {
      id: vendedor.id,
      nome: vendedor.nome,
      descricao: vendedor.descricao,
      delivery: vendedor.delivery,
      retirada: vendedor.retirada,
    };
  }
}
