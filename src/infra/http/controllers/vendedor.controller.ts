import { Body, Controller, Post, Get } from '@nestjs/common';
import { CriarVendedor } from '../dtos/criar-vendedor-body';
import { AdicionarVendedor } from 'src/app/use-cases/adicionar-vendedor';

@Controller('vendedor')
export class VendedorController {
  constructor(private adicionarVendedor: AdicionarVendedor) {}
  @Get()
  Hello() {
    return 'ola';
  }

  @Post()
  async create(@Body() body: CriarVendedor) {
    const { nome, descricao, delivery, retirada } = body;

    const { vendedor } = await this.adicionarVendedor.execute({
      nome,
      descricao,
      delivery,
      retirada,
    });

    return { vendedor };
  }
}
