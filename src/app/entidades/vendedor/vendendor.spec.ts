import { Descricao } from './descricao';
import { Vendedor } from './vendedor';

describe('Vendedor', () => {
  test('deve ser possivel criar um vendedor', () => {
    const vendedor = new Vendedor({
      nome: 'Eduardo',
      descricao: new Descricao('Vendedor de roupas'),
      delivery: false,
      retirada: true,
    });

    expect(vendedor).toBeTruthy();
  });
});
