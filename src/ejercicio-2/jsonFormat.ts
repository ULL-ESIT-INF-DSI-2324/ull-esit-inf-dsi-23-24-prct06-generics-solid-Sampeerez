import { Invoice } from "./Invoice";

/**
 * Class that represents an invoice in JSON format.
 * Implements the Invoice interface.
 */
export class Json implements Invoice {
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
   * File extension for the invoice file. Always "json" for this class.
   */
  fileExtension: string = "json";

  /**
   * Constructor for the Json class.
   * @param id - Unique identifier for the invoice.
   * @param customerName - Name of the customer.
   * @param customerAddress - Address of the customer.
   * @param items - Array of items in the invoice.
   * @param totalAmount - Total amount of the invoice.
   * @param invoiceDate - Date when the invoice was issued.
   * @param dueDate - Date when the payment of the invoice is due.
   */
  constructor(
    id: string,
    customerName: string,
    customerAddress: string,
    items: { description: string; quantity: number; price: number }[],
    totalAmount: number,
    invoiceDate: Date,
    dueDate: Date,
  ) {
    this.id = id;
    this.customerName = customerName;
    this.customerAddress = customerAddress;
    this.items = items;
    this.totalAmount = totalAmount;
    this.invoiceDate = invoiceDate;
    this.dueDate = dueDate;
  }

  /**
   * Converts the invoice to a JSON string.
   * @returns The invoice in a JSON string format.
   */
  toJson(): string {
    return JSON.stringify(this);
  }
}
