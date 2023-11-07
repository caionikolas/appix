import { Venda } from '../entidades/venda/venda';

export abstract class VendasRepositorios {
  abstract create(venda: Venda): Promise<void>;
  abstract findById(vendaId: string): Promise<Venda | null>;
  abstract save(venda: Venda): Promise<void>;
}
