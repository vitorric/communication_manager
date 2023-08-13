import { Schema } from 'mongoose';

import { mongoDB } from '../connection';

const SenderSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'Sender',
    timestamps: true,
  },
);

export default mongoDB.model('Sender', SenderSchema);
