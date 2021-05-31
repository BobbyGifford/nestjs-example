import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ExamplesService } from '../../services/examples/examples.service';
import { Example } from '../../interfaces/example.interface';
import { ExampleModel } from '../../models/example.model';

@Controller('examples')
export class ExamplesController {
  constructor(private readonly examplesService: ExamplesService) {}

  @Get()
  async getExamples(): Promise<Example[]> {
    return this.examplesService.getExamples();
  }

  @Get(':id')
  async getExample(@Param('id') id: string): Promise<Example> {
    // return new GenericResponse(`This action returns an id of ${id}`, 200);
    return this.examplesService.findOne(parseInt(id));
  }

  @Post()
  // Parses request body and creates an instance of a ts/js class
  async create(@Body() createExample: ExampleModel) {
    return this.examplesService.create(createExample);
  }
}
