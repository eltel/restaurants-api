import {
  IsString,
  IsEmail,
  IsPhoneNumber,
  IsEnum,
  IsOptional,
  IsEmpty,
} from 'class-validator';
import { User } from 'src/auth/schemas/user.schema';
import { Category } from '../schemas/restaurant.schema';

export class UpdateRestaurantDto {
  @IsString()
  @IsOptional()
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly description: string;

  @IsEmail({}, { message: 'Please enter a correctly formatted email' })
  @IsOptional()
  readonly email: string;

  @IsPhoneNumber('US')
  @IsOptional()
  readonly phoneNo: number;

  @IsString()
  @IsOptional()
  readonly address: string;

  @IsEnum(Category, { message: 'Please ener the correct category' })
  @IsOptional()
  readonly category: Category;

  @IsEmpty({ message: 'You are not permitted to provide the user ID' })
  readonly user: User;
}
