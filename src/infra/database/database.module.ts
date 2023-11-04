import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { VendedoresRepositorios } from 'src/app/repositorios/vendedores-repositorio';
import { PrismaVendedoresRepositorio } from './prisma/repositorios/prisma-vendedor-repositorio';
import { ProdutosRepositorios } from 'src/app/repositorios/produtos-repositorio';
import { PrismaProdutosRepositorio } from './prisma/repositorios/prisma-produto-repositorio';

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
  ],
  exports: [VendedoresRepositorios, PrismaService, ProdutosRepositorios],
})
export class DatabaseModule {}
