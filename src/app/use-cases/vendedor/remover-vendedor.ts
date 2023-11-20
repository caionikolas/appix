import { VendedoresRepositorios } from '@app/repositorios/vendedores-repositorio';
import { Injectable } from '@nestjs/common';
import { VendedorNotFound } from '../../../infra/http/errors/vendedor-not-found';

interface RemoverVendedorRequest {
  vendedorId: string;
}

type RemoverVendedorResponse = void;

@Injectable()
export class RemoverVendedor {
  constructor(private vendedoresRepositorios: VendedoresRepositorios) {}

  async execute(
    request: RemoverVendedorRequest,
  ): Promise<RemoverVendedorResponse> {
    const { vendedorId } = request;

    const vendedor = await this.vendedoresRepositorios.findById(vendedorId);

    if (!vendedor) {
      throw new VendedorNotFound();
    }

    await this.vendedoresRepositorios.delete(vendedor);
  }
}
