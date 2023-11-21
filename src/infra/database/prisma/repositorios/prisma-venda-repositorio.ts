import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';
import { VendasRepositorios } from '@app/repositorios/vendas.repositorio';
import { Venda } from '@app/entidades/venda/venda';
import { PrismaVendaMapper } from '../mappers/prisma-venda-mapper';

@Injectable()
export class PrismaVendasRepositorio implements VendasRepositorios {
  constructor(private prisma: PrismaService) {}
  async findById(vendaId: string): Promise<Venda> {
    const venda = await this.prisma.venda.findUnique({
      where: {
        id: vendaId,
      },
    });

    if (!venda) {
      return null;
    }

    return PrismaVendaMapper.toDomain(venda);
  }

  async findManyComprasId(compradorId: string): Promise<Venda[]> {
    const compras = await this.prisma.venda.findMany({
      where: {
        compradorId,
      },
    });

    return compras.map(PrismaVendaMapper.toDomain);
  }
  async findManyVendasId(produtoId: string): Promise<Venda[]> {
    const vendas = await this.prisma.venda.findMany({
      where: {
        produtoId,
      },
    });

    return vendas.map(PrismaVendaMapper.toDomain);
  }

  async countManyCompradores(compradorId: string): Promise<number> {
    const contadorCompradores = await this.prisma.venda.count({
      where: {
        compradorId,
      },
    });

    return contadorCompradores;
  }

  async countManyProdutos(produtoId: string): Promise<number> {
    const contadorProdutos = await this.prisma.venda.count({
      where: {
        produtoId,
      },
    });

    return contadorProdutos;
  }

  async create(venda: Venda): Promise<void> {
    const raw = PrismaVendaMapper.toPrisma(venda);

    await this.prisma.venda.create({
      data: raw,
    });
  }

  async save(venda: Venda): Promise<void> {
    const raw = PrismaVendaMapper.toPrisma(venda);

    await this.prisma.venda.update({
      where: {
        id: raw.id,
      },
      data: raw,
    });
  }
}
