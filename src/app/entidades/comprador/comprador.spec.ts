import { Comprador } from './comprador';

describe('Comprador', () => {
  test('deve ser possivel cadastrar um Comprador', () => {
    const comprador = new Comprador({
      nome: 'Claudio',
      telefone: 8612345678,
    });

    expect(comprador).toBeTruthy();
  });
});
