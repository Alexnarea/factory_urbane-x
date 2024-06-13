import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  role: string;

  @ApiProperty()
  department: string;

  @ApiProperty()
  hireDate: Date;

  @ApiProperty()
  salary: number;
}
