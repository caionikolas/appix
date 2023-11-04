import {
  Body,
  Controller,
  Post,
  Get,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AdicionarProduto } from 'src/app/use-cases/adicionar-produto';
import { CriarProduto } from '../dtos/criar-produto-body';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';

export const prisma = new PrismaClient();

@Controller('produto')
export class ProdutoController {
  constructor(
    private adicionarProduto: AdicionarProduto,
    private readonly prismaService: PrismaService,
  ) {}

  @Get()
  list() {
    return this.prismaService.produto.findMany();
  }

  @Post()
  async create(@Body() body: CriarProduto) {
    const { nome, observacao, preco, vendedorId } = body;

    const isVendedorId = await prisma.vendedor.findUnique({
      where: {
        id: vendedorId,
      },
    });

    if (!isVendedorId) {
      throw new HttpException('Vendedor inexistente', HttpStatus.BAD_REQUEST);
    }

    const { produto } = await this.adicionarProduto.execute({
      nome,
      observacao,
      preco,
      vendedorId,
    });

    return { produto };
  }

  @Delete('deletar')
  async delete() {
    await this.prismaService.produto.deleteMany();

    return 'Produtos deletados';
  }
}
