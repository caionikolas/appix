import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';
import { CompradoresRepositorios } from '@app/repositorios/compradores-repositorio';
import { Comprador } from '@app/entidades/comprador/comprador';
import { PrismaCompradorMapper } from '../mappers/prisma-comprador-mapper';

@Injectable()
export class PrismaCompradoresRepositorio implements CompradoresRepositorios {
  constructor(private prisma: PrismaService) {}
  async findById(compradorId: string): Promise<Comprador> {
    const comprador = await this.prisma.comprador.findUnique({
      where: {
        id: compradorId,
      },
    });

    if (!comprador) {
      return null;
    }

    return PrismaCompradorMapper.toDomain(comprador);
  }

  async create(comprador: Comprador): Promise<void> {
    const raw = PrismaCompradorMapper.toPrisma(comprador);

    await this.prisma.comprador.create({
      data: raw,
    });
  }

  async delete(comprador: Comprador): Promise<void> {
    const raw = PrismaCompradorMapper.toPrisma(comprador);

    await this.prisma.comprador.delete({
      where: {
        id: raw.id,
      },
    });
  }
}
