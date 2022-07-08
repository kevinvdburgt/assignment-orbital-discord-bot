import { Command, DiscordCommand } from '@discord-nestjs/core';
import { Injectable } from '@nestjs/common';
import { CommandInteraction } from 'discord.js';
import { CoinflipService } from './coinflip.service';

@Command({
  name: 'coinflip',
  description: 'Coinflip that results in a heads or tails.',
})
@Injectable()
export class CoinflipCommand implements DiscordCommand {
  constructor(private readonly coinflipService: CoinflipService) {}

  async handler(interaction: CommandInteraction): Promise<string> {
    const result = await this.coinflipService.flip();

    return `${interaction.user.username} flipped the coin: ${result}`;
  }
}
