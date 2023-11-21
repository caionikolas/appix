import { Comprador as RawComprador } from '@prisma/client';
import { Comprador } from '@app/entidades/comprador/comprador';

export class PrismaCompradorMapper {
  static toPrisma(comprador: Comprador) {
    return {
      id: comprador.id,
      nome: comprador.nome,
      telefone: comprador.telefone,
      updateAt: comprador.updateAt,
      createdAt: comprador.createdAt,
    };
  }

  static toDomain(raw: RawComprador): Comprador {
    return new Comprador(
      {
        nome: raw.nome,
        telefone: raw.telefone,
        updateAt: raw.updateAt,
        createdAt: raw.createdAt,
      },
      raw.id,
    );
  }
}
