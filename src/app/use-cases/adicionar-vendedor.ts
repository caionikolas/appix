import { Descricao } from '../entidades/vendedor/descricao';
import { Vendedor } from '../entidades/vendedor/vendedor';
import { VendedoresRepositorios } from '../repositorios/vendedor-repositorio';

interface AdicionarVendedorRequest {
  nome: string;
  descricao: string;
  delivery: boolean;
  retirada: boolean;
}

interface AdicionarVendedorResponse {
  vendedor: Vendedor;
}

export class AdicionarVendedor {
  constructor(private vendedoresRepositorios: VendedoresRepositorios) {}

  async execute(
    request: AdicionarVendedorRequest,
  ): Promise<AdicionarVendedorResponse> {
    const { nome, descricao, delivery, retirada } = request;

    const vendedor = new Vendedor({
      nome,
      descricao: new Descricao(descricao),
      delivery,
      retirada,
    });

    await this.vendedoresRepositorios.create(vendedor);

    return {
      vendedor,
    };
  }
}
