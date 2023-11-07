import { Vendedor } from '@app/entidades/vendedor/vendedor';
import { VendedoresRepositorios } from '@app/repositorios/vendedores-repositorio';

export class EmMemoriaVendedoresRepositorio implements VendedoresRepositorios {
  public vendedores: Vendedor[] = [];

  async findById(vendedorId: string): Promise<Vendedor> {
    const vendedor = this.vendedores.find((item) => item.id === vendedorId);

    if (!vendedor) {
      return null;
    }

    return vendedor;
  }

  async delete(vendedor: Vendedor): Promise<void> {
    const vendedorIndex = this.vendedores.indexOf(vendedor);

    if (vendedorIndex == undefined) {
      return null;
    }

    this.vendedores.splice(vendedorIndex, 1);
  }

  async create(vendedor: Vendedor) {
    this.vendedores.push(vendedor);
  }
}
