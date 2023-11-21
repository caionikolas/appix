import { Venda } from '@app/entidades/venda/venda';
import { VendasRepositorios } from '@app/repositorios/vendas.repositorio';
import { Injectable } from '@nestjs/common';

interface ObterComprasCompradorRequest {
  compradorId: string;
}

interface ObterComprasCompradorResponse {
  compras: Venda[];
}

@Injectable()
export class ObterComprasComprador {
  constructor(private vendasRepositorios: VendasRepositorios) {}

  async execute(
    request: ObterComprasCompradorRequest,
  ): Promise<ObterComprasCompradorResponse> {
    const { compradorId } = request;

    const compras =
      await this.vendasRepositorios.findManyComprasId(compradorId);

    return {
      compras,
    };
  }
}
