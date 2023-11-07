export class ProdutoNotFound extends Error {
  constructor() {
    super('Produto não encotrado');
  }
}
