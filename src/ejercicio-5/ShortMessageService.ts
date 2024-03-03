import { NotificationService } from "./NotificationService";

export class ShortMessageService implements NotificationService {
  notify(message: string): void {
    console.log(`Sending notification by SMS: ${message}`);
  }
}
