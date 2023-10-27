export class Descricao {
  private readonly descricao: string;

  get value(): string {
    return this.descricao;
  }

  private validandoTamanhoDescricao(descricao: string): boolean {
    return descricao.length <= 100;
  }

  constructor(descricao: string) {
    const eTamanhoDescricaoValido = this.validandoTamanhoDescricao(descricao);

    if (!eTamanhoDescricaoValido) {
      throw new Error('Tamanho de Descrição Invalido.');
    }

    this.descricao = descricao;
  }
}
