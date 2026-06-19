import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateGymDto {
  @ApiProperty({
    example: 'Gold Gym',
  })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({
    example: 'Pune',
  })
  @IsString()
  @IsNotEmpty()
  location!: string;

  @ApiProperty({
    example: 2000,
  })
  @IsNumber()
  monthlyFee!: number;
}