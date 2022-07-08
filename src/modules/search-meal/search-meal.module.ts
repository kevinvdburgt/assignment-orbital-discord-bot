import { DiscordModule } from '@discord-nestjs/core';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { SearchMealCommand } from './search-meal.command';
import { SearchMealService } from './search-meal.service';

@Module({
  imports: [DiscordModule.forFeature(), HttpModule],
  providers: [SearchMealCommand, SearchMealService],
})
export class SearchMealModule {}
