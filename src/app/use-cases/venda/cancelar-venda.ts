import { VendasRepositorios } from '@app/repositorios/vendas.repositorio';
import { Injectable } from '@nestjs/common';
import { VendaNaoEncontrada } from '../../../infra/http/errors/venda-not-found';

interface CancelarVendaRequest {
  vendaId: string;
}

type CancelarVendaResponse = void;

@Injectable()
export class CancelarVenda {
  constructor(private vendasRepositorios: VendasRepositorios) {}

  async execute(request: CancelarVendaRequest): Promise<CancelarVendaResponse> {
    const { vendaId } = request;

    const venda = await this.vendasRepositorios.findById(vendaId);

    if (!venda) {
      throw new VendaNaoEncontrada();
    }

    venda.cancel();

    await this.vendasRepositorios.save(venda);
  }
}
