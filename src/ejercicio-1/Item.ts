/**
 * Interface representing a general item.
 */
export interface Item {
  /**
   * The name of the item.
   */
  name: string;

  /**
   * The description of the item.
   */
  description?: string;

  /**
   * The weight of the item.
   */
  weight?: number;

  /**
   * The quantity of the item.
   */
  quantity?: number;

  /**
   * Whether the item is fragile.
   */
  fragile?: boolean;

  /**
   * The value of the item.
   */
  value?: number;

  /**
   * The material of the item.
   */
  material?: string;

  /**
   * The color of the item.
   */
  color?: string;

  /**
   * The room of the item.
   */
  room?: string;

  /**
   * Whether the item is packed.
   */
  packed?: boolean;
}
