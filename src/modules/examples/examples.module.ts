import { Module } from '@nestjs/common';
import { ExamplesController } from '../../controllers/examples/examples.controller';
import { ExamplesService } from '../../services/examples/examples.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ExampleModel } from '../../models/example.model';

@Module({
  imports: [SequelizeModule.forFeature([ExampleModel])],
  controllers: [ExamplesController],
  providers: [ExamplesService],
})
export class ExamplesModule {}
