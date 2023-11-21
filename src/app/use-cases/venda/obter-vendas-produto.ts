import { Venda } from '@app/entidades/venda/venda';
import { VendasRepositorios } from '@app/repositorios/vendas.repositorio';
import { Injectable } from '@nestjs/common';

interface ObterVendasProdutoRequest {
  produtoId: string;
}

interface ObterVendasProdutoResponse {
  vendas: Venda[];
}

@Injectable()
export class ObterVendasProduto {
  constructor(private vendasRepositorios: VendasRepositorios) {}

  async execute(
    request: ObterVendasProdutoRequest,
  ): Promise<ObterVendasProdutoResponse> {
    const { produtoId } = request;

    const vendas = await this.vendasRepositorios.findManyVendasId(produtoId);

    return {
      vendas,
    };
  }
}
