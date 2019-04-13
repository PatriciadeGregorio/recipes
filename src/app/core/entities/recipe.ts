export class Recipe {
  title: string;
  href: string;
  ingredients: string;
  thumbnail: string;

  constructor(title: string, href: string, ingredients: string, thumbnail: string) {
    this.title = title;
    this.href = href;
    this.ingredients = ingredients;
    this.thumbnail = thumbnail;
  }
}
