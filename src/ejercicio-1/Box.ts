import { Item } from "./Item";

/**
 * Class representing a box.
 * @template T The type of items that can be stored in the box.
 * @implements {Item}
 */
export class Box<T extends Item> {
  /**
   * The items in the box.
   * @private
   */
  private items: T[];

  /**
   * The current weight of the box.
   * @private
   */
  private currentWeight: number = 0;

  /**
   * The maximum weight the box can hold.
   * @private
   */
  private maxWeight: number;

  /**
   * The maximum number of items the box can hold.
   * @private
   */
  private maxItems: number;

  /**
   * Create a new box.
   * @param {number} maxWeight - The maximum weight the box can hold.
   * @param {number} maxItems - The maximum number of items the box can hold.
   * @param {T[]} [items] - The initial items in the box.
   */
  constructor(maxWeight: number, maxItems: number, items?: T[]) {
    this.maxWeight = maxWeight;
    this.maxItems = maxItems;
    this.items = items || [];
    this.currentWeight = this.items.reduce(
      (total, item) => total + (item.weight || 0),
      0,
    );
  }

  /**
   * Add an item to the box.
   * @param {T} item - The item to add.
   * @throws {Error} If adding the item would exceed the maximum weight or the maximum number of items.
   */
  addItem(item: T): void {
    if (item.weight && this.currentWeight + item.weight > this.maxWeight) {
      throw new Error("Cannot add item, box would be over maximum weight");
    }
    if (this.items.length >= this.maxItems) {
      throw new Error("Cannot add item, box is full");
    }
    this.items.push(item);
    this.currentWeight += item.weight || 0;
  }

  /**
   * Remove an item from the box.
   * @param {T} item - The item to remove.
   * @throws {Error} If the item is not found in the box.
   */
  removeItem(item: T): void {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    } else {
      throw new Error("Cannot remove item, item not found in the box");
    }
  }

  /**
   * List the items in the box.
   */
  listItems(): void {
    this.items.forEach((item) => console.log(item));
  }

  /**
   * Find an item in the box.
   * @param {T} itemToFind - The item to find.
   * @return {T | undefined} The found item, or undefined if the item is not found.
   */
  findItem(itemToFind: T): T | undefined {
    return this.items.find(
      (item) =>
        item.name === itemToFind.name &&
        item.description === itemToFind.description &&
        item.weight === itemToFind.weight &&
        item.quantity === itemToFind.quantity &&
        item.fragile === itemToFind.fragile &&
        item.value === itemToFind.value &&
        item.material === itemToFind.material &&
        item.color === itemToFind.color &&
        item.room === itemToFind.room &&
        item.packed === itemToFind.packed,
    );
  }
}
