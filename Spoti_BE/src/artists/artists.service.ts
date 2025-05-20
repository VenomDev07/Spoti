import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary'
import { profile } from 'console';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArtistsService {

    constructor(private prisma: PrismaService){}

    async CreateNewArtist(data:any, file: {profileImage ?: Express.Multer.File[]}){
        try{
            const { name, bio} = data;
            const imageFile = file.profileImage?.[0]

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

            const imageUrl = (imageUpload as any).secure_url;

            const artistData = {
                name         : name,
                bio          : bio,
                profileImage : imageUrl, 
            }

            const res = await this.prisma.artist.create({data : artistData})
            return res;
        }catch(err){
            console.error(err);
        }
    }

    async GetAllArtists(){
        try {
            const res = await this.prisma.artist.findMany()
            return res
        } catch (error) {
            console.error(error)
        }
    }

    async getArtistbyId(data:{id:number}){
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
}
