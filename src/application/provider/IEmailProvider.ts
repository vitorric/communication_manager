import { EmailProviderDomain } from '@domain/provider/EmailProviderDomain';

export interface IEmailProvider {
  send(message: EmailProviderDomain.Send): Promise<EmailProviderDomain.Return>;
}
