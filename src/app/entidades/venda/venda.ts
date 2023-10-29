import { Replace } from 'src/helpers/Replace';

interface VendaProps {
  quantidade: number;
  delivery: boolean;
  retirada: boolean;
  localEntrega: string;
  updateAt?: Date | null;
  createdAt: Date;
}

export class Venda {
  private props: VendaProps;

  constructor(props: Replace<VendaProps, { createdAt?: Date }>) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public set quantidade(quantidade: number) {
    this.quantidade = quantidade;
  }

  public get quantidade(): number {
    return this.quantidade;
  }

  public set delivery(delivery: boolean) {
    this.delivery = delivery;
  }

  public get delivery(): boolean {
    return this.delivery;
  }

  public set retirada(retirada: boolean) {
    this.retirada = retirada;
  }

  public get retirada(): boolean {
    return this.retirada;
  }

  public set localEntrega(localEntrega: string) {
    this.localEntrega = localEntrega;
  }

  public get localEntrega(): string {
    return this.localEntrega;
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
