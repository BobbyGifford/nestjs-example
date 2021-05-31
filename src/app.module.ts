import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ExamplesModule } from './modules/examples/examples.module';

@Module({
  imports: [
    ExamplesModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: '',
      password: '',
      database: 'postgres',
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
