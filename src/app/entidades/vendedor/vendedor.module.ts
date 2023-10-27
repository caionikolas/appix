import { Module } from '@nestjs/common';
import { VendedorController } from './vendedor.controller';
import { PrismaService } from 'src/infra/prisma.service';

@Module({
  imports: [],
  controllers: [VendedorController],
  providers: [PrismaService],
})
export class VendedorModule {}
