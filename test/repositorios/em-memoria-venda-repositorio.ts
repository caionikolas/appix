import { Venda } from '@app/entidades/venda/venda';
import { VendasRepositorios } from '@app/repositorios/vendas.repositorio';

export class EmMemoriaVendasRepositorio implements VendasRepositorios {
  vendas: Venda[] = [];

  async findById(produtoId: string): Promise<Venda | null> {
    const venda = this.vendas.find((item) => item.id === produtoId);

    if (!venda) {
      return null;
    }

    return venda;
  }

  async countManyCompradores(compradorId: string): Promise<number> {
    const count = this.vendas.map(
      (item) => item.compradorId == compradorId,
    ).length;

    return count;
  }

  async countManyProdutos(produtoId: string): Promise<number> {
    const count = this.vendas.map((item) => item.produtoId == produtoId).length;

    return count;
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
