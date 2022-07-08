import { Injectable } from '@nestjs/common';
import { Coinflip } from './types/coinflip';

@Injectable()
export class CoinflipService {
  async flip(): Promise<Coinflip> {
    // @TODO: We could make this more interesting by adding the random.org api instead of Math.random

    return Math.random() > 0.5 ? 'heads' : 'tails';
  }
}
