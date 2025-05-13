import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Album, albumSchema } from 'src/models/albumModel';
import { AlbumsController } from './albums.controller';
import { AlbumsService } from './albums.service';

@Module({
    imports : [MongooseModule.forFeature([{name: Album.name, schema:albumSchema}])],
    controllers : [AlbumsController],
    providers : [AlbumsService],
    exports : [AlbumsService]
})
export class AlbumsModule {}
