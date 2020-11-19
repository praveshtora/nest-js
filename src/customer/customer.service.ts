import { Component, Inject } from "@nestjs/common";
import { Repository } from "typeorm";

import { Customer } from "./customer.interface";

@Component()
export class CustomerService {
  constructor(
    @Inject("AuthorRepositoryToken")
    private readonly customerRepository: Repository<Customer>
  ) {}

  async find(filters): Promise<Customer[]> {
    try {
      console.log("service input", filters);
      let query = "select * from customer ";
      let dataArray = [];
      const isFilterPresent = (filters) =>
        Object.keys(filters).filter((ele) => ele != "limit" && ele != "offset")
          .length;
      if (isFilterPresent(filters)) {
        query += "where";
        for (let filter in filters) {
          if (filter == "limit" || filter == "offset") {
            continue;
          }
          query = `${query} ${filter} = '${filters[filter]}' and`;
        }
        query = query.slice(0, -3);
      }
      query = `${query} limit ${filters["limit"]}  offset ${filters["offset"]}`;
      return await this.customerRepository.query(query);
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
