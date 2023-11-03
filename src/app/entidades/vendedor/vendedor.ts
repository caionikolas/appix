import { Replace } from 'src/helpers/Replace';
import { Descricao } from './descricao';
import { randomUUID } from 'node:crypto';

export interface VendedorProps {
  nome: string;
  descricao: Descricao;
  delivery: boolean;
  retirada: boolean;
  updateAt?: Date | null;
  createdAt: Date;
}

export class Vendedor {
  private _id: string;
  private props: VendedorProps;

  constructor(props: Replace<VendedorProps, { createdAt?: Date }>) {
    this._id = randomUUID();
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

  public set descricao(descricao: Descricao) {
    this.descricao = descricao;
  }

  public get descricao(): Descricao {
    return this.props.descricao;
  }

  public set delivery(delivery: boolean) {
    this.delivery = delivery;
  }

  public get delivery(): boolean {
    return this.props.delivery;
  }

  public set retirada(retirada: boolean) {
    this.retirada = retirada;
  }

  public get retirada(): boolean {
    return this.props.retirada;
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
