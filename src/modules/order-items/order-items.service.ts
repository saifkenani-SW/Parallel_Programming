import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';

@Injectable()
export class OrderItemsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createOrderItemDto: CreateOrderItemDto) {
    return this.prisma.orderItem.create({
      data: createOrderItemDto,
      include: {
        order: true,
        product: true,
      },
    });
  }

  findAll() {
    return this.prisma.orderItem.findMany({
      include: {
        order: true,
        product: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.orderItem.findUnique({
      where: { id },
      include: {
        order: true,
        product: true,
      },
    });
  }

  update(id: number, updateOrderItemDto: UpdateOrderItemDto) {
    return this.prisma.orderItem.update({
      where: { id },
      data: updateOrderItemDto,
      include: {
        order: true,
        product: true,
      },
    });
  }

  remove(id: number) {
    return this.prisma.orderItem.delete({
      where: { id },
      include: {
        order: true,
        product: true,
      },
    });
  }
}
