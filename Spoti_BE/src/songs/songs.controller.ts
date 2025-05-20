import { Body, Controller, Delete, Get, Patch, Post, Put, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AnyFilesInterceptor, FileFieldsInterceptor } from '@nestjs/platform-express';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
    constructor(private songService: SongsService) {}

    @Post('/addSong')
    @UseInterceptors(FileFieldsInterceptor([{name : 'imageUrl', maxCount : 1},{name : 'audioUrl', maxCount : 1},{name : 'videoUrl', maxCount : 1}]))
    async CreatSong(@Body() data:any, @UploadedFiles() files: {imageUrl ?: Express.Multer.File[]; audioUrl ?: Express.Multer.File[]; videoUrl ?: Express.Multer.File[];}) {
        return await this.songService.CreatSong(data, files);
    }

    @Get('/allSongs')
    async getAllSongs(){
        return await this.songService.getAllSongs()
    }

    @Post('/removeSong')
    @UseInterceptors(AnyFilesInterceptor())
    async removeSong(@Body() data:any,){
        return await this.songService.removeSong(data.id);
    }

    @Get('/randomSongs')
    async getrandomSongs(){
        try {
            return await this.songService.getrandomSongs()
        } catch (error) {
            console.error(error);
        }  
    }

    @Post('/getSongByAlbumId')
    async getSongByAlbumId(@Body() data:{id:string}){
        try {
            return this.songService.getSongByAlbumId(Number(data.id))
        } catch (error) {
            
        }
    }


}
