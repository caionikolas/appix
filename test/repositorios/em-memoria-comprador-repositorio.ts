import { Comprador } from '@app/entidades/comprador/comprador';
import { CompradoresRepositorios } from '@app/repositorios/compradores-repositorio';

export class EmMemoriaCompradoresRepositorio
  implements CompradoresRepositorios
{
  public compradores: Comprador[] = [];

  async findById(compradorId: string): Promise<Comprador> {
    const comprador = this.compradores.find((item) => item.id === compradorId);

    if (!comprador) {
      return null;
    }

    return comprador;
  }

  async delete(comprador: Comprador): Promise<void> {
    const compradorIndex = this.compradores.indexOf(comprador);

    if (compradorIndex == undefined) {
      return null;
    }

    this.compradores.splice(compradorIndex, 1);
  }

  async create(comprador: Comprador) {
    this.compradores.push(comprador);
  }
}
