import {
  Body,
  Controller,
  Post,
  Get,
  Delete,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { AdicionarProduto } from '@app/use-cases/produto/adicionar-produto';
import { CriarProduto } from '../dtos/criar-produto-body';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from '@infra/database/prisma/prisma.service';
import { RemoverProduto } from '@app/use-cases/produto/remover-produto';
import { ContagemProdutos } from '@app/use-cases/produto/contagem-produtos-vendedor';
import { ObterProdutos } from '@app/use-cases/produto/obter-produtos-vendedor';
import { Produto } from '@app/entidades/produto/produto';

export const prisma = new PrismaClient();

@Controller('produto')
export class ProdutoController {
  constructor(
    private adicionarProduto: AdicionarProduto,
    private removerProduto: RemoverProduto,
    private contagemProdutosVendedor: ContagemProdutos,
    private obterProdutosVendedor: ObterProdutos,
    private readonly prismaService: PrismaService,
  ) {}

  @Get()
  list() {
    return this.prismaService.produto.findMany();
  }

  @Get('contagem/de/:vendedorId')
  async contagemParaUmVendedor(
    @Param('vendedorId') vendedorId: string,
  ): Promise<{ contador: number }> {
    const { contador } = await this.contagemProdutosVendedor.execute({
      vendedorId,
    });

    return {
      contador,
    };
  }

  @Get('de/:vendedorId')
  async obterTodosUmVendedor(
    @Param('vendedorId') vendedorId: string,
  ): Promise<{ produtos: Produto[] }> {
    const { produtos } = await this.obterProdutosVendedor.execute({
      vendedorId,
    });

    return {
      produtos: produtos.map(),
    };
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

  @Delete(':id/deletar')
  async deletar(@Param('id') id: string) {
    await this.removerProduto.execute({
      produtoId: id,
    });
  }
}
