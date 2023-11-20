import { EmMemoriaCompradoresRepositorio } from '@test/repositorios/em-memoria-comprador-repositorio';
import { RemoverComprador } from './remover-comprador';
import { Comprador } from '@app/entidades/comprador/comprador';
import { CompradorNotFound } from '@infra/http/errors/comprador-not-found';

describe('Remover Comprador', () => {
  test('Deve ser possivel remover um comprador', async () => {
    const compradoresRepositorios = new EmMemoriaCompradoresRepositorio();
    const removerComprador = new RemoverComprador(compradoresRepositorios);

    const comprador = new Comprador({
      nome: 'Claudio',
      telefone: 8612345678,
    });

    await compradoresRepositorios.create(comprador);

    await removerComprador.execute({
      compradorId: comprador.id,
    });

    await compradoresRepositorios.delete(comprador);

    expect(compradoresRepositorios.compradores.length).toEqual(0);
  });

  test('Não deve ser possivel remover um comprador que não existe', async () => {
    const compradoresRepositorios = new EmMemoriaCompradoresRepositorio();
    const removerComprador = new RemoverComprador(compradoresRepositorios);

    expect(() => {
      return removerComprador.execute({
        compradorId: 'fake-compradorId',
      });
    }).rejects.toThrow(CompradorNotFound);
  });
});
