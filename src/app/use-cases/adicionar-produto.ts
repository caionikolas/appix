import { Produto } from '../entidades/produto/produto';
import { ProdutosRepositorios } from '../repositorios/produtos-repositorio';

interface AdicionarProdutoRequest {
  nome: string;
  observacao: string;
  preco: number;
}

interface AdicionarProdutoResponse {
  produto: Produto;
}

export class AdicionarProduto {
  constructor(private produtosRepositorios: ProdutosRepositorios) {}

  async execute(
    request: AdicionarProdutoRequest,
  ): Promise<AdicionarProdutoResponse> {
    const { nome, observacao, preco } = request;

    const produto = new Produto({
      nome,
      observacao,
      preco,
    });

    await this.produtosRepositorios.create(produto);

    return {
      produto,
    };
  }
}
