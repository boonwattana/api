import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import { json } from "body-parser";
 
import {join} from "path";
import {NestExpressApplication} from "@nestjs/platform-express";
import {ValidationPipe} from "@nestjs/common";
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // const puppeteer = require('puppeteer');
  // const browser = await puppeteer.launch();
  app.use(json({ limit: "10mb" }));
  const version = 'v1';
  const globalPrefix = `/api`;
  app.setGlobalPrefix(globalPrefix);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  app.useStaticAssets(join(__dirname, '..', 'public'), {prefix: '/public'});
  const options = new DocumentBuilder()
    .setTitle('BOONWATTANA API')
    .setDescription('boonwattana')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(`${globalPrefix}/docs`, app, document);

  app.enableCors();
  const port = process.env.PORT || '3000';
  const server = await app.listen(port);
  server.setTimeout(1800000000); // 30 min
  console.log(
    `Application is running on: ${await app.getUrl()}${globalPrefix}`
  );
  console.log(`docs ${await app.getUrl()}${globalPrefix}/docs/`);
}

bootstrap();
