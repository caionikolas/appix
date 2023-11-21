import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';
import { VendasRepositorios } from '@app/repositorios/vendas.repositorio';
import { Venda } from '@app/entidades/venda/venda';

@Injectable()
export class PrismaVendasRepositorio implements VendasRepositorios {
  constructor(private prisma: PrismaService) {}
  async findById(vendaId: string): Promise<Venda> {
    throw new Error('Method not implemented.');
  }

  async findManyComprasId(compradorId: string): Promise<Venda[]> {
    throw new Error('Method not implemented.');
  }
  async findManyVendasId(produtoId: string): Promise<Venda[]> {
    throw new Error('Method not implemented.');
  }

  async countManyCompradores(compradorId: string): Promise<number> {
    throw new Error('Method not implemented.');
  }

  async countManyProdutos(produtoId: string): Promise<number> {
    throw new Error('Method not implemented.');
  }

  async create(venda: Venda): Promise<void> {
    await this.prisma.venda.create({
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
