import { Module } from '@nestjs/common';
import { VendedorController } from './controllers/vendedor.controller';
import { DatabaseModule } from '../database/database.module';
import { AdicionarVendedor } from '@app/use-cases/vendedor/adicionar-vendedor';
import { ProdutoController } from './controllers/produto.controller';
import { AdicionarProduto } from '@app/use-cases/produto/adicionar-produto';
import { CompradorController } from './controllers/comprador.controller';
import { AdicionarComprador } from '@app/use-cases/comprador/adicionar-comprador';
import { VendaController } from './controllers/venda.controller';
import { AdicionarVenda } from '@app/use-cases/venda/adicionar-venda';

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
