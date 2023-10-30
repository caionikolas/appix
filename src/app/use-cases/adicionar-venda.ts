import { Venda } from '../entidades/venda/venda';
import { VendasRepositorios } from '../repositorios/vendas.repositorio';

interface AdicionarVendaRequest {
  quantidade: number;
  delivery: boolean;
  retirada: boolean;
  localEntrega: string;
}

interface AdicionarVendaResponse {
  venda: Venda;
}

export class AdicionarVenda {
  constructor(private vendasRepositorios: VendasRepositorios) {}

  async execute(
    request: AdicionarVendaRequest,
  ): Promise<AdicionarVendaResponse> {
    const { quantidade, delivery, retirada, localEntrega } = request;

    const venda = new Venda({
      quantidade,
      delivery,
      retirada,
      localEntrega,
    });

    await this.vendasRepositorios.create(venda);

    return {
      venda,
    };
  }
}
