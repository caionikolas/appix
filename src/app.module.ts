import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { VendedorModule } from './app/entidades/vendedor/vendedor.module';
import { AppController } from './infra/app.controller';
import { PrismaService } from './infra/prisma.service';

@Module({
  imports: [VendedorModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
