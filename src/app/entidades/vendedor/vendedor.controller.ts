import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { CriarVendedor } from './criar-vendedor-body';
import { PrismaService } from 'src/infra/prisma.service';

@Controller('vendedor')
export class VendedorController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.vendedor.findMany();
  }

  @Post()
  async create(@Body() body: CriarVendedor) {
    const { nome, descricao, delivery, retirada } = body;

    await this.prisma.vendedor.create({
      data: {
        id: randomUUID(),
        nome,
        descricao,
        delivery,
        retirada,
      },
    });
  }
}