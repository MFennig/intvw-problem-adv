import { BaseModel } from 'sjs-base-model';

export default class CartResponseModel extends BaseModel {
  public readonly data: any = null;
  public readonly success: boolean = true;
  public readonly errors: string[] = [];

  constructor(data: Partial<CartResponseModel>) {
    super();

    this.update(data);
  }

  public update(data: Partial<CartResponseModel>): void {
    super.update(data);
  }
}
