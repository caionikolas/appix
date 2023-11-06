import { VendaId } from '@app/use-cases/cancelar-venda';
import { Venda } from '../entidades/venda/venda';

export abstract class VendasRepositorios {
  abstract create(venda: Venda): Promise<void>;
  abstract findById(vendaId: VendaId): Promise<Venda | null>;
}
