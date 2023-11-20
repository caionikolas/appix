import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';
import { ProdutosRepositorios } from '@app/repositorios/produtos-repositorio';
import { Produto } from '@app/entidades/produto/produto';

@Injectable()
export class PrismaProdutosRepositorio implements ProdutosRepositorios {
  constructor(private prismaService: PrismaService) {}
  async findById(produtoId: string): Promise<Produto> {
    throw new Error('Method not implemented.');
  }

  async countManyProdutos(vendedorId: string): Promise<number> {
    throw new Error('Method not implemented.');
  }

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

  async delete(produto: Produto): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
