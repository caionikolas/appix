import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';
import { ProdutosRepositorios } from '@app/repositorios/produtos-repositorio';
import { Produto } from '@app/entidades/produto/produto';
import { PrismaProdutoMapper } from '../mappers/prisma-produto-mapper';

@Injectable()
export class PrismaProdutosRepositorio implements ProdutosRepositorios {
  constructor(private prisma: PrismaService) {}
  async findById(produtoId: string): Promise<Produto> {
    const produto = await this.prisma.produto.findUnique({
      where: {
        id: produtoId,
      },
    });

    if (!produto) {
      return null;
    }

    return PrismaProdutoMapper.toDomain(produto);
  }

  async findManyProdutosId(vendedorId: string): Promise<Produto[]> {
    const produtos = await this.prisma.produto.findMany({
      where: {
        vendedorId,
      },
    });

    return produtos.map(PrismaProdutoMapper.toDomain);
  }

  async countManyProdutos(vendedorId: string): Promise<number> {
    const contador = await this.prisma.produto.count({
      where: {
        vendedorId,
      },
    });

    return contador;
  }

  async create(produto: Produto): Promise<void> {
    const raw = PrismaProdutoMapper.toPrisma(produto);

    await this.prisma.produto.create({
      data: raw,
    });
  }

  async delete(produto: Produto): Promise<void> {
    const raw = PrismaProdutoMapper.toPrisma(produto);

    await this.prisma.produto.delete({
      where: {
        id: raw.id,
      },
    });
  }
}
