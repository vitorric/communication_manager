import { Types } from 'mongoose';

export const ObjectIdCast = (_id: any): Types.ObjectId => {
  return new Types.ObjectId(_id);
};

export const NewObjectId = (): Types.ObjectId => {
  return new Types.ObjectId();
};

export const ObjectIdIsValid = (objectId: any): boolean => {
  return Types.ObjectId.isValid(objectId);
};
