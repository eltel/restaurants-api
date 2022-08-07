import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantsModule } from './restaurants/restaurants.module';

import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { MealModule } from './meal/meal.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
      isGlobal: true,
    }),
    // (process.env.DB_URI_LOCAL) (
    // 'mongodb+srv://terryTesting:RQ6oI7gaTrLYMqnR@cluster0.oo9p3.mongodb.net/?retryWrites=true&w=majority',
    // )
    MongooseModule.forRoot(process.env.DB_URI_LOCAL),
    RestaurantsModule,
    AuthModule,
    MealModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
