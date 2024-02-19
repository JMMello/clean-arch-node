import {
  AddAccount,
  AddAccountModel,
} from "../../../domain/use-cases/add-account";
import { AccountModel } from "../../../domain/models";
import { Encrypter } from "../../protocols/encrypter";

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter;

  constructor(encrypter: Encrypter) {
    this.encrypter = encrypter;
  }

  async add(account: AddAccountModel): Promise<AccountModel> {
    return new Promise(resolve => resolve(null))
  }
}