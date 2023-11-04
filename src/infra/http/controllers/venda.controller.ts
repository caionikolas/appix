import {
  Body,
  Controller,
  Post,
  Get,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { AdicionarVenda } from 'src/app/use-cases/adicionar-venda';
import { CriarVenda } from '../dtos/criar-venda-body';
import { prisma } from '../controllers/produto.controller';

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

    const isProdutoId = await prisma.produto.findUnique({
      where: {
        id: produtoId,
      },
    });

    if (!isProdutoId) {
      throw new HttpException('Produto inexistente', HttpStatus.BAD_REQUEST);
    }

    const isCompradorId = await prisma.comprador.findUnique({
      where: {
        id: compradorId,
      },
    });

    if (!isCompradorId) {
      throw new HttpException('Comprador inexistente', HttpStatus.BAD_REQUEST);
    }

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
