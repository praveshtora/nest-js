import { Connection } from "typeorm";

import { Customer } from "./customer.entity";

export const CustomerProviders = [
  {
    provide: "AuthorRepositoryToken",
    useFactory: (connection: Connection) => connection.getRepository(Customer),
    inject: ["DbConnectionToken"],
  },
];
