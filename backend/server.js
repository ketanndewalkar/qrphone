require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const nodemailer = require("nodemailer");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL, // Change to your frontend domain
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"], // Allowed methods
    credentials: true, // 🔥 Required to allow cookies
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/get-form-data", (req, res) => {
  console.log(req.body);
  try {
    const {
      first,
      middle,
      last,
      email,
      phone,
      companyName,
      companyCategory,
      country,
      description,
      address,
      message,
    } = req.body;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASSWORD, // Use an App Password, not your Gmail password
      },
    });

    // Step 2: Define mail options
    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.TO,
      subject: "Contact Form Submission",
      html: `
  <div style="max-width: 600px; margin: auto; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f9f9f9; border: 1px solid #ddd; padding: 30px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);">
    <h2 style="color: #2c3e50; border-bottom: 2px solid #2c3e50; padding-bottom: 10px; margin-bottom: 20px;">📩 New Contact Submission</h2>
    
    <p style="margin: 12px 0;"><strong>Name:</strong> ${first} ${middle} ${last}</p>
    <p style="margin: 12px 0;"><strong>Email:</strong> ${email}</p>
    <p style="margin: 12px 0;"><strong>Phone Number:</strong> ${phone}</p>
    <p style="margin: 12px 0;"><strong>Company Name:</strong> ${companyName}</p>
    <p style="margin: 12px 0;"><strong>Company Category:</strong> ${companyCategory}</p>
    <p style="margin: 12px 0;"><strong>Country:</strong> ${country}</p>
    <p style="margin: 12px 0;"><strong>Company Address:</strong><br><span style="color: #333;">${address}</span></p>
    <p style="margin: 12px 0;"><strong>Company Description:</strong><br><span style="color: #333;">${description}</span></p>
    <p style="margin: 12px 0;"><strong>Message:</strong><br><span style="color: #333;">${message}</span></p>
    
    <hr style="margin-top: 30px; border: none; border-top: 1px solid #ccc;">
    
  </div>
`,
    };

    // Step 3: Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error)
        res.status(500).send({
          msg: "error",
        });
      } else {
        console.log("Email sent:", info.response);
        res.status(200).send({
          msg: "Email sent successfully",
        });
      }
    });
    
  } catch (err) {
    console.log(err)
  }
});

app.post("/send-feedback",(req,res)=>{
  try {
    const {msg} = req.body;
    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASSWORD, // Use an App Password, not your Gmail password
      },
    });

    // Step 2: Define mail options
    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.TO,
      subject: "FeedBack Submission",
      html: `
  <div style="max-width: 600px; margin: auto; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f9f9f9; border: 1px solid #ddd; padding: 30px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);">
    <h2 style="color: #2c3e50; border-bottom: 2px solid #2c3e50; padding-bottom: 10px; margin-bottom: 20px;">📩 FeedBack Submission</h2>
    
    <p style="margin: 12px 0;"><strong>Message:</strong> ${msg}</p>
    
    
    <hr style="margin-top: 30px; border: none; border-top: 1px solid #ccc;">
    
  </div>
`,
    };

    // Step 3: Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error)
        res.status(500).send({
          msg: "error",
        });
      } else {
        console.log("Email sent:", info.response);
        res.status(200).send({
          msg: "Email sent successfully",
        });
      }
    });

  } catch (error) {
    console.log(error)
  }
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
