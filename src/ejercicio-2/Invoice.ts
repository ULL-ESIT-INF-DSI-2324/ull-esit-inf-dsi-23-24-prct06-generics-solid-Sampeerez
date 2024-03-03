/**
 * Interface for Invoice.
 */
export interface Invoice {
  /**
   * Unique identifier for the invoice.
   */
  id: string;

  /**
   * Name of the customer.
   */
  customerName: string;

  /**
   * Address of the customer.
   */
  customerAddress: string;

  /**
   * Array of items in the invoice. Each item has a description, quantity, and price.
   */
  items: {
    /**
     * Description of the item.
     */
    description: string;

    /**
     * Quantity of the item.
     */
    quantity: number;

    /**
     * Price of the item.
     */
    price: number;
  }[];

  /**
   * Total amount of the invoice.
   */
  totalAmount: number;

  /**
   * Date when the invoice was issued.
   */
  invoiceDate: Date;

  /**
   * Date when the payment of the invoice is due.
   */
  dueDate: Date;

  /**
   * File extension for the invoice file.
   */
  fileExtension: string;
}
