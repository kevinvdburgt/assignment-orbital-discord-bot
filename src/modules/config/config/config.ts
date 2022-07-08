import { Type } from 'class-transformer';
import { IsDefined, ValidateNested } from 'class-validator';
import { DiscordConfig } from './discord.config';

export class Config {
  @Type(() => DiscordConfig)
  @ValidateNested()
  @IsDefined()
  readonly discord!: DiscordConfig;
}
