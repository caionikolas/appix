import { IsNotEmpty, Length } from 'class-validator';

export class CriarVenda {
  @IsNotEmpty()
  quantidade: number;
  @IsNotEmpty()
  delivery: boolean;
  @IsNotEmpty()
  retirada: boolean;
  @IsNotEmpty()
  @Length(0, 100)
  localEntrega: string;
  @IsNotEmpty()
  produtoId: string;
  @IsNotEmpty()
  compradorId: string;
}
