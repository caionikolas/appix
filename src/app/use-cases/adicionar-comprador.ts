import { Injectable } from '@nestjs/common';
import { Comprador } from '../entidades/comprador/comprador';
import { CompradoresRepositorios } from '../repositorios/compradores-repositorio';

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
