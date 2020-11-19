import { NestFactory } from "@nestjs/core";
import * as bodyParser from "body-parser";

import { ApplicationModule } from "./app.module";
import { ValidationPipe } from "./validation.pipe";

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.use(bodyParser.json());
  app.useGlobalPipes(new ValidationPipe());
    const port = 3000;
  await app.listen(port);
}

bootstrap();
