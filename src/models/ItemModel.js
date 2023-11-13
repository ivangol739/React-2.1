export default class ItemModel {
  constructor(
    {
      brand,
      title,
      description,
      descriptionFull,
      currency,
      price,
    }
  ) {
    this.brand = brand;
    this.title = title;
    this.description = description;
    this.descriptionFull = descriptionFull;
    this.currency = currency;
    this.price = price;
  }
}