import { IsNumber, IsPositive, Min } from 'class-validator';

export class CreateInventoryDto {
  @IsNumber()
  @IsPositive()
  productId!: number;

  @IsNumber()
  @Min(0)
  quantity!: number;
}
