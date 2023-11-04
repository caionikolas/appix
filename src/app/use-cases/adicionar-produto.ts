import { Produto } from '../entidades/produto/produto';
import { ProdutosRepositorios } from '../repositorios/produtos-repositorio';
import { Injectable } from '@nestjs/common';

interface AdicionarProdutoRequest {
  nome: string;
  observacao: string;
  preco: number;
  vendedorId: string;
}

interface AdicionarProdutoResponse {
  produto: Produto;
}

@Injectable()
export class AdicionarProduto {
  constructor(private produtosRepositorios: ProdutosRepositorios) {}

  async execute(
    request: AdicionarProdutoRequest,
  ): Promise<AdicionarProdutoResponse> {
    const { vendedorId, nome, observacao, preco } = request;

    const produto = new Produto({
      nome,
      observacao,
      preco,
      vendedorId,
    });

    await this.produtosRepositorios.create(produto);

    return {
      produto,
    };
  }
}
