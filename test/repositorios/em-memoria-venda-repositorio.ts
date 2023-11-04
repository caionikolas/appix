import { Venda } from '@app/entidades/venda/venda';
import { VendasRepositorios } from '@app/repositorios/vendas.repositorio';

export class EmMemoriaVendasRepositorio implements VendasRepositorios {
  vendas: Venda[] = [];

  async create(venda: Venda) {
    this.vendas.push(venda);
  }
}
