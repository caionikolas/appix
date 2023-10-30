import { Venda } from '../entidades/venda/venda';

export abstract class VendasRepositorios {
  abstract create(venda: Venda): Promise<void>;
}
