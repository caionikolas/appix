interface ProdutoProps {
  nome: string;
  observacao: string;
  preco: number;
  updateAt?: Date | null;
  createdAt: Date;
}

export class Produto {
  private props: ProdutoProps;

  constructor(props: ProdutoProps) {
    this.props = props;
  }

  public set nome(nome: string) {
    this.nome = nome;
  }

  public get nome(): string {
    return this.nome;
  }

  public set observacao(observacao: string) {
    this.observacao = observacao;
  }

  public get observacao(): string {
    return this.observacao;
  }

  public set preco(preco: number) {
    this.preco = preco;
  }

  public get preco(): number {
    return this.preco;
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
