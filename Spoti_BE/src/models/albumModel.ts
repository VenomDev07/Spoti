import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Album extends Document{
    @Prop({required : true})
    name : string

    @Prop({required : true})
    desc : string

    @Prop({required : true})
    bgColor: string;

    @Prop({required : true})
    image: string;
}

export const albumSchema = SchemaFactory.createForClass(Album)