import { Venda, VendaProps } from '@app/entidades/venda/venda';

type Override = Partial<VendaProps>;

export function makeVenda(override: Override = {}) {
  return new Venda({
    quantidade: 3,
    delivery: false,
    retirada: true,
    localEntrega: 'Rua Toin das coca',
    produtoId: 'exemplo-pid-1',
    compradorId: 'exemplo-cid-1',
    ...override,
  });
}
