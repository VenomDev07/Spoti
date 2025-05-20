import { Body, Controller, Get, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { ArtistsService } from './artists.service';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('artists')
export class ArtistsController {

    constructor(private artistService: ArtistsService){}

    /* ALLARTIST */
    @Get('/allArtist')
    async getAllArtist(){
        return await this.artistService.GetAllArtists();
    }

    /* NEWARTIST */
    @Post('newArtist')
    @UseInterceptors(FileFieldsInterceptor([{name:'profileImage'}]))
    async createNewArtist(@Body() data: any, @UploadedFiles() files: {profileImage ?: Express.Multer.File[];}){
        return await this.artistService.CreateNewArtist(data,files); 
    }

    @Post('getArtistbyId')
    async getArtistbyId(@Body() data: any, ){
        return await this.artistService.getArtistbyId(data); 
    }
}
