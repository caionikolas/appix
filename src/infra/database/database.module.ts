import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { VendedoresRepositorios } from 'src/app/repositorios/vendedores-repositorio';
import { PrismaVendedoresRepositorio } from './prisma/repositorios/prisma-vendedor-repositorio';

@Module({
  providers: [
    PrismaService,
    {
      provide: VendedoresRepositorios,
      useClass: PrismaVendedoresRepositorio,
    },
  ],
  exports: [VendedoresRepositorios],
})
export class DatabaseModule {}
