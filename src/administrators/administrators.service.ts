import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdministratorDto } from './dto/create-administrator.dto';
import { UpdateAdministratorDto } from './dto/update-administrator.dto';
import { Administrator } from './entities/administrator.entity';

@Injectable()
export class AdministratorsService {
  constructor(
    @InjectRepository(Administrator)
    private readonly administratorRepository: Repository<Administrator>,
  ) {}

  create(createAdministratorDto: CreateAdministratorDto) {
    const admin = this.administratorRepository.create(createAdministratorDto);
    return this.administratorRepository.save(admin);
  }

  findAll() {
    return this.administratorRepository.find();
  }

  findOne(id: number) {
    const admin = this.administratorRepository.findOne(id);
    if (!admin) {
      throw new NotFoundException(`Administrator with id ${id} not found`);
    }
    return admin;
  }

  async update(id: number, updateAdministratorDto: UpdateAdministratorDto) {
    const admin = await this.administratorRepository.preload({
      id: id,
      ...updateAdministratorDto,
    });
    if (!admin) {
      throw new NotFoundException(`Administrator with id ${id} not found`);
    }
    return this.administratorRepository.save(admin);
  }

  async remove(id: number) {
    const admin = await this.findOne(id);
    return this.administratorRepository.remove(admin);
  }
}
