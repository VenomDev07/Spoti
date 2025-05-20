import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AlbumsService {
    constructor(private prisma:PrismaService){}

    async createAlbum(data:any, files: {coverImage ?: Express.Multer.File[]}){
        try {

            const artistId = Number(data.artistId);
            const releaseDate = data.releaseDate;
            const imageFile = files.coverImage?.[0];
            const title =data.title 
    
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
    
            const albumData = {
                title : title,
                releaseDate : releaseDate,
                artistId : artistId,
                coverImage : (imageUpload as any).secure_url
            }
    
            const storedAlbum = await this.prisma.album.create({data:albumData})
            return storedAlbum;
        }catch (error) {
            console.log(error)
        }
    }

    async getAllAlbums(){
        try {
            const res = await this.prisma.album.findMany({
                include:{
                    artist:true
                }
            }); 
           return res
        } catch (error) {
            console.log(error)
        }
    }

    async getAlbumById(data:{id:number}){
        try {
            const id = Number(data.id)
            const res = this.prisma.artist.findMany({
                where: {id : id}
            })
            return res
        } catch (error) {
            console.error(error)
        }
    }

    async removeAlbum(id:string){
        try {
         
        } catch (error) {
            
        }
    }
}
