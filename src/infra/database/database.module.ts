import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { VendedoresRepositorios } from 'src/app/repositorios/vendedores-repositorio';
import { PrismaVendedoresRepositorio } from './prisma/repositorios/prisma-vendedor-repositorio';
import { ProdutosRepositorios } from 'src/app/repositorios/produtos-repositorio';
import { PrismaProdutosRepositorio } from './prisma/repositorios/prisma-produto-repositorio';
import { CompradoresRepositorios } from 'src/app/repositorios/compradores-repositorio';
import { PrismaCompradoresRepositorio } from './prisma/repositorios/prisma-comprador-repositorio';
import { VendasRepositorios } from 'src/app/repositorios/vendas.repositorio';
import { PrismaVendasRepositorio } from './prisma/repositorios/prisma-venda-repositorio';

@Module({
  providers: [
    PrismaService,
    {
      provide: VendedoresRepositorios,
      useClass: PrismaVendedoresRepositorio,
    },
    {
      provide: ProdutosRepositorios,
      useClass: PrismaProdutosRepositorio,
    },
    {
      provide: CompradoresRepositorios,
      useClass: PrismaCompradoresRepositorio,
    },
    {
      provide: VendasRepositorios,
      useClass: PrismaVendasRepositorio,
    },
  ],
  exports: [
    VendedoresRepositorios,
    PrismaService,
    ProdutosRepositorios,
    CompradoresRepositorios,
    VendasRepositorios,
  ],
})
export class DatabaseModule {}
