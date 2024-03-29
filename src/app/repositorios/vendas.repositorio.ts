import { Venda } from '../entidades/venda/venda';

export abstract class VendasRepositorios {
  abstract create(venda: Venda): Promise<void>;
  abstract findById(vendaId: string): Promise<Venda | null>;
  abstract save(venda: Venda): Promise<void>;
  abstract countManyCompradores(compradorId: string): Promise<number>;
  abstract countManyProdutos(produtoId: string): Promise<number>;
  abstract findManyComprasId(compradorId: string): Promise<Venda[]>;
  abstract findManyVendasId(produtoId: string): Promise<Venda[]>;
}
