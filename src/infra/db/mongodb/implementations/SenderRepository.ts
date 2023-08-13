import { ISenderRepository } from '@application/repository/ISenderRepository';
import Sender from '@domain/entities/Sender';

import SenderSchema from '../schemas/SenderSchema';
import { ObjectIdCast } from '../util';

class SenderRepository implements ISenderRepository {
  async create(sender: Sender): Promise<Sender> {
    const newSender = await SenderSchema.create(sender);
    return new Sender(newSender.toObject());
  }

  async findById(senderId: any): Promise<Sender> {
    return SenderSchema.findOne({
      _id: ObjectIdCast(senderId),
    }).exec();
  }
}

export const senderRepository = new SenderRepository();
