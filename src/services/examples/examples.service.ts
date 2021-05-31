import { Injectable } from '@nestjs/common';
import { Example } from '../../interfaces/example.interface';
import { InjectModel } from '@nestjs/sequelize';
import { ExampleModel } from '../../models/example.model';

@Injectable()
export class ExamplesService {
  constructor(
    @InjectModel(ExampleModel)
    private exampleModel: typeof ExampleModel,
  ) {}

  getExamples(): Promise<Example[]> {
    return this.exampleModel.findAll();
  }

  findOne(id: number): Promise<Example> {
    return this.exampleModel.findOne({
      where: {
        id,
      },
    });
  }

  create(example: Example) {
    this.exampleModel
      .create(example)
      .then(() => example)
      .catch(error => console.log(error));
    return;
  }
}
