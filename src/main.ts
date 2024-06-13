import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.enableCors({
    origin: 'http://localhost:4200',
  });

  app.useGlobalFilters(new HttpExceptionFilter());


  const config = new DocumentBuilder()
  .setTitle('Median')
  .setDescription('The Median API description')
  .setVersion('0.1')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = configService.get<number>('port');
  await app.listen(port || 3000);
}
bootstrap();
