import { Body, Controller, Post, Get, Delete } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { AdicionarComprador } from 'src/app/use-cases/adicionar-comprador';
import { CriarComprador } from '../dtos/criar-comprador-body';

@Controller('comprador')
export class CompradorController {
  constructor(
    private adicionarComprador: AdicionarComprador,
    private readonly prismaService: PrismaService,
  ) {}

  @Get()
  list() {
    return this.prismaService.comprador.findMany();
  }

  @Post()
  async create(@Body() body: CriarComprador) {
    const { nome, telefone } = body;

    const { comprador } = await this.adicionarComprador.execute({
      nome,
      telefone,
    });

    return { comprador };
  }

  @Delete('deletar')
  async delete() {
    await this.prismaService.comprador.deleteMany();

    return 'Usuários compradores deletados';
  }
}
