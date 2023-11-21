import { Vendedor } from '@app/entidades/vendedor/vendedor';
import { VendedoresRepositorios } from '@app/repositorios/vendedores-repositorio';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';
import { PrismaVendedorMappper } from '../mappers/prisma-vendedor-mapper';

@Injectable()
export class PrismaVendedoresRepositorio implements VendedoresRepositorios {
  constructor(private prisma: PrismaService) {}
  async findById(vendedorId: string): Promise<Vendedor> {
    throw new Error('Method not implemented.');
  }

  async create(vendedor: Vendedor): Promise<void> {
    const raw = PrismaVendedorMappper.toPrisma(vendedor);

    await this.prisma.vendedor.create({
      data: raw,
    });
  }

  async delete(vendedor: Vendedor): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
