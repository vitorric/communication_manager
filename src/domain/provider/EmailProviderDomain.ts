import Sender from '@domain/entities/Sender';
import { TReturnFn } from '@domain/types';

export namespace EmailProviderDomain {
  export type Send = {
    to: string;
    title: string;
    html: string;
    sender: Sender;
    files?: Array<{
      path: string;
      name: string;
    }>;
  };
  export type Return = TReturnFn<{
    eventId: any;
  }>;
}
