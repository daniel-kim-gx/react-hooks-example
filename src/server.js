import { createServer, Response } from "miragejs";
import faker from "faker";

const createUser = () => ({
  id: faker.datatype.uuid(),
  userName: faker.internet.userName(),
  email: faker.internet.email(),
  profileUrl: faker.image.avatar(),
});

const createAddress = (id) => ({
  id,
  city: faker.address.city(),
  streetName: faker.address.streetName(),
  country: faker.address.country(),
  timeZone: faker.address.timeZone(),
});

const users = Array.from({ length: 10 }).map(createUser);

const addresses = users.map(({ id }) => createAddress(id));

createServer({
  environment: "development",

  routes() {
    this.get("/api/users", () => users);
    this.get("/api/users/:userName", (schema, request) => {
      const userName = request.params.userName;
      const foundUser = users.find((user) => user.userName === userName);

      if (!foundUser) {
        return new Response(404, {}, { error: "User not found" });
      }

      return foundUser;
    });

    this.get("/api/address/:id", (schema, request) => {
      const id = request.params.id;
      const foundUser = users.find((user) => user.id === id);

      if (!foundUser) {
        return new Response(404, {}, { error: "User not found." });
      }

      return addresses.find((address) => address.id === id);
    });

    this.get("/api/throw-error", () => {
      return new Response(404, {}, { error: "THrow new error." });
    });
  },
});
