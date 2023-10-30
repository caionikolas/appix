import { Comprador } from '../../src/app/entidades/comprador/comprador';
import { CompradoresRepositorios } from '../../src/app/repositorios/compradores-repositorio';

export class EmMemoriaCompradoresRepositorio
  implements CompradoresRepositorios
{
  public compradores: Comprador[] = [];

  async create(comprador: Comprador) {
    this.compradores.push(comprador);
  }
}
