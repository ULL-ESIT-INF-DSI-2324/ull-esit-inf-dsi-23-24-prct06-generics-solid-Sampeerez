import { NotificationService } from "./NotificationService";

export class EmailService implements NotificationService {
  notify(message: string): void {
    console.log(`Sending notification by email: ${message}`);
  }
}
