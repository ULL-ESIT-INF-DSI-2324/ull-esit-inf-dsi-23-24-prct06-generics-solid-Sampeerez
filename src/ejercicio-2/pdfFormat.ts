import { Invoice } from "./Invoice";

/**
 * Class that represents an invoice in PDF format.
 * Implements the Invoice interface.
 */
export class Pdf implements Invoice {
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
   * File extension for the invoice file. Always "pdf" for this class.
   */
  fileExtension: string = "pdf";

  /**
   * Constructor for the Pdf class.
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
   * Converts the invoice to a string in PDF format.
   * @returns The invoice in a string format suitable for PDF conversion.
   */
  toPdf() {
    return `${this.id}, ${this.customerName}, ${this.customerAddress}, ${this.items.map((item) => `${item.description}, ${item.quantity}, ${item.price}`).join("; ")}, ${this.totalAmount}, ${this.invoiceDate}, ${this.dueDate}, ${this.fileExtension}`;
  }
}
