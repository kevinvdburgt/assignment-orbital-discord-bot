import { Module } from '@nestjs/common';
import { CoinflipCommand } from './coinflip.command';
import { CoinflipService } from './coinflip.service';

@Module({
  providers: [CoinflipCommand, CoinflipService],
})
export class CoinflipModule {}
