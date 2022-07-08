import { TransformPipe } from '@discord-nestjs/common';
import {
  Command,
  DiscordTransformedCommand,
  Payload,
  TransformedCommandExecutionContext,
  UsePipes,
} from '@discord-nestjs/core';
import { Injectable } from '@nestjs/common';
import { MessagePayload } from 'discord.js';
import { SearchMealDto } from './dtos/search-meal.dto';
import { SearchMealService } from './search-meal.service';

@Command({
  name: 'search-meal',
  description: 'Searches meals form the themealdb.com database',
})
@Injectable()
@UsePipes(TransformPipe)
export class SearchMealCommand implements DiscordTransformedCommand<SearchMealDto> {
  constructor(private readonly searchMealService: SearchMealService) {}

  async handler(
    @Payload() params: SearchMealDto,
    executionContext: TransformedCommandExecutionContext,
  ): Promise<MessagePayload> {
    const results = await this.searchMealService.search(params.query);

    if (results.length === 0) {
      return MessagePayload.create(executionContext.interaction, {
        content: `No meals found for: ${params.query}`,
      });
    }

    return MessagePayload.create(executionContext.interaction, {
      embeds: results
        .filter((_, index) => index < 10)
        .map((result) => ({
          title: result.name,
          footer: {
            text: `ID: ${result.id}`,
          },
          url: result.link,
        })),
    });
  }
}
