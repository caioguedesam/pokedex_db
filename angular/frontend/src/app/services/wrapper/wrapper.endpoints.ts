import { environment } from './../../../environments/environment';

export class WrapperEndpoints {

  public static db(): string {
    return `${environment.url}`;
  }

}
