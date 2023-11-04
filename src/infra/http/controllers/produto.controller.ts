import { Body, Controller, Post, Get } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { AdicionarProduto } from 'src/app/use-cases/adicionar-produto';
import { CriarProduto } from '../dtos/criar-produto-body';

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

    const { produto } = await this.adicionarProduto.execute({
      nome,
      observacao,
      preco,
      vendedorId,
    });

    return { produto };
  }
}
