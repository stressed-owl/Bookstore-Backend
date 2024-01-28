import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const corsOptions: CorsOptions = {
    origin: ['http://localhost:5173'], // Add your frontend URL(s) here
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  };

  app.enableCors(corsOptions);

  await app
    .listen(3002)
    .then(() => console.log('successfully started on port 3002'))
    .catch((e) => console.log('something went wrong!!!!!', e));
}
bootstrap();
