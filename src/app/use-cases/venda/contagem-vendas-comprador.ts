import { VendasRepositorios } from '@app/repositorios/vendas.repositorio';
import { Injectable } from '@nestjs/common';

interface ContagemVendasCompradorRequest {
  compradorId: string;
}

interface ContagemVendasCompradorResponse {
  contador: number;
}

@Injectable()
export class ContagemVendasComprador {
  constructor(private vendasRepositorios: VendasRepositorios) {}

  async execute(
    request: ContagemVendasCompradorRequest,
  ): Promise<ContagemVendasCompradorResponse> {
    const { compradorId } = request;

    const contador =
      await this.vendasRepositorios.countManyCompradores(compradorId);

    return {
      contador,
    };
  }
}
