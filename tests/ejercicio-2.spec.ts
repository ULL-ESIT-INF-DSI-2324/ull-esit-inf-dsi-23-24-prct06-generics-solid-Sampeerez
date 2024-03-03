import { expect } from "chai";
import { InvoiceManager } from "../src/ejercicio-2/InvoiceManager";
import { Html } from "../src/ejercicio-2/htmlFormat";
import { Pdf } from "../src/ejercicio-2/pdfFormat";

describe("InvoiceManager", () => {
  let invoiceManager: InvoiceManager;
  let pdfInvoice: Pdf;
  let htmlInvoice: Html;

  beforeEach(() => {
    pdfInvoice = new Pdf(
      "1",
      "Customer 1",
      "Address 1",
      [{ description: "Item 1", quantity: 1, price: 100 }],
      100,
      new Date(),
      new Date(),
    );
    htmlInvoice = new Html(
      "2",
      "Customer 2",
      "Address 2",
      [{ description: "Item 2", quantity: 2, price: 200 }],
      400,
      new Date(),
      new Date(),
    );

    invoiceManager = new InvoiceManager([pdfInvoice]);
  });

  it("should add an invoice", () => {
    invoiceManager.addInvoice(htmlInvoice);
    expect(invoiceManager.getInvoices()).to.include(htmlInvoice);
  });

  it("should remove an invoice", () => {
    invoiceManager.removeInvoice(pdfInvoice);
    expect(invoiceManager.getInvoices()).to.not.include(pdfInvoice);
  });

  it("should calculate the total invoiced", () => {
    invoiceManager.addInvoice(htmlInvoice);
    expect(invoiceManager.totalInvoiced()).to.equal(500);
  });

  it("should convert Pdf invoice to string", () => {
    const pdfString = pdfInvoice.toPdf();
    expect(pdfString).to.be.a("string");
  });

  it("should convert Html invoice to string", () => {
    const htmlString = htmlInvoice.toHtml();
    expect(htmlString).to.be.a("string");
  });

  it("should initialize with no invoices", () => {
    const emptyInvoiceManager = new InvoiceManager();
    expect(emptyInvoiceManager.getInvoices()).to.be.empty;
  });

  it("should not remove an invoice that does not exist", () => {
    const nonExistentInvoice = new Pdf(
      "3",
      "Customer 3",
      "Address 3",
      [{ description: "Item 3", quantity: 3, price: 300 }],
      900,
      new Date(),
      new Date(),
    );
    invoiceManager.removeInvoice(nonExistentInvoice);
    expect(invoiceManager.getInvoices()).to.have.lengthOf(1);
  });

  it("should not calculate total invoiced for empty manager", () => {
    const emptyInvoiceManager = new InvoiceManager();
    expect(emptyInvoiceManager.totalInvoiced()).to.equal(0);
  });

  it("should convert Pdf invoice to correct string format", () => {
    const pdfString = pdfInvoice.toPdf();
    expect(pdfString).to.equal(
      `${pdfInvoice.id}, ${pdfInvoice.customerName}, ${pdfInvoice.customerAddress}, ${pdfInvoice.items.map((item) => `${item.description}, ${item.quantity}, ${item.price}`).join("; ")}, ${pdfInvoice.totalAmount}, ${pdfInvoice.invoiceDate}, ${pdfInvoice.dueDate}, ${pdfInvoice.fileExtension}`,
    );
  });

  it("should convert Html invoice to correct string format", () => {
    const htmlString = htmlInvoice.toHtml();
    expect(htmlString).to.include(`<p>ID: ${htmlInvoice.id}</p>`);
    expect(htmlString).to.include(
      `<p>Customer Name: ${htmlInvoice.customerName}</p>`,
    );
    expect(htmlString).to.include(
      `<p>Customer Address: ${htmlInvoice.customerAddress}</p>`,
    );
    expect(htmlString).to.include(
      `<p>Total Amount: ${htmlInvoice.totalAmount}</p>`,
    );
    expect(htmlString).to.include(
      `<p>Invoice Date: ${htmlInvoice.invoiceDate}</p>`,
    );
    expect(htmlString).to.include(`<p>Due Date: ${htmlInvoice.dueDate}</p>`);
    expect(htmlString).to.include(
      `<p>File Extension: ${htmlInvoice.fileExtension}</p>`,
    );
  });
});
