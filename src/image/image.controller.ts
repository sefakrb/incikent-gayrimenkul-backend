import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, UploadedFiles, ParseFilePipe, FileTypeValidator } from '@nestjs/common';
import { ImageService } from './image.service';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { Express } from 'express'
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import multer, { diskStorage } from 'multer';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}
  
  @Post()
  @UseInterceptors(FileInterceptor('image',
  { dest: 'uploads/',
    storage: diskStorage({
      destination: function (req, file, cb) {
        cb(null, './uploads')
      },
      filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + '.' + file.mimetype.split('/')[1])
      }
    })
  }  
  ))
  create(@UploadedFile(
    new ParseFilePipe({
      validators: [
        new FileTypeValidator({
           fileType:  "jpeg|jpg"
          }),
      ],
    }),
  ) image:  Express.Multer.File) {
    return this.imageService.create(image);
  }

  @Get()
  findAll() {
    return this.imageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImageDto: UpdateImageDto) {
    return this.imageService.update(+id, updateImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imageService.remove(+id);
  }
}
