import { Vendedor } from '../entidades/vendedor/vendedor';

export abstract class VendedoresRepositorios {
  abstract create(vendedor: Vendedor): Promise<void>;
}
