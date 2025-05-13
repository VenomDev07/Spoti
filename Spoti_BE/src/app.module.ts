import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlaylistsController } from './playlists/playlists.controller';
import { PlaylistsService } from './playlists/playlists.service';
import { ConfigModule } from '@nestjs/config';
import { CloudinaryService } from './cloudinary-service/cloudinary-service.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SongsModule } from './songs/songs.module';
import { AlbumsModule } from './albums/albums.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal:true}), ConfigModule.forRoot({ isGlobal: true }),MongooseModule.forRoot("mongodb+srv://venomdev07:DEV07@cluster0.yae4t.mongodb.net/Spotify"), AlbumsModule,SongsModule,],
  controllers: [AppController, PlaylistsController],
  providers: [AppService, PlaylistsService, CloudinaryService, CloudinaryService,],
  exports: [PlaylistsService],
})
export class AppModule {}