import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';
import { VendasRepositorios } from 'src/app/repositorios/vendas.repositorio';
import { Venda } from 'src/app/entidades/venda/venda';

@Injectable()
export class PrismaVendasRepositorio implements VendasRepositorios {
  constructor(private prismaService: PrismaService) {}

  async create(venda: Venda): Promise<void> {
    await this.prismaService.venda.create({
      data: {
        id: venda.id,
        quantidade: venda.quantidade,
        delivery: venda.delivery,
        retirada: venda.retirada,
        localEntrega: venda.localEntrega,
        updateAt: venda.updateAt,
        createdAt: venda.createdAt,
        Produto: {
          connect: {
            id: venda.produtoId,
          },
        },
        Comprador: {
          connect: {
            id: venda.compradorId,
          },
        },
      },
    });
  }
}
