import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter());
  //Giving "0.0.0.0" is important for dockerizing the application
  await app.listen(3000,"0.0.0.0", () => {
    console.log("server started on port 3000");
  });

}
bootstrap();
