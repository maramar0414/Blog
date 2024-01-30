/*import nodemailer from "nodemailer";

// Replace the email and password values with a string containing your email and password
const email = '<your-gmail-goes-here>'
const password = '<your-gmail-password-goes-here>'

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: password,
  },
});
export default async function handler(req, res) {
  if (req.method === "POST") {
    const formValues = req.body;
    
    // Server-side form validation
    if (
      !formValues.message
    )
      return res
        .status(400)
        .json({ message: "Failed: Missing Required Values" });
    try {
      // Validate email and send form values to the validated email
      await transporter.sendMail({
        from: email,
        to: email,
        text: `
        Name: ${formValues.username}
        Email: ${formValues.email}
        Message: ${formValues.message}`,
        subject: formValues.subject,
      });
      return res
        .status(200)
        .json({ message: "Success: Message sent" });
    } catch (error) {
      return res.status(400).json({
        message: `Failed: ${error.message}`,
      });
    }
  }
}
*/