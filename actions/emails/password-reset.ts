import PasswordResetEmail from "@/emails/PasswordResetEmail";
import {render} from "@react-email/components";
import nodemailer from "nodemailer";

export const PasswordReset = async ({
  username,
  from,
  to,
  subject,
  verificationUrl,
}: {
  username: string;
  from: string;
  to: string;
  subject: string;
  verificationUrl: string;
}) => {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_SERVER,
    port: parseInt(process.env.MAIL_PORT || "587"),
    secure: true,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
    logger: true,
    debug: true,
  });

  const PasswordResetEmailHtml = await render(
    PasswordResetEmail({verificationUrl, username})
  );

  const mailOptions = {
    username: username,
    from: from,
    to: to.toLocaleLowerCase().trim(),
    subject: subject.trim(),
    html: PasswordResetEmailHtml,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    console.error("Error sending email: ", error);
    throw error;
  }
};
