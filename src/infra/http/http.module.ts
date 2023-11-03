import { Module } from '@nestjs/common';
import { VendedorController } from './controllers/vendedor.controller';
import { DatabaseModule } from '../database/database.module';
import { AdicionarVendedor } from 'src/app/use-cases/adicionar-vendedor';

@Module({
  imports: [DatabaseModule],
  controllers: [VendedorController],
  providers: [AdicionarVendedor],
  exports: [AdicionarVendedor],
})
export class HttpModule {}
