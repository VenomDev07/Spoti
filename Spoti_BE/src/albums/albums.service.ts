import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { v2 as cloudinary } from 'cloudinary';
import { albumDto } from 'src/DTO/album.dto';
import { Album } from 'src/models/albumModel';

@Injectable()
export class AlbumsService {
    constructor(@InjectModel(Album.name) private albumModel:Model<Album>){}

    async createAlbum(data:any, files: {image ?: Express.Multer.File[]}){
        try {

            const desc = data.desc;
            const bgColor = data.bgColor;
            const imageFile = files.image?.[0];
            const name =data.name 
    
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
    
            const albumData : albumDto = {
                name: name,
                desc,
                bgColor,
                image : (imageUpload as any).secure_url
            }
    
            const newAlbum = new this.albumModel(albumData);
            const storedAlbum = await newAlbum.save();
            return storedAlbum;
        }catch (error) {
            console.log(error)
        }
    }

    async getAllAlbums(){
        try {
            const AlbumsData = this.albumModel.find({})
            return AlbumsData
        } catch (error) {
            console.log(error)
        }

    }

    async removeAlbum(id:string){
        try {
            const removedAlbum = await this.albumModel.findByIdAndDelete(id)
            return removedAlbum ? {message : "Album removed Successfully"} : {message : "Album is Not Present"}
        } catch (error) {
            
        }
    }
}
