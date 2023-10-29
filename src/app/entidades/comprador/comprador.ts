import { Replace } from 'src/helpers/Replace';

interface CompradorProps {
  nome: string;
  telefone: number;
  updateAt?: Date | null;
  createdAt: Date;
}

export class Comprador {
  private props: CompradorProps;

  constructor(props: Replace<CompradorProps, { createdAt?: Date }>) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public set nome(nome: string) {
    this.nome = nome;
  }

  public get nome(): string {
    return this.nome;
  }

  public set telefone(telefone: number) {
    this.telefone = telefone;
  }

  public get telefone(): number {
    return this.telefone;
  }

  public set updateAt(updateAt: Date | null | undefined) {
    this.updateAt = updateAt;
  }

  public get updateAt(): Date | null | undefined {
    return this.updateAt;
  }

  public get createdAt(): Date {
    return this.createdAt;
  }
}
