import { randomUUID } from 'crypto';
import { Replace } from 'src/helpers/Replace';

export interface ProdutoProps {
  nome: string;
  observacao: string;
  preco: number;
  updateAt?: Date | null;
  createdAt: Date;
  vendedorId: string;
}

export class Produto {
  private _id: string;
  private props: ProdutoProps;

  constructor(props: Replace<ProdutoProps, { createdAt?: Date }>, id?: string) {
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

  public set observacao(observacao: string) {
    this.observacao = observacao;
  }

  public get observacao(): string {
    return this.props.observacao;
  }

  public set preco(preco: number) {
    this.preco = preco;
  }

  public get preco(): number {
    return this.props.preco;
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

  public get vendedorId(): string {
    return this.props.vendedorId;
  }
}
