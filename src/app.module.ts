import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { GymModule } from './gym/gym.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://nestuser:nestuser123@ac-3nk8ckz-shard-00-00.qwrehr3.mongodb.net:27017,ac-3nk8ckz-shard-00-01.qwrehr3.mongodb.net:27017,ac-3nk8ckz-shard-00-02.qwrehr3.mongodb.net:27017/?ssl=true&replicaSet=atlas-c4jgul-shard-0&authSource=admin&appName=Cluster0',
    ),
    GymModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
