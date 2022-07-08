import { Module } from '@nestjs/common';
import { CoinflipModule } from './modules/coinflip/coinflip.module';
import { ConfigModule } from './modules/config/config.module';
import { DiscordModule } from './modules/discord/discord.module';
import { SearchMealModule } from './modules/search-meal/search-meal.module';

@Module({ imports: [CoinflipModule, ConfigModule, DiscordModule, SearchMealModule] })
export class AppModule {}
