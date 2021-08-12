import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PlacesModule } from './places/places.module';
import { AdministratorsModule } from './administrators/administrators.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    PlacesModule,
    AdministratorsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
