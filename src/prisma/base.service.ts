import { PrismaService } from './prisma.service';
import { Prisma } from '@prisma/client';

export class BaseService<T, CreateDto, UpdateDto> {
  constructor(
    protected prisma: PrismaService,
    protected modelName: string
  ) {}

  async create(data: CreateDto): Promise<T> {
    return this.prisma[this.modelName].create({ data });
  }

  async findAll(): Promise<T[]> {
    return this.prisma[this.modelName].findMany();
  }

  async findOne(id: string): Promise<T | null> {
    return this.prisma[this.modelName].findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateDto): Promise<T> {
    return this.prisma[this.modelName].update({ where: { id }, data });
  }

  async remove(id: string): Promise<T> {
    return this.prisma[this.modelName].delete({ where: { id } });
  }
}
