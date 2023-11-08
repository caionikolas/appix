import { ProdutosRepositorios } from '@app/repositorios/produtos-repositorio';
import { Injectable } from '@nestjs/common';

interface ContagemProdutosRequest {
  vendedorId: string;
}

interface ContagemProdutosResponse {
  contador: number;
}

@Injectable()
export class ContagemProdutos {
  constructor(private produtosRepositorios: ProdutosRepositorios) {}

  async execute(
    request: ContagemProdutosRequest,
  ): Promise<ContagemProdutosResponse> {
    const { vendedorId } = request;

    const contador = await this.produtosRepositorios.count(vendedorId);

    return {
      contador,
    };
  }
}
