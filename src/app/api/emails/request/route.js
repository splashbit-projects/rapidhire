import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");
const { google } = require("googleapis");

export async function POST(request) {
  try {
    const requestBody = await request.text();
    const bodyJSON = JSON.parse(requestBody);
    const {
      name,
      email,
      phone,
      serviceType,
      description,
      goals,
      method,
      time,
      additional,
    } = bodyJSON;

    // OAuth2 Configuration
    const CLIENT_ID = process.env.GMAIL_CLIENT_ID;
    const CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET;
    const REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN;
    const REDIRECT_URI = "https://developers.google.com/oauthplayground";

    const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

    // Get Access Token
    const accessToken = await oauth2Client.getAccessToken();

    // Configure nodemailer with OAuth2
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL_USER, // Your Gmail email
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken.token,
      },
      tls: {
        rejectUnauthorized: false, // This bypasses certificate validation
      },
    });

    // Set up email data for the recipient
    const mailOptionsRecipient = {
      from: '"Rapid HR Connect" <noreply@rapidhrconnect.com>', // Sender address
      to: "noreply@rapidhrconnect.com", // Change to your recipient's email
      subject: "Consultation Request Confirmation",
      text: `Name: ${name}\n
      Email: ${email}\n
      Phone: ${phone}\n
      Service Type: ${serviceType}\n
      Detailed Description of Needs: ${description}\n
      Goals and Objectives: ${goals}\n
      Preferred Contact Method: ${method}\n
      Preferred Contact Time: ${time}\n
      Additional Information: ${additional}`,
    };

    // Set up email data for the client
    const mailOptionsClient = {
      from: '"Rapid HR Connect" <noreply@rapidhrconnect.com>', // Sender address
      to: email, // Client's email
      subject: "Consultation Request Confirmation",
      html: `
        <table width="640" style="border-collapse: collapse; margin: 0 auto; font-style: sans-serif">
          <thead>
            <tr>
              <td>
                <img style="width: 100%" src="https://rapidhrconnect.com/images/email_header.png" />
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 40px">
                <h2 style="text-align: left; font-size: 20px;color:#202020;">Dear ${name},</h2>
                <p style="text-align: left; font-size: 16px;color:#202020;">Thank you for contacting Rapid HR Connect! We’ve received your inquiry, and one of our team members will review it shortly. We strive to respond to all inquiries as quickly as possible, so you can expect to hear back from us within 24 hours.
        </p>
                <p style="text-align: left; font-size: 16px;color:#202020;">In the meantime, if you have any additional details or questions, please feel free to reply directly to this email. We are committed to providing you with the best possible HR solutions.
        </p>
                <p style="text-align: left; font-size: 16px;color:#202020;">We appreciate your interest in Rapid HR Connect and look forward to assisting you with your HR needs.</p>
                <h2 style="text-align: left; font-size: 20px;color:#202020;"> Best regards,<br>The Rapid HR Connect Team</h2>
              </td>
            </tr>
          </tbody>
          <tfoot >
                <td style="padding: 24px 40px;background: #068E2A;background-size:cover;font-size: 20px;text-decoration: none;color: #ffffff;text-align: center;">
                  Thanks for using <a href="https://rapidhrconnect.com" style="color: #fff;font-size: 20px;text-decoration: none;">rapidhrconnect.com</a>
                </td>
                </tfoot>
        </table>
      `,
    };

    // Send email to the recipient
    await transporter.sendMail(mailOptionsRecipient);
    // Send email to the client
    await transporter.sendMail(mailOptionsClient);

    return NextResponse.json({ message: "Success: emails were sent" });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.status(500).json({
      message: "COULD NOT SEND MESSAGE",
      error: error.message,
    });
  }
}
