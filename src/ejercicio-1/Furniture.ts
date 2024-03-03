import { Item } from "./Item";

/**
 * Class representing a furniture item.
 * @implements {Item}
 */
export class Furniture implements Item {
  /**
   * The name of the furniture item.
   */
  name: string;

  /**
   * The description of the furniture item.
   */
  description?: string;

  /**
   * The weight of the furniture item.
   */
  weight?: number;

  /**
   * The quantity of the furniture item.
   */
  quantity?: number;

  /**
   * Whether the furniture item is fragile.
   */
  fragile?: boolean;

  /**
   * The material of the furniture item.
   */
  material?: string;

  /**
   * The color of the furniture item.
   */
  color?: string;

  /**
   * The room of the furniture item.
   */
  room?: string;

  /**
   * Whether the furniture item is packed.
   */
  packed?: boolean;

  /**
   * The dimensions of the furniture item.
   */
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };

  /**
   * Create a new furniture item.
   * @param {string} name - The name of the furniture item.
   * @param {string} [description] - The description of the furniture item.
   * @param {number} [weight] - The weight of the furniture item.
   * @param {number} [quantity] - The quantity of the furniture item.
   * @param {boolean} [fragile] - Whether the furniture item is fragile.
   * @param {string} [material] - The material of the furniture item.
   * @param {string} [color] - The color of the furniture item.
   * @param {string} [room] - The room of the furniture item.
   * @param {boolean} [packed] - Whether the furniture item is packed.
   * @param {Object} [dimensions] - The dimensions of the furniture item.
   * @param {number} dimensions.length - The length of the furniture item.
   * @param {number} dimensions.width - The width of the furniture item.
   * @param {number} dimensions.height - The height of the furniture item.
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
    dimensions?: { length: number; width: number; height: number },
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
    this.dimensions = dimensions;
  }
}
