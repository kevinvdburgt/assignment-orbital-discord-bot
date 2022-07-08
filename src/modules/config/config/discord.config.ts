import { IsString } from 'class-validator';

export class DiscordConfig {
  @IsString()
  readonly apiToken!: string;

  @IsString()
  readonly slashCommandsForGuild!: string;
}
