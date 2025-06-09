import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

export async function POST(request) {
  try {
    const requestBody = await request.text();
    const bodyJSON = JSON.parse(requestBody);
    const { name, email, phone, service, additional } = bodyJSON;

    // Initialize SendGrid with API key
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // Set up email data for the recipient
    const recipientMsg = {
      to: "noreply@rapidhrconnect.com",
      from: "noreply@rapidhrconnect.com",
      subject: "Order Form Submission",
      text: `Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}
Message: ${additional}`,
    };

    // Set up email data for the client
    const clientMsg = {
      to: email,
      from: "noreply@rapidhrconnect.com",
      subject: "Service Order Confirmation",
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
                <p style="text-align: left; font-size: 16px;color:#202020;">Thank you for your recent order with Rapid HR Connect! We are pleased to confirm that your order has been received and is being processed. Below are the details of your order:</p>

                <ul style="padding-left: 16px;">
                  <li style="text-align: left; font-size: 16px;color:#202020;"><b>Services Ordered:</b> ${service}</li>
                </ul>

                <p style="text-align: left; font-size: 16px;color:#202020;">To proceed with your order, we will email you our payment instructions. Once the payment has been completed, we will begin working on your services and update you on the progress.<br>
                  If you have any questions or need further assistance, please don't hesitate to contact us.
                </p>
                <p style="text-align: left; font-size: 16px;color:#202020;">Thank you for choosing Rapid HR Connect for your HR needs.</p>
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
    await Promise.all([sgMail.send(recipientMsg), sgMail.send(clientMsg)]);

    return NextResponse.json({ message: "Success: emails were sent" });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.status(500).json({
      message: "COULD NOT SEND MESSAGE",
      error: error.message,
    });
  }
}
