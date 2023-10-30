import { Venda } from 'src/app/entidades/venda/venda';
import { VendasRepositorios } from 'src/app/repositorios/vendas.repositorio';

export class EmMemoriaVendasRepositorio implements VendasRepositorios {
  vendas: Venda[] = [];

  async create(venda: Venda) {
    this.vendas.push(venda);
  }
}
