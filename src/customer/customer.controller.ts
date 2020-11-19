import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from "@nestjs/common";
import * as slug from "slug";

import { CustomerService } from "./customer.service";
import { HttpException } from "@nestjs/core";

@Controller("customers")
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  async findAll(@Query() queryParams): Promise<any> {
    const supportedFilters = [
      "state",
      "email",
      "firstName",
      "lastName",
      "petExperience",
      "limit",
      "offset",
    ];
    if (!queryParams["limit"] && !queryParams["offset"]) {
      throw new HttpException("Missing limit/offset in input", 400);
    }
    if (
      queryParams["petExperience"] &&
      queryParams["petExperience"] !== "Y" &&
      queryParams["petExperience"] !== "N"
    ) {
      throw new HttpException("petExperience can be only Y or N", 400);
    }
    for (let filter in queryParams) {
      if (supportedFilters.indexOf(filter) == -1) {
        delete queryParams[filter];
      }
    }
    return await this.customerService.find(queryParams);
  }
}
