import { FileReader } from "./FileReader";
import { FileWriter } from "./FileWriter";
import { FileManager } from "./FileManager";

const fileReader = new FileReader();
const fileWriter = new FileWriter();
const fileManager = new FileManager("example.txt", fileReader, fileWriter);

const currentContent = fileManager.readFile();
console.log("Current content:", currentContent);

const newData = "This is new content to be written into the file.";
fileManager.writeFile(newData);

const updatedContent = fileManager.readFile();
console.log("Updated content:", updatedContent);
