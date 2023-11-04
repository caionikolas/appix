import { Venda } from '../entidades/venda/venda';
import { VendasRepositorios } from '../repositorios/vendas.repositorio';
import { Injectable } from '@nestjs/common';

interface AdicionarVendaRequest {
  quantidade: number;
  delivery: boolean;
  retirada: boolean;
  localEntrega: string;
  produtoId: string;
  compradorId: string;
}

interface AdicionarVendaResponse {
  venda: Venda;
}

@Injectable()
export class AdicionarVenda {
  constructor(private vendasRepositorios: VendasRepositorios) {}

  async execute(
    request: AdicionarVendaRequest,
  ): Promise<AdicionarVendaResponse> {
    const {
      quantidade,
      delivery,
      retirada,
      localEntrega,
      produtoId,
      compradorId,
    } = request;

    const venda = new Venda({
      quantidade,
      delivery,
      retirada,
      localEntrega,
      produtoId,
      compradorId,
    });

    await this.vendasRepositorios.create(venda);

    return {
      venda,
    };
  }
}
