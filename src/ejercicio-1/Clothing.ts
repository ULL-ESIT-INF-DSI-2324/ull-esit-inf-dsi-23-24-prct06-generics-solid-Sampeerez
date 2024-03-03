import { Item } from "./Item";

/**
 * Class representing a clothing item.
 * @implements {Item}
 */
export class Clothing implements Item {
  /**
   * The name of the clothing item.
   */
  name: string;

  /**
   * The description of the clothing item.
   */
  description?: string;

  /**
   * The weight of the clothing item.
   */
  weight?: number;

  /**
   * The quantity of the clothing item.
   */
  quantity?: number;

  /**
   * Whether the clothing item is fragile.
   */
  fragile?: boolean;

  /**
   * The material of the clothing item.
   */
  material?: string;

  /**
   * The color of the clothing item.
   */
  color?: string;

  /**
   * The room of the clothing item.
   */
  room?: string;

  /**
   * Whether the clothing item is packed.
   */
  packed?: boolean;

  /**
   * The size of the clothing item.
   */
  size?: string;

  /**
   * Create a new clothing item.
   * @param {string} name - The name of the clothing item.
   * @param {string} [description] - The description of the clothing item.
   * @param {number} [weight] - The weight of the clothing item.
   * @param {number} [quantity] - The quantity of the clothing item.
   * @param {boolean} [fragile] - Whether the clothing item is fragile.
   * @param {string} [material] - The material of the clothing item.
   * @param {string} [color] - The color of the clothing item.
   * @param {string} [room] - The room of the clothing item.
   * @param {boolean} [packed] - Whether the clothing item is packed.
   * @param {string} [size] - The size of the clothing item.
   */
  constructor(
    name: string,
    description?: string,
    weight?: number,
    quantity?: number,
    fragile?: boolean,
    material?: string,
    color?: string,
    room?: string,
    packed?: boolean,
    size?: string,
  ) {
    this.name = name;
    this.description = description;
    this.weight = weight;
    this.quantity = quantity;
    this.fragile = fragile;
    this.material = material;
    this.color = color;
    this.room = room;
    this.packed = packed;
    this.size = size;
  }
}
