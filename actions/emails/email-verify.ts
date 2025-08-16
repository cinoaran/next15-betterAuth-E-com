import {render} from "@react-email/components";
import nodemailer from "nodemailer";
import {VerifyUserEmail} from "@/emails/VerifyEmailAddress";

export const verifyEmail = async ({
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
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
    logger: true,
    debug: true,
  });

  const VerifyEmailAddressHtml = await render(
    VerifyUserEmail({verificationUrl, username})
  );

  const mailOptions = {
    from: from,
    to: to.toLocaleLowerCase().trim(),
    subject: subject.trim(),
    html: VerifyEmailAddressHtml,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    console.error("Error sending email: ", error);
    return {
      error: "Failed to send email",
    };
  }
};
