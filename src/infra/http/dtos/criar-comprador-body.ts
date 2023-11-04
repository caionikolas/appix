import { IsNotEmpty, Length } from 'class-validator';

export class CriarComprador {
  @IsNotEmpty()
  @Length(2, 100)
  nome: string;
  @IsNotEmpty()
  telefone: number;
}
