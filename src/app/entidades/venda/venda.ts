import { Replace } from 'src/helpers/Replace';
import { randomUUID } from 'crypto';

interface VendaProps {
  quantidade: number;
  delivery: boolean;
  retirada: boolean;
  localEntrega: string;
  updateAt?: Date | null;
  canceledAt?: Date | null;
  createdAt: Date;
  produtoId: string;
  compradorId: string;
}

export class Venda {
  private _id: string;
  private props: VendaProps;

  constructor(props: Replace<VendaProps, { createdAt?: Date }>) {
    this._id = randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public set quantidade(quantidade: number) {
    this.quantidade = quantidade;
  }

  public get quantidade(): number {
    return this.props.quantidade;
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

  public set localEntrega(localEntrega: string) {
    this.localEntrega = localEntrega;
  }

  public get localEntrega(): string {
    return this.props.localEntrega;
  }

  public update() {
    this.props.updateAt = new Date();
  }

  public get updateAt(): Date | null | undefined {
    return this.props.updateAt;
  }

  public get canceledAt(): Date | null | undefined {
    return this.props.canceledAt;
  }

  public cancel() {
    this.props.canceledAt = new Date();
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public get produtoId(): string {
    return this.props.produtoId;
  }

  public get compradorId(): string {
    return this.props.compradorId;
  }
}
