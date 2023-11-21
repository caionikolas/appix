import { Produto } from '@app/entidades/produto/produto';
import { ProdutosRepositorios } from '@app/repositorios/produtos-repositorio';
import { Injectable } from '@nestjs/common';

interface ObterProdutosRequest {
  vendedorId: string;
}

interface ObterProdutosResponse {
  produtos: Produto[];
}

@Injectable()
export class ObterProdutos {
  constructor(private produtosRepositorios: ProdutosRepositorios) {}

  async execute(request: ObterProdutosRequest): Promise<ObterProdutosResponse> {
    const { vendedorId } = request;

    const produtos =
      await this.produtosRepositorios.findManyProdutosId(vendedorId);

    return {
      produtos,
    };
  }
}
