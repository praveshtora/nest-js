import { Module } from "@nestjs/common";

import { CustomerModule } from "./customer/customer.module";

@Module({
  modules: [CustomerModule],
})
export class ApplicationModule {}
