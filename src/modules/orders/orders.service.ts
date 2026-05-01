import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  create(createOrderDto: CreateOrderDto) {
    return this.prisma.order.create({
      data: createOrderDto,
      include: {
        user: true,
        product: true,
      },
    });
  }

  findAll() {
    return this.prisma.order.findMany({
      include: {
        user: true,
        product: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.order.findUnique({
      where: { id },
      include: {
        user: true,
        product: true,
      },
    });
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return this.prisma.order.update({
      where: { id },
      data: updateOrderDto,
      include: {
        user: true,
        product: true,
      },
    });
  }

  remove(id: number) {
    return this.prisma.order.delete({
      where: { id },
      include: {
        user: true,
        product: true,
      },
    });
  }
}
