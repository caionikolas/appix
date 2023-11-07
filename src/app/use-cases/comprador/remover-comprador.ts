import { Injectable } from '@nestjs/common';
import { CompradoresRepositorios } from '@app/repositorios/compradores-repositorio';
import { CompradorNotFound } from '../erros/comprador-not-found';

interface RemoverCompradorRequest {
  compradorId: string;
}

type RemoverCompradorResponse = void;

@Injectable()
export class RemoverComprador {
  constructor(private compradoresRepositorios: CompradoresRepositorios) {}

  async execute(
    request: RemoverCompradorRequest,
  ): Promise<RemoverCompradorResponse> {
    const { compradorId } = request;

    const comprador = await this.compradoresRepositorios.findById(compradorId);

    if (!comprador) {
      throw new CompradorNotFound();
    }

    await this.compradoresRepositorios.delete(comprador);
  }
}
