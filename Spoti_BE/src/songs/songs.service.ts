import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary'
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SongsService {
    
    constructor(private prisma: PrismaService) {}   

    async CreatSong(data: any, files: {imageUrl ?: Express.Multer.File[], audioUrl ?: Express.Multer.File[], videoUrl ?: Express.Multer.File[]}){
        try{
            const name = data.title;
            const artistId = Number(data.artistId);
            const albumId = Number(data.albumId);
            const imageFile = files.imageUrl?.[0]; // Get the first file for 'image'
            const audioFile = files.audioUrl?.[0]; // Get the first file for 'audio'
            const video = files.videoUrl?.[0];

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

            let videoUrl: string | null = null;
            if(video){
                const videoUpload:any = await new Promise((resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream(
                        { resource_type: 'video' }, // Use 'video' for audio files
                        (error, result) => {
                            if (error) return reject(error);
                            resolve(result);
                        },
                    );
                    uploadStream.end(video.buffer); // Pass the audio buffer
                });
                videoUrl = (videoUpload as any).secure_url;
            }
            // Extract public URLs
            const audioUrl = (audioUpload as any).secure_url;
            const imageUrl = (imageUpload as any).secure_url;
            const songData = {
                title : name,
                albumId : albumId ? albumId : null,
                artistId : artistId ,
                imageUrl : imageUrl,
                audioUrl : audioUrl,
                duration : duration,
                videoUrl : videoUrl || null
            }
            
            const storedSong = await this.prisma.song.create({data:songData})
            return storedSong

        }catch(err){
            console.log(err)
        }
    }

    async getAllSongs(){
        try{
            const res = await this.prisma.song.findMany({
                    include: {
                    artist: true,
                    album: true
                }
            });
            return res
        }catch(err){
            console.log(err)        
        }
    }

    async removeSong(id:string){
        try {
            /* const removedSong = await this.songModel.findByIdAndDelete(id);
            return removedSong ? {message : 'Song Deleted Successfully'} : {message : 'Song is Not Present'} */
             
        } catch (error) {
            console.log(error)        
        }
    }

    async getrandomSongs(){
        try{
            /* const randomSongs = await this.songModel.aggregate([ // Gets Random and Unique (Not Duplicate) Songs
                                                                    {$sample: {size:10}},
                                                                    { $group: { _id: "$_id", doc: { $first: "$$ROOT" } } },
                                                                    { $limit: 6 } 
                                                                  ])
            
            return randomSongs */
        }catch(err){
            console.error(err)
        }
    }

    async getSongByAlbumId(id:number){
        const res = await this.prisma.song.findMany({
            where: {
                albumId:id
            }
        })
        return res
    }
}
