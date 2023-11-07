import { Venda } from '@app/entidades/venda/venda';
import { VendasRepositorios } from '@app/repositorios/vendas.repositorio';
import { VendaId } from '@app/use-cases/cancelar-venda';

export class EmMemoriaVendasRepositorio implements VendasRepositorios {
  vendas: Venda[] = [];

  async findById(vendaId: VendaId): Promise<Venda | null> {
    const venda = this.vendas.find((item) => item.id === vendaId.produtoId);

    if (!venda) {
      return null;
    }

    return venda;
  }

  async create(venda: Venda) {
    this.vendas.push(venda);
  }

  async save(venda: Venda): Promise<void> {
    const vendaIndex = this.vendas.findIndex((item) => item.id === venda.id);

    if (vendaIndex >= 0) {
      this.vendas[vendaIndex] = venda;
    }
  }
}
