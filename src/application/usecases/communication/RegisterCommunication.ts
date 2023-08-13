import { ISenderRepository } from '@application/repository/ISenderRepository';
import {
  ResponseController,
  notFound,
  ok,
} from '@core/controller/ResponseController';
import { CommunicationDomain } from '@domain/usecases/CommunicationDomain';

export class RegisterCommunication {
  constructor(private readonly senderRepository: ISenderRepository) {}

  async execute(
    data: CommunicationDomain.Register,
  ): Promise<ResponseController> {
    const sender = await this.senderRepository.findById(data.senderId);

    if (!sender?._id) {
      return notFound('Sender not found.');
    }
    console.log(data);
    return ok();
  }
}
