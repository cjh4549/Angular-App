import { Module } from "@nestjs/common";
import { NursesModule } from "./nurses/nurses.module";

@Module({
  imports:[NursesModule]
})
export class AppModule {

}