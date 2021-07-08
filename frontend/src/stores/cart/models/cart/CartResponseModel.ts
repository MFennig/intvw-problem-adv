import { BaseModel } from 'sjs-base-model';

/*
    // Returned Api Data Sample
    {
      "data": null,
      "success": true,
      "errors": []
    }
 */
export default class CartResponseModel extends BaseModel {
  public readonly data: any = null;
  public readonly success: boolean = true;
  public readonly errors: string[] = [];

  /*
   * Client-Side properties (Not from API)
   */
  // public noneApiProperties: unknown = null;

  constructor(data: Partial<CartResponseModel>) {
    super();

    this.update(data);
  }

  public update(data: Partial<CartResponseModel>): void {
    super.update(data);
  }
}
