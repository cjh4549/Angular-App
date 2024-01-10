import { Module } from "@nestjs/common";
import { NursesController } from "./nurses.controller";

@Module({
  controllers: [NursesController]
})
export class NursesModule {

}