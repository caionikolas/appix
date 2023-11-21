import { Replace } from 'src/helpers/Replace';
import { randomUUID } from 'node:crypto';

interface CompradorProps {
  nome: string;
  telefone: number;
  updateAt?: Date | null;
  createdAt: Date;
}

export class Comprador {
  private _id: string;
  private props: CompradorProps;

  constructor(
    props: Replace<CompradorProps, { createdAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public set nome(nome: string) {
    this.nome = nome;
  }

  public get nome(): string {
    return this.props.nome;
  }

  public set telefone(telefone: number) {
    this.telefone = telefone;
  }

  public get telefone(): number {
    return this.props.telefone;
  }

  public set updateAt(updateAt: Date | null | undefined) {
    this.updateAt = updateAt;
  }

  public get updateAt(): Date | null | undefined {
    return this.props.updateAt;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
