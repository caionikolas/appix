import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';
import { CompradoresRepositorios } from '@app/repositorios/compradores-repositorio';
import { Comprador } from '@app/entidades/comprador/comprador';

@Injectable()
export class PrismaCompradoresRepositorio implements CompradoresRepositorios {
  constructor(private prismaService: PrismaService) {}

  async create(comprador: Comprador): Promise<void> {
    await this.prismaService.comprador.create({
      data: {
        id: comprador.id,
        nome: comprador.nome,
        telefone: comprador.telefone,
        updateAt: comprador.updateAt,
        createdAt: comprador.createdAt,
      },
    });
  }
}
