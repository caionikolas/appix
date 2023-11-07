import { Descricao } from '@app/entidades/vendedor/descricao';
import { Vendedor } from '@app/entidades/vendedor/vendedor';
import { VendedoresRepositorios } from '@app/repositorios/vendedores-repositorio';
import { Injectable } from '@nestjs/common';

interface AdicionarVendedorRequest {
  nome: string;
  descricao: string;
  delivery: boolean;
  retirada: boolean;
}

interface AdicionarVendedorResponse {
  vendedor: Vendedor;
}

@Injectable()
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
