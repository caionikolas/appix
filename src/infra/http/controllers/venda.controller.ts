import { Body, Controller, Post, Get, Delete } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { AdicionarVenda } from 'src/app/use-cases/adicionar-venda';
import { CriarVenda } from '../dtos/criar-venda-body';

@Controller('vendas')
export class VendaController {
  constructor(
    private adicionarVenda: AdicionarVenda,
    private readonly prismaService: PrismaService,
  ) {}

  @Get()
  list() {
    return this.prismaService.venda.findMany();
  }

  @Post()
  async create(@Body() body: CriarVenda) {
    const {
      quantidade,
      delivery,
      retirada,
      localEntrega,
      produtoId,
      compradorId,
    } = body;

    const { venda } = await this.adicionarVenda.execute({
      quantidade,
      delivery,
      retirada,
      localEntrega,
      produtoId,
      compradorId,
    });

    return { venda };
  }

  @Delete('deletar')
  async delete() {
    await this.prismaService.venda.deleteMany();

    return 'Vendas deletadas';
  }
}
