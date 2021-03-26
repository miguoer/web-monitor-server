import { UserModel } from '../models/User';

export interface IHome {
  getUser(id: number): UserModel.User;
}
