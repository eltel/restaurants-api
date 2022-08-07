import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../auth/schemas/user.schema';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { CreateMealDto } from './dto/create-meal.dto';
import { MealService } from './meal.service';
import { Meal } from './schemas/meal.schema';

@Controller('meal')
export class MealController {
  constructor(private mealService: MealService) {}

  @Post()
  @UseGuards(AuthGuard())
  createMeal(
    @Body() createMealDto: CreateMealDto,
    @CurrentUser() user: User,
  ): Promise<Meal> {
    return this.mealService.create(createMealDto, user);
  }
}
