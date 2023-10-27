import { Descricao } from './descricao';

export interface VendedorProps {
  nome: string;
  descricao: Descricao;
  delivery: boolean;
  retirada: boolean;
  updateAt?: Date | null;
  createdAt: Date;
}

export class Vendedor {
  private props: VendedorProps;

  constructor(props: VendedorProps) {
    this.props = props;
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
