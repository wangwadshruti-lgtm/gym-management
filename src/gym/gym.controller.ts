import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { GymService } from './gym.service';
import { CreateGymDto } from './dto/create-gym.dto';
import { UpdateGymDto } from './dto/update-gym.dto';

@ApiTags('Gyms')
@Controller('gyms')
export class GymController {
  constructor(private readonly gymService: GymService) {}

  @Post()
  @ApiOperation({ summary: 'Create Gym' })
  create(@Body() dto: CreateGymDto) {
    return this.gymService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get All Gyms' })
  findAll() {
    return this.gymService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get Gym By ID' })
  findOne(@Param('id') id: string) {
    return this.gymService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update Gym' })
  update(@Param('id') id: string, @Body() dto: UpdateGymDto) {
    return this.gymService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete Gym' })
  remove(@Param('id') id: string) {
    return this.gymService.remove(id);
  }
}
