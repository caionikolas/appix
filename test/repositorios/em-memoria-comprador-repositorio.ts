import { Comprador } from '@app/entidades/comprador/comprador';
import { CompradoresRepositorios } from '@app/repositorios/compradores-repositorio';

export class EmMemoriaCompradoresRepositorio
  implements CompradoresRepositorios
{
  public compradores: Comprador[] = [];

  async create(comprador: Comprador) {
    this.compradores.push(comprador);
  }
}
