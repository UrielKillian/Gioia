import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { Place } from './entities/place.entity';

@Injectable()
export class PlacesService {
  constructor(
    @InjectRepository(Place)
    private readonly placeRepository: Repository<Place>,
  ) {}

  create(createPlaceDto: CreatePlaceDto) {
    const place = this.placeRepository.create(createPlaceDto);
    return this.placeRepository.save(place);
  }

  findAll() {
    return this.placeRepository.find();
  }

  findOne(id: number) {
    const place = this.placeRepository.findOne(id);
    if (!place) {
      throw new Error(`Place with id ${id} not found`);
    }
    return place;
  }

  async update(id: number, updatePlaceDto: UpdatePlaceDto) {
    const place = await this.placeRepository.preload({
      id: id,
      ...updatePlaceDto,
    });
    if (!place) throw new NotFoundException(`Place with id ${id} not found`);
    return this.placeRepository.save(place);
  }

  async remove(id: number) {
    const place = await this.findOne(id);
    return this.placeRepository.remove(place);
  }
}
