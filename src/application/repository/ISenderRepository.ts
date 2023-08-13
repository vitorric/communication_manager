import Sender from '@domain/entities/Sender';

export interface ISenderRepository {
  create(sender: Sender): Promise<Sender>;
}
