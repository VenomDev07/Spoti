import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Song extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  desc: string;

  @Prop({ required: true })
  album: string;

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  file: string;

  @Prop({ required: true })
  duration: string;
}

export const SongSchema = SchemaFactory.createForClass(Song);