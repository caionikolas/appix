import { Comprador } from '../entidades/comprador/comprador';

export abstract class CompradoresRepositorios {
  abstract create(comprador: Comprador): Promise<void>;
  abstract findById(compradorId: string): Promise<Comprador | null>;
  abstract delete(comprador: Comprador): Promise<void>;
}
