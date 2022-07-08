import { Param } from '@discord-nestjs/core';

export class SearchMealDto {
  @Param({ description: 'The search query', required: true })
  query!: string;
}
