export default class Sender {
  public readonly _id: any;

  public name: string;

  public email: string;

  public createdAt?: Date;

  public updatedAt?: Date;

  constructor(props: Omit<Sender, '_id'>) {
    Object.assign(this, props);
  }
}
