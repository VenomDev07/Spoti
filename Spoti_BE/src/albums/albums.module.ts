import { Module } from '@nestjs/common';
import { AlbumsController } from './albums.controller';
import { AlbumsService } from './albums.service';

@Module({
    imports : [],
    controllers : [AlbumsController],
    providers : [AlbumsService],
    exports : [AlbumsService]
})
export class AlbumsModule {}
