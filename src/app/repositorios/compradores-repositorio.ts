import { Comprador } from '../entidades/comprador/comprador';

export abstract class CompradoresRepositorios {
  abstract create(comprador: Comprador): Promise<void>;
}
