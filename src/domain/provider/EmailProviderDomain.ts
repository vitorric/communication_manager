import { TReturnFn } from '@domain/types';

export namespace EmailProviderDomain {
  export type Send = {
    to: string;
    title: string;
    html: string;
    sender: string;
    files?: Array<{
      path: string;
      name: string;
    }>;
  };
  export type Return = TReturnFn<{
    eventId: any;
  }>;
}
