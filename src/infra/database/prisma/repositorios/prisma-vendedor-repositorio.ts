import { Vendedor } from '@app/entidades/vendedor/vendedor';
import { VendedoresRepositorios } from '@app/repositorios/vendedores-repositorio';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';
import { PrismaVendedorMappper } from '../mappers/prisma-vendedor-mapper';

@Injectable()
export class PrismaVendedoresRepositorio implements VendedoresRepositorios {
  constructor(private prismaService: PrismaService) {}

  async create(vendedor: Vendedor): Promise<void> {
    const raw = PrismaVendedorMappper.toPrisma(vendedor);

    await this.prismaService.vendedor.create({
      data: raw,
    });
  }
}
