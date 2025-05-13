import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary'
import { songDto } from 'src/DTO/song.dto';
import { Model } from 'mongoose';
import { Song } from 'src/models/songModel';
import { InjectModel } from '@nestjs/mongoose';
import { error } from 'console';
@Injectable()
export class SongsService {
    
    constructor(@InjectModel(Song.name) private songModel: Model<Song>) {}   

    async CreatSong(data: any, files: {image ?: Express.Multer.File[], audio ?: Express.Multer.File[]}){
        try{
            const name = data.name;
            const desc = data.desc;
            const album = data.album;
            const imageFile = files.image?.[0]; // Get the first file for 'image'
            const audioFile = files.audio?.[0]; // Get the first file for 'audio'

            const audioUpload:any = await new Promise((resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream(
                    { resource_type: 'video' }, // Use 'video' for audio files
                    (error, result) => {
                        if (error) return reject(error);
                        resolve(result);
                    },
                );
                uploadStream.end(audioFile.buffer); // Pass the audio buffer
            });
            const duration = `${Math.floor(audioUpload.duration/60)}:${Math.floor(audioUpload.duration%60)}`
            // Upload image using buffer
            const imageUpload = await new Promise((resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream(
                    { resource_type: 'image' }, // Use 'image' for images
                    (error, result) => {
                        if (error) return reject(error);
                        resolve(result);
                    },
                );
                uploadStream.end(imageFile.buffer); // Pass the image buffer
            });  
            // Extract public URLs
            const audioUrl = (audioUpload as any).secure_url;
            const imageUrl = (imageUpload as any).secure_url;
            const songData : songDto = {
                name : name,
                desc : desc,
                album : album,
                image : imageUrl,
                file : audioUrl,
                duration : duration
            }
            const newSong = new this.songModel(songData);
            const storedSong = await newSong.save()
            return storedSong

        }catch(err){
            console.log(err)
        }
    }

    async getAllSongs(){
        try{
            const allSongs:any[] = await this.songModel.find({});
            return allSongs;
        }catch(err){
            console.log(err)        
        }
    }

    async removeSong(id:string){
        try {
            const removedSong = await this.songModel.findByIdAndDelete(id);
            return removedSong ? {message : 'Song Deleted Successfully'} : {message : 'Song is Not Present'}
             
        } catch (error) {
            console.log(error)        
        }
    }

    async getrandomSongs(){
        try{
            const randomSongs = await this.songModel.aggregate([ // Gets Random and Unique (Not Duplicate) Songs
                                                                    {$sample: {size:10}},
                                                                    { $group: { _id: "$_id", doc: { $first: "$$ROOT" } } },
                                                                    { $limit: 6 } 
                                                                  ])
            
            return randomSongs
        }catch(err){
            console.error(err)
        }
    }
}
