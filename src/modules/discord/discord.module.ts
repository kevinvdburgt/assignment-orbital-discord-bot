import { DiscordModule as DiscordModuleNestjs } from '@discord-nestjs/core';
import { Module } from '@nestjs/common';
import { Intents } from 'discord.js';
import { DiscordConfig } from '../config/config/discord.config';

@Module({
  imports: [
    DiscordModuleNestjs.forRootAsync({
      useFactory: (discordConfig: DiscordConfig) => {
        return {
          token: discordConfig.apiToken,
          discordClientOptions: {
            intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
          },
          registerCommandOptions: [
            {
              forGuild: discordConfig.slashCommandsForGuild,
              removeCommandsBefore: true,
            },
          ],
        };
      },
      inject: [DiscordConfig],
    }),
  ],
})
export class DiscordModule {}
