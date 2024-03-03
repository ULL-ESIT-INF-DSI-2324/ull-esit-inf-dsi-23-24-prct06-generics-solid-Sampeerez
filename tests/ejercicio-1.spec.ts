import "mocha";
import { expect } from "chai";
import { Item } from "../src/ejercicio-1/Item";
import { Box } from "../src/ejercicio-1/Box";
import { Furniture } from "../src/ejercicio-1/Furniture";
import { Clothing } from "../src/ejercicio-1/Clothing";
import { Book } from "../src/ejercicio-1/Book";

describe("Ejercicio-1", () => {
  describe("Furniture tests", () => {
    it("should create a Furniture object", () => {
      const furniture = new Furniture(
        "Chair",
        "Wooden chair",
        10,
        1,
        false,
        "Wood",
        "Brown",
        "Living Room",
        false,
        { length: 1, width: 1, height: 1 },
      );
      expect(furniture.name).to.equal("Chair");
      expect(furniture.description).to.equal("Wooden chair");
      expect(furniture.weight).to.equal(10);
      expect(furniture.quantity).to.equal(1);
      expect(furniture.fragile).to.be.false;
      expect(furniture.material).to.equal("Wood");
      expect(furniture.color).to.equal("Brown");
      expect(furniture.room).to.equal("Living Room");
      expect(furniture.packed).to.be.false;
      expect(furniture.dimensions).to.deep.equal({
        length: 1,
        width: 1,
        height: 1,
      });
    });
  });
  describe("Clothing tests", () => {
    it("should create a Clothing object", () => {
      const clothing = new Clothing(
        "Shirt",
        "Cotton shirt",
        5,
        1,
        false,
        "Cotton",
        "White",
        "Bedroom",
        false,
        "M",
      );
      expect(clothing.name).to.equal("Shirt");
      expect(clothing.description).to.equal("Cotton shirt");
      expect(clothing.weight).to.equal(5);
      expect(clothing.quantity).to.equal(1);
      expect(clothing.fragile).to.be.false;
      expect(clothing.material).to.equal("Cotton");
      expect(clothing.color).to.equal("White");
      expect(clothing.room).to.equal("Bedroom");
      expect(clothing.packed).to.be.false;
      expect(clothing.size).to.equal("M");
    });
  });
  describe("Book tests", () => {
    it("should create a Book object", () => {
      const book = new Book(
        "The Hobbit",
        "Fantasy book",
        10,
        1,
        false,
        "Paper",
        "Brown",
        "Living Room",
        false,
        "J.R.R. Tolkien",
        "Fantasy",
      );
      expect(book.name).to.equal("The Hobbit");
      expect(book.description).to.equal("Fantasy book");
      expect(book.weight).to.equal(10);
      expect(book.quantity).to.equal(1);
      expect(book.fragile).to.be.false;
      expect(book.material).to.equal("Paper");
      expect(book.color).to.equal("Brown");
      expect(book.room).to.equal("Living Room");
      expect(book.packed).to.be.false;
      expect(book.author).to.equal("J.R.R. Tolkien");
      expect(book.genre).to.equal("Fantasy");
    });
  });

  describe("Box tests", () => {
    it("should add a Furniture item to the box", () => {
      const box = new Box<Furniture>(100, 10);
      const furniture = new Furniture(
        "Chair",
        "Wooden chair",
        10,
        1,
        false,
        "Wood",
        "Brown",
        "Living Room",
        false,
        { length: 1, width: 1, height: 1 },
      );
      box.addItem(furniture);
      expect(box.findItem(furniture)).to.equal(furniture);
    });

    it("should not add a Furniture item if it exceeds the max weight", () => {
      const box = new Box<Furniture>(10, 10);
      const furniture = new Furniture(
        "Chair",
        "Wooden chair",
        20,
        1,
        false,
        "Wood",
        "Brown",
        "Living Room",
        false,
        { length: 1, width: 1, height: 1 },
      );
      expect(() => box.addItem(furniture)).to.throw(
        "Cannot add item, box would be over maximum weight",
      );
    });

    it("should not add a Furniture item if it exceeds the max items", () => {
      const box = new Box<Furniture>(100, 1);
      const furniture1 = new Furniture(
        "Chair",
        "Wooden chair",
        10,
        1,
        false,
        "Wood",
        "Brown",
        "Living Room",
        false,
        { length: 1, width: 1, height: 1 },
      );
      const furniture2 = new Furniture(
        "Table",
        "Wooden table",
        20,
        1,
        false,
        "Wood",
        "Brown",
        "Living Room",
        false,
        { length: 1, width: 1, height: 1 },
      );
      box.addItem(furniture1);
      expect(() => box.addItem(furniture2)).to.throw(
        "Cannot add item, box is full",
      );
    });

    it("should remove a Furniture item from the box", () => {
      const box = new Box<Furniture>(100, 10);
      const furniture = new Furniture(
        "Chair",
        "Wooden chair",
        10,
        1,
        false,
        "Wood",
        "Brown",
        "Living Room",
        false,
        { length: 1, width: 1, height: 1 },
      );
      box.addItem(furniture);
      box.removeItem(furniture);
      expect(box.findItem(furniture)).to.be.undefined;
    });

    it("should throw an error when trying to remove a Furniture item that is not in the box", () => {
      const box = new Box<Furniture>(100, 10);
      const furniture = new Furniture(
        "Chair",
        "Wooden chair",
        10,
        1,
        false,
        "Wood",
        "Brown",
        "Living Room",
        false,
        { length: 1, width: 1, height: 1 },
      );
      expect(() => box.removeItem(furniture)).to.throw(
        "Cannot remove item, item not found in the box",
      );
    });

    it("should find a Furniture item in the box", () => {
      const box = new Box<Furniture>(100, 10);
      const furniture = new Furniture(
        "Chair",
        "Wooden chair",
        10,
        1,
        false,
        "Wood",
        "Brown",
        "Living Room",
        false,
        { length: 1, width: 1, height: 1 },
      );
      box.addItem(furniture);
      expect(box.findItem(furniture)).to.equal(furniture);
    });

    it("should not find a Furniture item in the box", () => {
      const box = new Box<Furniture>(100, 10);
      const furniture = new Furniture(
        "Chair",
        "Wooden chair",
        10,
        1,
        false,
        "Wood",
        "Brown",
        "Living Room",
        false,
        { length: 1, width: 1, height: 1 },
      );
      expect(box.findItem(furniture)).to.be.undefined;
    });

    it("should add a Clothing item to the box", () => {
      const box = new Box<Clothing>(100, 10);
      const clothing = new Clothing(
        "Shirt",
        "Cotton shirt",
        5,
        1,
        false,
        "Cotton",
        "White",
        "Bedroom",
        false,
        "M",
      );
      box.addItem(clothing);
      expect(box.findItem(clothing)).to.equal(clothing);
    });

    it("should not add a Clothing item if it exceeds the max weight", () => {
      const box = new Box<Clothing>(10, 10);
      const clothing = new Clothing(
        "Shirt",
        "Cotton shirt",
        20,
        1,
        false,
        "Cotton",
        "White",
        "Bedroom",
        false,
        "M",
      );
      expect(() => box.addItem(clothing)).to.throw(
        "Cannot add item, box would be over maximum weight",
      );
    });

    it("should not add a Clothing item if it exceeds the max items", () => {
      const box = new Box<Clothing>(100, 1);
      const clothing1 = new Clothing(
        "Shirt",
        "Cotton shirt",
        5,
        1,
        false,
        "Cotton",
        "White",
        "Bedroom",
        false,
        "M",
      );
      const clothing2 = new Clothing(
        "Pants",
        "Cotton pants",
        10,
        1,
        false,
        "Cotton",
        "White",
        "Bedroom",
        false,
        "M",
      );
      box.addItem(clothing1);
      expect(() => box.addItem(clothing2)).to.throw(
        "Cannot add item, box is full",
      );
    });

    it("should remove a Clothing item from the box", () => {
      const box = new Box<Clothing>(100, 10);
      const clothing = new Clothing(
        "Shirt",
        "Cotton shirt",
        5,
        1,
        false,
        "Cotton",
        "White",
        "Bedroom",
        false,
        "M",
      );
      box.addItem(clothing);
      box.removeItem(clothing);
      expect(box.findItem(clothing)).to.be.undefined;
    });

    it("should throw an error when trying to remove a Clothing item that is not in the box", () => {
      const box = new Box<Clothing>(100, 10);
      const clothing = new Clothing(
        "Shirt",
        "Cotton shirt",
        5,
        1,
        false,
        "Cotton",
        "White",
        "Bedroom",
        false,
        "M",
      );
      expect(() => box.removeItem(clothing)).to.throw(
        "Cannot remove item, item not found in the box",
      );
    });

    it("should find a Clothing item in the box", () => {
      const box = new Box<Clothing>(100, 10);
      const clothing = new Clothing(
        "Shirt",
        "Cotton shirt",
        5,
        1,
        false,
        "Cotton",
        "White",
        "Bedroom",
        false,
        "M",
      );
      box.addItem(clothing);
      expect(box.findItem(clothing)).to.equal(clothing);
    });

    it("should not find a Clothing item in the box", () => {
      const box = new Box<Clothing>(100, 10);
      const clothing = new Clothing(
        "Shirt",
        "Cotton shirt",
        5,
        1,
        false,
        "Cotton",
        "White",
        "Bedroom",
        false,
        "M",
      );
      expect(box.findItem(clothing)).to.be.undefined;
    });

    it("should add a Book item to the box", () => {
      const box = new Box<Book>(100, 10);
      const book = new Book(
        "The Hobbit",
        "Fantasy book",
        10,
        1,
        false,
        "Paper",
        "Brown",
        "Living Room",
        false,
        "J.R.R. Tolkien",
        "Fantasy",
      );
      box.addItem(book);
      expect(box.findItem(book)).to.equal(book);
    });

    it("should not add a Book item if it exceeds the max weight", () => {
      const box = new Box<Book>(10, 10);
      const book = new Book(
        "The Hobbit",
        "Fantasy book",
        20,
        1,
        false,
        "Paper",
        "Brown",
        "Living Room",
        false,
        "J.R.R. Tolkien",
        "Fantasy",
      );
      expect(() => box.addItem(book)).to.throw(
        "Cannot add item, box would be over maximum weight",
      );
    });

    it("should not add a Book item if it exceeds the max items", () => {
      const box = new Box<Book>(100, 1);
      const book1 = new Book(
        "The Hobbit",
        "Fantasy book",
        10,
        1,
        false,
        "Paper",
        "Brown",
        "Living Room",
        false,
        "J.R.R. Tolkien",
        "Fantasy",
      );
      const book2 = new Book(
        "The Lord of the Rings",
        "Fantasy book",
        10,
        1,
        false,
        "Paper",
        "Brown",
        "Living Room",
        false,
        "J.R.R. Tolkien",
        "Fantasy",
      );
      box.addItem(book1);
      expect(() => box.addItem(book2)).to.throw("Cannot add item, box is full");
    });

    it("should remove a Book item from the box", () => {
      const box = new Box<Book>(100, 10);
      const book = new Book(
        "The Hobbit",
        "Fantasy book",
        10,
        1,
        false,
        "Paper",
        "Brown",
        "Living Room",
        false,
        "J.R.R. Tolkien",
        "Fantasy",
      );
      box.addItem(book);
      box.removeItem(book);
      expect(box.findItem(book)).to.be.undefined;
    });

    it("should throw an error when trying to remove a Book item that is not in the box", () => {
      const box = new Box<Book>(100, 10);
      const book = new Book(
        "The Hobbit",
        "Fantasy book",
        10,
        1,
        false,
        "Paper",
        "Brown",
        "Living Room",
        false,
        "J.R.R. Tolkien",
        "Fantasy",
      );
      expect(() => box.removeItem(book)).to.throw(
        "Cannot remove item, item not found in the box",
      );
    });

    it("should find a Book item in the box", () => {
      const box = new Box<Book>(100, 10);
      const book = new Book(
        "The Hobbit",
        "Fantasy book",
        10,
        1,
        false,
        "Paper",
        "Brown",
        "Living Room",
        false,
        "J.R.R. Tolkien",
        "Fantasy",
      );
      box.addItem(book);
      expect(box.findItem(book)).to.equal(book);
    });

    it("should not find a Book item in the box", () => {
      const box = new Box<Book>(100, 10);
      const book = new Book(
        "The Hobbit",
        "Fantasy book",
        10,
        1,
        false,
        "Paper",
        "Brown",
        "Living Room",
        false,
        "J.R.R. Tolkien",
        "Fantasy",
      );
      expect(box.findItem(book)).to.be.undefined;
    });

    it("should list all items in the box", () => {
      const box = new Box<Furniture>(100, 10);
      const furniture1 = new Furniture(
        "Chair",
        "Wooden chair",
        10,
        1,
        false,
        "Wood",
        "Brown",
        "Living Room",
        false,
        { length: 1, width: 1, height: 1 },
      );
      const furniture2 = new Furniture(
        "Table",
        "Wooden table",
        20,
        1,
        false,
        "Wood",
        "Brown",
        "Living Room",
        false,
        { length: 1, width: 1, height: 1 },
      );
      box.addItem(furniture1);
      box.addItem(furniture2);
      expect(box.listItems()).to.equal(undefined);
    });

    it("should list all items in the box", () => {
      const box = new Box<Clothing>(100, 10);
      const clothing1 = new Clothing(
        "Shirt",
        "Cotton shirt",
        5,
        1,
        false,
        "Cotton",
        "White",
        "Bedroom",
        false,
        "M",
      );
      const clothing2 = new Clothing(
        "Pants",
        "Cotton pants",
        10,
        1,
        false,
        "Cotton",
        "White",
        "Bedroom",
        false,
        "M",
      );
      box.addItem(clothing1);
      box.addItem(clothing2);
      expect(box.listItems()).to.equal(undefined);
    });

    it("should list all items in the box", () => {
      const box = new Box<Book>(100, 10);
      const book1 = new Book(
        "The Hobbit",
        "Fantasy book",
        10,
        1,
        false,
        "Paper",
        "Brown",
        "Living Room",
        false,
        "J.R.R. Tolkien",
        "Fantasy",
      );
      const book2 = new Book(
        "The Lord of the Rings",
        "Fantasy book",
        10,
        1,
        false,
        "Paper",
        "Brown",
        "Living Room",
        false,
        "J.R.R. Tolkien",
        "Fantasy",
      );
      box.addItem(book1);
      box.addItem(book2);
      expect(box.listItems()).to.equal(undefined);
    });
  });
});
