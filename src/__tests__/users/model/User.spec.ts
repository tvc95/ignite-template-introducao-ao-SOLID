import { validate } from "uuid";

import { User } from "../../../modules/users/model/User";

describe("User model", () => {
  it("should be able to create an user with all props", () => {
    const user = new User();

    Object.assign(user, {
      name: "Atlas",
      email: "atlas@fromspace.com",
      created_at: new Date(),
      updated_at: new Date(),
    });

    expect(user).toMatchObject({
      admin: false,
      email: "atlas@fromspace.com",
      name: "Atlas",
    });
    expect(validate(user.id)).toBe(true);
    expect(user.created_at).toBeInstanceOf(Date);
    expect(user.updated_at).toBeInstanceOf(Date);
  });
});
