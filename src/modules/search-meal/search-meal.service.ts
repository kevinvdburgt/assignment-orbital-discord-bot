import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { InvalidSearchMealResponseException } from './exceptions/invalid-search-meal-response.exception';
import { Meal } from './interfaces/meal';

@Injectable()
export class SearchMealService {
  constructor(private readonly httpService: HttpService) {}

  async search(query: string): Promise<Meal[]> {
    const { data, status } = await lastValueFrom(
      this.httpService.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`),
    );

    if (status !== 200) {
      throw new InvalidSearchMealResponseException();
    }

    if (typeof data !== 'object' || data.meals === undefined) {
      throw new InvalidSearchMealResponseException();
    }

    if (!Array.isArray(data.meals)) {
      return [];
    }

    return data.meals.map((meal: { idMeal: string; strMeal: string; strSource: string }) => ({
      id: meal.idMeal,
      name: meal.strMeal,
      link: meal.strSource,
    }));
  }
}
