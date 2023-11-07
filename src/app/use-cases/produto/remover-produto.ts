import { Injectable } from '@nestjs/common';
import { ProdutoNotFound } from '../erros/produto-not-found';
import { ProdutosRepositorios } from '@app/repositorios/produtos-repositorio';

interface RemoverProdutoRequest {
  produtoId: string;
}

type RemoverProdutoResponse = void;

@Injectable()
export class RemoverProduto {
  constructor(private produtosRepositorios: ProdutosRepositorios) {}

  async execute(
    request: RemoverProdutoRequest,
  ): Promise<RemoverProdutoResponse> {
    const { produtoId } = request;

    const produto = await this.produtosRepositorios.findById(produtoId);

    if (!produto) {
      throw new ProdutoNotFound();
    }

    await this.produtosRepositorios.delete(produto);
  }
}
