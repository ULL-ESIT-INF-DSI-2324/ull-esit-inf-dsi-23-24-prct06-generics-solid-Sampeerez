import { Invoice } from "./Invoice";

/**
 * Class that represents an invoice in HTML format.
 * Implements the Invoice interface.
 */
export class Html implements Invoice {
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
   * File extension for the invoice file. Always "html" for this class.
   */
  fileExtension: string = "html";

  /**
   * Constructor for the Html class.
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
   * Converts the invoice to HTML format.
   * @returns The invoice in HTML format.
   */
  toHtml() {
    const itemsHtml = this.items
      .map(
        (item, index) => `
      <div class="item">
        <h2>Item ${index + 1}</h2>
        <p>Description: ${item.description}</p>
        <p>Quantity: ${item.quantity}</p>
        <p>Price: ${item.price}</p>
      </div>
    `,
      )
      .join("");

    return `
      <html>
        <head>
          <title>Invoice</title>
          <style>
            body { font-family: Arial, sans-serif; }
            .item { margin-bottom: 10px; }
          </style>
        </head>
        <body>
          <h1>Invoice</h1>
          <p>ID: ${this.id}</p>
          <p>Customer Name: ${this.customerName}</p>
          <p>Customer Address: ${this.customerAddress}</p>
          <div class="items">
            ${itemsHtml}
          </div>
          <p>Total Amount: ${this.totalAmount}</p>
          <p>Invoice Date: ${this.invoiceDate}</p>
          <p>Due Date: ${this.dueDate}</p>
          <p>File Extension: ${this.fileExtension}</p>
        </body>
      </html>
    `;
  }
}
