import { Vendedor } from '@app/entidades/vendedor/vendedor';
import { VendedoresRepositorios } from '@app/repositorios/vendedores-repositorio';

export class EmMemoriaVendedoresRepositorio implements VendedoresRepositorios {
  public vendedores: Vendedor[] = [];

  async create(vendedor: Vendedor) {
    this.vendedores.push(vendedor);
  }
}
