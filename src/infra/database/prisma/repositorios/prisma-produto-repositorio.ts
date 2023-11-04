import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';
import { ProdutosRepositorios } from '@app/repositorios/produtos-repositorio';
import { Produto } from '@app/entidades/produto/produto';

@Injectable()
export class PrismaProdutosRepositorio implements ProdutosRepositorios {
  constructor(private prismaService: PrismaService) {}

  async create(produto: Produto): Promise<void> {
    await this.prismaService.produto.create({
      data: {
        id: produto.id,
        nome: produto.nome,
        observacao: produto.observacao,
        preco: produto.preco,
        updateAt: produto.updateAt,
        createdAt: produto.createdAt,
        Vendedor: {
          connect: {
            id: produto.vendedorId,
          },
        },
      },
    });
  }
}
