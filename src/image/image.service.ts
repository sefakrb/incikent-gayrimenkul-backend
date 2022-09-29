import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';

@Injectable()
export class ImageService {
  constructor(private prisma: PrismaService) { }

  async create(image: Express.Multer.File) {
    console.log(image);
    const getImage = await this.prisma.image.findFirst({
      where: {
        imageId: image.filename
      }
    })
    if (getImage) {
      throw new HttpException('Image already exists', 409);
    }

    const newImage = await this.prisma.image.create({
      data: {
        imageId: image.filename.split('.')[0],
        path: image.path,
        title: image.originalname,
      },
    });
    return {
      data: newImage,
      message: 'Image has been created successfully',
      status: 201,
    };
  }

  findAll() {
    return `This action returns all image`;
  }

  findOne(id: number) {
    return `This action returns a #${id} image`;
  }

  update(id: number, updateImageDto: UpdateImageDto) {
    return `This action updates a #${id} image`;
  }

  remove(id: number) {
    return `This action removes a #${id} image`;
  }
}
