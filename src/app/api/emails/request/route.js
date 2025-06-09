import { NextResponse } from "next/server";
import sgMail from '@sendgrid/mail';

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

    // Initialize SendGrid with API key
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // Set up email data for the recipient
    const recipientMsg = {
      to: "noreply@rapidhrconnect.com",
      from: "noreply@rapidhrconnect.com",
      subject: "Consultation Request Confirmation",
      text: `Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Service Type: ${serviceType}
      Detailed Description of Needs: ${description}
      Goals and Objectives: ${goals}
      Preferred Contact Method: ${method}
      Preferred Contact Time: ${time}
      Additional Information: ${additional}`,
    };

    // Set up email data for the client
    const clientMsg = {
      to: email,
      from: "noreply@rapidhrconnect.com",
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
                <p style="text-align: left; font-size: 16px;color:#202020;">Thank you for contacting Rapid HR Connect! We've received your inquiry, and one of our team members will review it shortly. We strive to respond to all inquiries as quickly as possible, so you can expect to hear back from us within 24 hours.</p>
                <p style="text-align: left; font-size: 16px;color:#202020;">In the meantime, if you have any additional details or questions, please feel free to reply directly to this email. We are committed to providing you with the best possible HR solutions.</p>
                <p style="text-align: left; font-size: 16px;color:#202020;">We appreciate your interest in Rapid HR Connect and look forward to assisting you with your HR needs.</p>
                <h2 style="text-align: left; font-size: 20px;color:#202020;">Best regards,<br>The Rapid HR Connect Team</h2>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <td style="padding: 24px 40px;background: #068E2A;background-size:cover;font-size: 20px;text-decoration: none;color: #ffffff;text-align: center;">
              Thanks for using <a href="https://rapidhrconnect.com" style="color: #fff;font-size: 20px;text-decoration: none;">rapidhrconnect.com</a>
            </td>
          </tfoot>
        </table>
      `,
    };

    // Send both emails
    await Promise.all([
      sgMail.send(recipientMsg),
      sgMail.send(clientMsg)
    ]);

    return NextResponse.json({ message: "Success: emails were sent" });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.status(500).json({
      message: "COULD NOT SEND MESSAGE",
      error: error.message,
    });
  }
}
