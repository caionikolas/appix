import { Vendedor } from '../entidades/vendedor/vendedor';

export abstract class VendedoresRepositorios {
  abstract create(vendedor: Vendedor): Promise<void>;
  abstract findById(vendedorId: string): Promise<Vendedor | null>;
  abstract delete(vendedor: Vendedor): Promise<void>;
}
