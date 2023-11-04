import { IsNotEmpty, Length } from 'class-validator';

export class CriarProduto {
  @IsNotEmpty()
  @Length(2, 100)
  nome: string;
  @IsNotEmpty()
  @Length(0, 100)
  observacao: string;
  @IsNotEmpty()
  preco: number;
  @IsNotEmpty()
  vendedorId: string;
}
