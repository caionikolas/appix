import { IsNotEmpty, Length } from 'class-validator';

export class CriarVendedor {
  @IsNotEmpty()
  @Length(2, 100)
  nome: string;
  @IsNotEmpty()
  @Length(0, 100)
  descricao: string;
  @IsNotEmpty()
  delivery: boolean;
  @IsNotEmpty()
  retirada: boolean;
}
