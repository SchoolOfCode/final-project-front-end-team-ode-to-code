export interface City {
id: number;
city_name: string;
country: string;
continent: string;
rating: number;
image: string;
image2: string;
city_description: string;
city_attractions: string[];
great_for: string[];
tags: string[];
budget: string;
holiday_type: string;
}

export interface Country {
id: number;
country: string;
continent: string;
image: string;
image2: string;
country_description: string;
cities: string[];
}
  