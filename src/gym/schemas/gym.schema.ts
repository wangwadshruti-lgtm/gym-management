import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GymDocument = Gym & Document;

@Schema({
  timestamps: true,
})
export class Gym {
  @Prop({ required: true })
  name!: string;

  @Prop({ required: true })
  location!: string;

  @Prop({ required: true })
  monthlyFee!: number;
}

export const GymSchema = SchemaFactory.createForClass(Gym);
