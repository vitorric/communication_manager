import { ISenderRepository } from '@application/repository/ISenderRepository';
import Sender from '@domain/entities/Sender';

import SenderSchema from '../schemas/SenderSchema';

class SenderRepository implements ISenderRepository {
  async create(sender: Sender): Promise<Sender> {
    const newSender = await SenderSchema.create(sender);
    return new Sender(newSender.toObject());
  }
}

export const senderRepository = new SenderRepository();
