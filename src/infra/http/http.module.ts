import { Module } from '@nestjs/common';
import { VendedorController } from './controllers/vendedor.controller';
import { DatabaseModule } from '../database/database.module';
import { AdicionarVendedor } from 'src/app/use-cases/adicionar-vendedor';
import { ProdutoController } from './controllers/produto.controller';
import { AdicionarProduto } from 'src/app/use-cases/adicionar-produto';
import { CompradorController } from './controllers/comprador.controller';
import { AdicionarComprador } from 'src/app/use-cases/adicionar-comprador';
import { VendaController } from './controllers/venda.controller';
import { AdicionarVenda } from 'src/app/use-cases/adicionar-venda';

@Module({
  imports: [DatabaseModule],
  controllers: [
    VendedorController,
    ProdutoController,
    CompradorController,
    VendaController,
  ],
  providers: [
    AdicionarVendedor,
    AdicionarProduto,
    AdicionarComprador,
    AdicionarVenda,
  ],
  exports: [
    AdicionarVendedor,
    AdicionarProduto,
    AdicionarComprador,
    AdicionarVenda,
  ],
})
export class HttpModule {}
