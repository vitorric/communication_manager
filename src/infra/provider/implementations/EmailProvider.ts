import fs from 'fs';

import nodemailer from 'nodemailer';
import { v4 as uuid } from 'uuid';

import { MailService } from '@sendgrid/mail';
import { IEmailProvider } from '@application/provider/IEmailProvider';
import { EmailProviderDomain } from '@domain/provider/EmailProviderDomain';

class EmailProvider implements IEmailProvider {
  async send(
    message: EmailProviderDomain.Send,
  ): Promise<EmailProviderDomain.Return> {
    try {
      if (process.env.SEND_EMAIL_ENABLED === 'true') {
        return this.mailTrapEmail(message);
      }
      return this.sendGridEmail(message);
    } catch (err) {
      console.log('EMAIL SENT ERROR: ', err);
      return null;
    }
  }

  private async mailTrapEmail(
    message: EmailProviderDomain.Send,
  ): Promise<EmailProviderDomain.Return> {
    const transport = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 587,
      requireTLS: true,
      tls: {
        ciphers: 'SSLv3',
      },
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      },
    });

    const msg = {
      to: message.to,
      from: `${message.sender.name} <${message.sender.email}>`,
      subject: message.title,
      html: message.html,
      attachments: [],
    };

    if (message.files) {
      for (const element of message.files) {
        const attachment = fs.readFileSync(element.path).toString('base64');

        msg.attachments.push({
          content: attachment,
          filename: element.name,
          type: 'application/pdf',
          disposition: 'attachment',
          encoding: 'base64',
        });
      }
    }

    const error: boolean = await new Promise((resolve, reject) => {
      transport
        .sendMail(msg)
        .then(() => {
          console.log('email sent to mailtrap');
          resolve(false);
        })
        .catch((err) => {
          console.log(err);
          reject(new Error('Error sent emailtrap'));
        });
    });

    return {
      error,
      return: {
        eventId: uuid(),
      },
    };
  }

  private async sendGridEmail(message: EmailProviderDomain.Send): Promise<any> {
    const sgConfig = {
      apikey: process.env.SENDGRID_API_KEY,
      name: message.sender.name,
      fromMail: message.sender.email,
    };

    const sgMail = new MailService();
    sgMail.setApiKey(sgConfig.apikey);

    const msg = {
      to: message.to,
      from: `${sgConfig.name} <${sgConfig.fromMail}>`,
      subject: message.title,
      html: message.html,
      attachments: [],
    };

    if (message.files) {
      for (const element of message.files) {
        const attachment = fs.readFileSync(element.path).toString('base64');

        msg.attachments.push({
          content: attachment,
          filename: element.name,
          type: 'application/pdf',
          disposition: 'attachment',
        });
      }
    }

    const eventId = uuid();

    await sgMail.send({
      ...msg,
      customArgs: {
        eventId,
      },
    });

    return {
      eventId,
    };
  }
}

export const emailProvider = new EmailProvider();
