import { Comprador } from '@app/entidades/comprador/comprador';
import { CompradoresRepositorios } from '@app/repositorios/compradores-repositorio';
import { Injectable } from '@nestjs/common';

interface AdicionarCompradorRequest {
  nome: string;
  telefone: number;
}

interface AdicionarCompradorResponse {
  comprador: Comprador;
}

@Injectable()
export class AdicionarComprador {
  constructor(private compradoresRepositorios: CompradoresRepositorios) {}

  async execute(
    request: AdicionarCompradorRequest,
  ): Promise<AdicionarCompradorResponse> {
    const { nome, telefone } = request;

    const comprador = new Comprador({
      nome,
      telefone,
    });

    await this.compradoresRepositorios.create(comprador);

    return {
      comprador,
    };
  }
}
