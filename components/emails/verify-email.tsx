import React from "react";

interface EmailVerifyProps {
  verificationUrl: string;
}

const EmailVerify: React.FC<EmailVerifyProps> = ({verificationUrl}) => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        margin: "0",
        padding: "0",
        backgroundColor: "#f4f4f4",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "20px auto",
          backgroundColor: "#ffffff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            textAlign: "center",
            padding: "10px 0",
            backgroundColor: "#4caf50",
            color: "#ffffff",
            borderRadius: "8px 8px 0 0",
          }}
        >
          <h1>Email Verification</h1>
        </div>
        <div
          style={{
            padding: "20px",
            color: "#333333",
            lineHeight: "1.6",
          }}
        >
          <p>Hi there,</p>
          <p>
            Thank you for signing up! Please verify your email address by
            clicking the button below:
          </p>
          <a
            href={verificationUrl}
            style={{
              display: "inline-block",
              padding: "10px 20px",
              margin: "20px 0",
              backgroundColor: "#4caf50",
              color: "#ffffff",
              textDecoration: "none",
              borderRadius: "5px",
              fontWeight: "bold",
            }}
          >
            Verify Email
          </a>
          <p>
            If you did not sign up for this account, you can safely ignore this
            email.
          </p>
        </div>
        <div
          style={{
            textAlign: "center",
            padding: "10px",
            fontSize: "12px",
            color: "#777777",
          }}
        >
          <p>&copy; 2025 Your Company. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default EmailVerify;
