import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { VendedorModule } from './app/entidades/vendedor/vendedor.module';

@Module({
  imports: [VendedorModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
