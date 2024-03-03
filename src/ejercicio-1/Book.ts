import { Item } from "./Item";

/**
 * Class representing a book.
 * @implements {Item}
 */
export class Book implements Item {
  /**
   * The name of the book.
   */
  name: string;

  /**
   * The description of the book.
   */
  description?: string;

  /**
   * The weight of the book.
   */
  weight?: number;

  /**
   * The quantity of the book.
   */
  quantity?: number;

  /**
   * Whether the book is fragile.
   */
  fragile?: boolean;

  /**
   * The material of the book.
   */
  material?: string;

  /**
   * The color of the book.
   */
  color?: string;

  /**
   * The room of the book.
   */
  room?: string;

  /**
   * Whether the book is packed.
   */
  packed?: boolean;

  /**
   * The author of the book.
   */
  author?: string;

  /**
   * The genre of the book.
   */
  genre?: string;

  /**
   * Create a new book.
   * @param {string} name - The name of the book.
   * @param {string} [description] - The description of the book.
   * @param {number} [weight] - The weight of the book.
   * @param {number} [quantity] - The quantity of the book.
   * @param {boolean} [fragile] - Whether the book is fragile.
   * @param {string} [material] - The material of the book.
   * @param {string} [color] - The color of the book.
   * @param {string} [room] - The room of the book.
   * @param {boolean} [packed] - Whether the book is packed.
   * @param {string} [author] - The author of the book.
   * @param {string} [genre] - The genre of the book.
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
    author?: string,
    genre?: string,
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
    this.author = author;
    this.genre = genre;
  }
}
