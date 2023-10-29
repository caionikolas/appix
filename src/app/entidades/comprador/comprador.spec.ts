import { Comprador } from './comprador';

describe('Comprador', () => {
  test('deve ser possivel cadestrar um Comprador', () => {
    const comprador = new Comprador({
      nome: 'Sabão',
      telefone: 8612345678,
    });

    expect(comprador).toBeTruthy();
  });
});
