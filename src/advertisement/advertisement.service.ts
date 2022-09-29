import { Prisma } from '@prisma/client';
import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UpdateAdvertisementDto } from './dto/update-advertisement.dto';
import { CreateAdvertisementDto } from './dto/create-advertisement.dto';

@Injectable()
export class AdvertisementService {
  constructor(private prisma: PrismaService) { }

  async create(getAdvertisementInput: CreateAdvertisementDto) {
    const getAdvertisement = await this.prisma.advertisement.findFirst({
      where: {
        link: getAdvertisementInput.link
      }
    })
    if (getAdvertisement) {
      throw new HttpException('Advertisement already exists', 409);
    }

    const advertisement = await this.prisma.advertisement.create({
      data: {
        title: getAdvertisementInput.title,
        price: getAdvertisementInput.price,
        region: getAdvertisementInput.region,
        meter: getAdvertisementInput.meter,
        room: getAdvertisementInput.room,
        link: getAdvertisementInput.link,
        image: {
          create: {
            imageId: getAdvertisementInput.imageId
          }
        }
      },
    });
    return {
      data: advertisement,
      message: 'Advertisement has been created successfully',
      status: 201,
    };
  }

  findAll() {
    return `This action returns all advertisement`;
  }

  findOne(id: number) {
    return `This action returns a #${id} advertisement`;
  }

  update(id: number, updateAdvertisementDto: UpdateAdvertisementDto) {
    return `This action updates a #${id} advertisement`;
  }

  remove(id: number) {
    return `This action removes a #${id} advertisement`;
  }
}
