import { EmMemoriaCompradoresRepositorio } from '../../../test/repositorios/em-memoria-comprador-repositorio';
import { AdicionarComprador } from './adicionar-comprador';

describe('Adicionar Comprador', () => {
  test('Deve ser possivel Adicionar um comprador', async () => {
    const compradoresRepositorios = new EmMemoriaCompradoresRepositorio();
    const adicionarComprador = new AdicionarComprador(compradoresRepositorios);

    const { comprador } = await adicionarComprador.execute({
      nome: 'Claudio',
      telefone: 8612345678,
    });

    expect(
      compradoresRepositorios.compradores[
        compradoresRepositorios.compradores.length - 1
      ],
    ).toEqual(comprador);
  });
});
