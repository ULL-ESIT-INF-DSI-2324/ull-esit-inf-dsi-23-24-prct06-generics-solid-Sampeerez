import { Invoice } from "./Invoice";
import { Html } from "./htmlFormat";
import { Pdf } from "./pdfFormat";

/**
 * Class that represents an invoice manager.
 */
export class InvoiceManager {
  private invoices: Invoice[] = [];

  /**
   * Constructor of the InvoiceManager class.
   * @param invoices - An optional array of invoices to initialize the manager.
   */
  constructor(invoices?: Invoice[]) {
    if (invoices) this.invoices = invoices;
  }

  /**
   * Returns the invoices of the manager.
   * @returns An array of invoices.
   */
  getInvoices(): Invoice[] {
    return this.invoices;
  }

  /**
   * Adds an invoice to the manager.
   * @param invoice - The invoice to add.
   */
  addInvoice(invoice: Invoice): void {
    this.invoices.push(invoice);
  }

  /**
   * Removes an invoice from the manager.
   * @param invoice - The invoice to remove.
   */
  removeInvoice(invoice: Invoice): void {
    const index = this.invoices.indexOf(invoice);
    if (index !== -1) this.invoices.splice(index, 1);
  }

  /**
   * Calculates the total invoiced by the manager.
   * @returns The total invoiced.
   */
  totalInvoiced(): number {
    return this.invoices.reduce(
      (total, invoice) => total + invoice.totalAmount,
      0,
    );
  }

  /**
   * Displays the invoices
   */
  showInvoices() {
    for (const i of this.invoices) {
      if (i instanceof Pdf) {
        console.log(i.toPdf());
      } else if (i instanceof Html) {
        console.log(i.toHtml());
      }
    }
  }
}
