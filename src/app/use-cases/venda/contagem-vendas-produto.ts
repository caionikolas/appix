import { VendasRepositorios } from '@app/repositorios/vendas.repositorio';
import { Injectable } from '@nestjs/common';

interface ContagemVendasProdutoRequest {
  produtoId: string;
}

interface ContagemVendasProdutoResponse {
  contador: number;
}

@Injectable()
export class ContagemVendasProduto {
  constructor(private vendasRepositorios: VendasRepositorios) {}

  async execute(
    request: ContagemVendasProdutoRequest,
  ): Promise<ContagemVendasProdutoResponse> {
    const { produtoId } = request;

    const contador = await this.vendasRepositorios.countManyProdutos(produtoId);

    return {
      contador,
    };
  }
}
