import {  Prop,Schema, SchemaFactory,  } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { Suv } from "./suv.schema";

export type HajmDocument = Hajm & Document;

@Schema()
export class Hajm {



    @Prop({type: Types.ObjectId, ref: 'Suv'})
    owner: Suv;

    @Prop()
    hajm: number;

}

export const HajmSchema = SchemaFactory.createForClass(Hajm);
