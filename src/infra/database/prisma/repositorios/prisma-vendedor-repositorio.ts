import { Vendedor } from 'src/app/entidades/vendedor/vendedor';
import { VendedoresRepositorios } from 'src/app/repositorios/vendedores-repositorio';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaVendedoresRepositorio implements VendedoresRepositorios {
  constructor(private prismaService: PrismaService) {}

  async create(vendedor: Vendedor): Promise<void> {
    await this.prismaService.vendedor.create({
      data: {
        id: vendedor.id,
        nome: vendedor.nome,
        descricao: vendedor.descricao.value,
        delivery: vendedor.delivery,
        retirada: vendedor.retirada,
        updateAt: vendedor.updateAt,
        createdAt: vendedor.createdAt,
      },
    });
  }
}
