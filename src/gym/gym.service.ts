import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';

import { CreateGymDto } from './dto/create-gym.dto';
import { UpdateGymDto } from './dto/update-gym.dto';
import { Gym } from './schemas/gym.schema';

@Injectable()
export class GymService {
  constructor(@InjectModel(Gym.name) private readonly gymModel: Model<Gym>) {}

  async create(createGymDto: CreateGymDto) {
    const gym = await this.gymModel.create(createGymDto);

    return {
      message: 'Gym added successfully',
      data: gym,
    };
  }

  async findAll() {
    return this.gymModel.find().sort({ createdAt: -1 }).exec();
  }

  async findOne(id: string) {
    this.validateObjectId(id);

    const gym = await this.gymModel.findById(id).exec();

    if (!gym) {
      throw new NotFoundException('Gym not found');
    }

    return gym;
  }

  async update(id: string, updateGymDto: UpdateGymDto) {
    this.validateObjectId(id);

    const gym = await this.gymModel
      .findByIdAndUpdate(id, updateGymDto, {
        new: true,
        runValidators: true,
      })
      .exec();

    if (!gym) {
      throw new NotFoundException('Gym not found');
    }

    return {
      message: 'Gym updated successfully',
      data: gym,
    };
  }

  async remove(id: string) {
    this.validateObjectId(id);

    const gym = await this.gymModel.findByIdAndDelete(id).exec();

    if (!gym) {
      throw new NotFoundException('Gym not found');
    }

    return {
      message: 'Gym deleted successfully',
      data: gym,
    };
  }

  private validateObjectId(id: string) {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid gym id');
    }
  }
}
