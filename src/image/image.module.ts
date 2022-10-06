import { PrismaService } from './../prisma.service';
import { Module } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';

@Module({
  controllers: [ImageController],
  providers: [ImageService, PrismaService]
})
export class ImageModule {}
