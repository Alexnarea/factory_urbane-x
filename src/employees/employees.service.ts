import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Employee } from '@prisma/client';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { BaseService } from 'src/prisma/base.service';

@Injectable()
export class EmployeesService extends BaseService<Employee, CreateEmployeeDto, UpdateEmployeeDto> {
  constructor(prisma: PrismaService) {
    super(prisma, 'employee');
  }

  async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    return this.prisma.employee.create({ data: createEmployeeDto });
  }

  async findAll(): Promise<Employee[]> {
    return this.prisma.employee.findMany();
  }

  async findOne(id: string): Promise<Employee> {
    return this.prisma.employee.findUnique({ where: { id } });
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto): Promise<Employee> {
    return this.prisma.employee.update({ where: { id }, data: updateEmployeeDto });
  }

  async remove(id: string): Promise<Employee> {
    return this.prisma.employee.delete({ where: { id } });
  }
}