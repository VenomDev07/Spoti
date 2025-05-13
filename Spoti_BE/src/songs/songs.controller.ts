import { Body, Controller, Delete, Get, Patch, Post, Put, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AnyFilesInterceptor, FileFieldsInterceptor } from '@nestjs/platform-express';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
    constructor(private songService: SongsService) {}

    @Post('/addSong')
    @UseInterceptors(FileFieldsInterceptor([{name : 'image', maxCount : 1},{name : 'audio', maxCount : 1}]))
    async CreatSong(@Body() data:any, @UploadedFiles() files: {image ?: Express.Multer.File[]; audio ?: Express.Multer.File[];}) {
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

    @Delete('/discardSong')
    async discardSing(@Body() data: string){
        return data
    }

    @Post('/songTesting')
    async songTesting(@Body() data:any){
        return data
    }

    @Put('/songtestingPut')
    async songtestingPut(@Body() data:any){
        return {data : data.data}
    }

    @Patch('/songtestingPatch')
    async songtestingPatch(@Body() data:any){
        return {data : data.data}
    }

}
