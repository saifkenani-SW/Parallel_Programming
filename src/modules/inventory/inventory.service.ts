import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';

@Injectable()
export class InventoryService {
  constructor(private readonly prisma: PrismaService) {}

  create(createInventoryDto: CreateInventoryDto) {
    return this.prisma.inventory.create({
      data: createInventoryDto,
      include: {
        product: true,
      },
    });
  }

  findAll() {
    return this.prisma.inventory.findMany({
      include: {
        product: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.inventory.findUnique({
      where: { id },
      include: {
        product: true,
      },
    });
  }

  update(id: number, updateInventoryDto: UpdateInventoryDto) {
    return this.prisma.inventory.update({
      where: { id },
      data: updateInventoryDto,
      include: {
        product: true,
      },
    });
  }

  remove(id: number) {
    return this.prisma.inventory.delete({
      where: { id },
      include: {
        product: true,
      },
    });
  }
}
