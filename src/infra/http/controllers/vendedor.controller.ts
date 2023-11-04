import { Body, Controller, Post, Get, Delete } from '@nestjs/common';
import { CriarVendedor } from '../dtos/criar-vendedor-body';
import { AdicionarVendedor } from '@app/use-cases/adicionar-vendedor';
import { PrismaService } from '../../database/prisma/prisma.service';
import { VendedorViewModel } from '../view-models/vendedor-view-model';

@Controller('vendedor')
export class VendedorController {
  constructor(
    private adicionarVendedor: AdicionarVendedor,
    private readonly prismaService: PrismaService,
  ) {}

  @Get()
  list() {
    return this.prismaService.vendedor.findMany();
  }

  @Post()
  async create(@Body() body: CriarVendedor) {
    const { nome, descricao, delivery, retirada } = body;

    const { vendedor } = await this.adicionarVendedor.execute({
      nome,
      descricao,
      delivery,
      retirada,
    });

    return {
      vendedor: VendedorViewModel.toHTTP(vendedor),
    };
  }

  @Delete('deletar')
  async delete() {
    await this.prismaService.vendedor.deleteMany();
    await this.prismaService.produto.deleteMany();

    return 'Usuários vendedores deletados';
  }
}
