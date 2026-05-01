import { IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  @IsPositive()
  quantity!: number;

  @IsNumber()
  @IsPositive()
  totalPrice!: number;

  @IsOptional()
  @IsString()
  status?: string;

  @IsNumber()
  @IsPositive()
  userId!: number;

  @IsNumber()
  @IsPositive()
  productId!: number;
}
