import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';
import { VendasRepositorios } from '@app/repositorios/vendas.repositorio';
import { Venda } from '@app/entidades/venda/venda';
import { VendaId } from '@app/use-cases/cancelar-venda';

@Injectable()
export class PrismaVendasRepositorio implements VendasRepositorios {
  constructor(private prismaService: PrismaService) {}

  async findById(vendaId: VendaId): Promise<Venda> {
    throw new Error('Method not implemented.');
  }

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

  async save(venda: Venda): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
