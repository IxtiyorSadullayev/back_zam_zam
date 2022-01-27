import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type SuvDocument = Suv & Document;

@Schema()
export class Suv {

    @Prop({required: true})
    phone: number;

    @Prop({required: true})
    name: string;

    @Prop({default: Date.now() })
    date: Date;

}

export const SuvSchema = SchemaFactory.createForClass(Suv);