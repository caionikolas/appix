import { VendasRepositorios } from '../repositorios/vendas.repositorio';
import { Injectable } from '@nestjs/common';
import { VendaNaoEncontrada } from './erros/venda-not-found';

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

    await this.vendasRepositorios.save(venda);
  }
}
