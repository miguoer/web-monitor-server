import { UserModel } from '../models/User';

export interface IUser {
  getUser(id: number): UserModel.User;
  register(name: string, password: string): UserModel.User;
}
