import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  const PORT = process.env.PORT || 5000;

  const config = new DocumentBuilder()
    .setTitle("Zam zam suvlari hisoboti backend qismi.")
    .setDescription("Hisobotni ko`rish, va online bazani shakillantirish")
    .setVersion('1.0.0')
    .build()

  const document = SwaggerModule.createDocument(app,config)
  SwaggerModule.setup('api/docs', app, document)


  await app.listen(PORT, ()=> console.log(`Server Started on Port ${PORT}`));
}
bootstrap();
