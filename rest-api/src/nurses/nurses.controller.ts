import { Controller, Get } from "@nestjs/common";
import { Nurse } from "../../../shared/nurse.model";

@Controller({})
export class NursesController {

  @Get('/api/list-nurses')
  async listNurses(): Promise<Nurse> {
    return {
      location: 'St.Michael',
      id: 123,
      department: ['ER'],
      hours: 'Full-time'
    }
  }
}