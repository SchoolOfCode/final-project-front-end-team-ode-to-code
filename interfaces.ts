export interface City {
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
id?: number
}

export interface Country {
country: string;
continent: string;
image: string;
image2: string;
country_description: string;
cities: string[];
id?: number;
}

export interface Changes {
    name: string
    column?: string
    data?: string | number | string[]
  }
  

