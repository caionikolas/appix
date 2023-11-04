import { Module } from '@nestjs/common';
import { VendedorController } from './controllers/vendedor.controller';
import { DatabaseModule } from '../database/database.module';
import { AdicionarVendedor } from 'src/app/use-cases/adicionar-vendedor';
import { ProdutoController } from './controllers/produto.controller';
import { AdicionarProduto } from 'src/app/use-cases/adicionar-produto';

@Module({
  imports: [DatabaseModule],
  controllers: [VendedorController, ProdutoController],
  providers: [AdicionarVendedor, AdicionarProduto],
  exports: [AdicionarVendedor, AdicionarProduto],
})
export class HttpModule {}
