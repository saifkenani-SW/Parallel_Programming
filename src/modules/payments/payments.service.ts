import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Injectable()
export class PaymentsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPaymentDto: CreatePaymentDto) {
    const { paidAt, ...rest } = createPaymentDto;
    return this.prisma.payment.create({
      data: {
        ...rest,
        ...(paidAt ? { paidAt: new Date(paidAt) } : {}),
      },
      include: {
        order: true,
        user: true,
      },
    });
  }

  findAll() {
    return this.prisma.payment.findMany({
      include: {
        order: true,
        user: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.payment.findUnique({
      where: { id },
      include: {
        order: true,
        user: true,
      },
    });
  }

  update(id: number, updatePaymentDto: UpdatePaymentDto) {
    const { paidAt, ...rest } = updatePaymentDto;
    return this.prisma.payment.update({
      where: { id },
      data: {
        ...rest,
        ...(paidAt ? { paidAt: new Date(paidAt) } : {}),
      },
      include: {
        order: true,
        user: true,
      },
    });
  }

  remove(id: number) {
    return this.prisma.payment.delete({
      where: { id },
      include: {
        order: true,
        user: true,
      },
    });
  }
}
