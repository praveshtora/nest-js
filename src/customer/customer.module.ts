import { Module } from "@nestjs/common";

import { DBModule } from "../db/db.module";
import { CustomerController } from "./customer.controller";
import { CustomerService } from "./customer.service";
import { CustomerProviders } from "./customer.providers";

@Module({
  modules: [DBModule],
  controllers: [CustomerController],
  components: [...CustomerProviders, CustomerService],
})
export class CustomerModule {}
