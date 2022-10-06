import {
    IsNotEmpty,
    IsNumber,
    IsString,
  } from 'class-validator';

export class CreateAdvertisementDto {
    @IsNotEmpty()
    @IsString()
    public title: string;

    @IsNotEmpty()
    @IsNumber()
    public price: number;

    @IsNotEmpty()
    @IsString()
    public region: string;

    @IsNotEmpty()
    @IsNumber()
    public meter: number;

    @IsNotEmpty()
    @IsString()
    public room: string;

    @IsNotEmpty()
    @IsString()
    public link: string;

    @IsNotEmpty()
    @IsString()
    public imageId: string;
}
