import { Body, Controller, Get, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AnyFilesInterceptor, FileFieldsInterceptor } from '@nestjs/platform-express';
import { AlbumsService } from './albums.service';

@Controller('albums')
export class AlbumsController {
    
    constructor(private albumService: AlbumsService){}

    @Post('/createAlbum')
    @UseInterceptors(FileFieldsInterceptor([{name : 'image', maxCount : 1}]))
    async createAlbum(@Body() data:any, @UploadedFiles() files: {image ?: Express.Multer.File[];}){
        return await this.albumService.createAlbum(data,files);
    }

    @Get('/allAlbum')
    async getAllAlbums(){
        return await this.albumService.getAllAlbums();
    }

    @Post('/removeAlbum')
    @UseInterceptors(AnyFilesInterceptor())
    async removeAlbum(@Body() data:any){
        return this.albumService.removeAlbum(data.id);
    }
}
