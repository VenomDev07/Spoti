import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlaylistsController } from './playlists/playlists.controller';
import { PlaylistsService } from './playlists/playlists.service';
import { ConfigModule } from '@nestjs/config';
import { CloudinaryService } from './cloudinary-service/cloudinary-service.service';
import { SongsModule } from './songs/songs.module';
import { AlbumsModule } from './albums/albums.module';
import { PrismaModule } from './prisma/prisma.module';
import { ArtistsController } from './artists/artists.controller';
import { ArtistsModule } from './artists/artists.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal:true}), ConfigModule.forRoot({ isGlobal: true }), AlbumsModule,SongsModule,PrismaModule, ArtistsModule],
  controllers: [AppController, PlaylistsController, ArtistsController],
  providers: [AppService, PlaylistsService, CloudinaryService, CloudinaryService,],
  exports: [PlaylistsService],
})
export class AppModule {}