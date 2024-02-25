import { DbAddAccount } from "./db-add-account";

describe("DbAddAccount UseCase ", () => {
  test("Should call Encrypter with correct password", async () => {
    class EncrypterStub {
      async encrypt(value: string): Promise<string> {
        return new Promise((resolve) => resolve("valid_password"));
      }
    }
 
    const encryperStub = new EncrypterStub();
    const sut = new DbAddAccount(encryperStub);
    const encryptSpy = jest.spyOn(encryperStub, "encrypt");
    const accountData = {
      name: "valid_name",
      email: "valid_email",
      password: "valid_password",
    };

    await sut.add(accountData);
    expect(encryptSpy).toHaveBeenCalledWith("valid_password");
  });
});
