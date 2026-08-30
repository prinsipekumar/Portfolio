import dotenv from "dotenv";
import express from "express";
import Client from "../models/clientSchema.js";
import nodemailer from "nodemailer";

dotenv.config();

const router = express.Router();

// Creating Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

// Registering Client
router.post("/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone) {
    res.status(401).json({ status: 401, error: "All Input Required" });
  }

  try {
    const preClient = await Client.findOne({ email: email });

    if (preClient) {
      const clientMessage = await preClient.Messagesave(message);
      console.log(clientMessage);
      const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "Thank you for reaching out to me",
        text: `Hello ${name},\n\nThank you for contacting me! I have received your submission and I will get back to you as soon as possible.\n\nBest regards,\nPrince Kumar`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("error" + error);
        } else {
          console.log("Email sent" + info.response);
          res
            .status(201)
            .json({ status: 201, message: "Email Sent Successfully" });
        }
      });
    } else {
      const finalClient = new Client({
        name,
        email,
        phone,
        messages: [message],
      });

      const storeData = await finalClient.save();

      const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "Thank you for reaching out to me",
        text: `Hello ${name},\n\nThank you for contacting me! I have received your submission and I will get back to you as soon as possible.\n\nBest regards,\nPrince Kumar`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("error" + error);
        } else {
          console.log("Email sent" + info.response);
          res
            .status(201)
            .json({ status: 201, message: "Email Sent Successfully" });
        }
      });
      res.status(201).json({ status: 201, storeData });
    }
  } catch (error) {
    res.status(401).json({ status: 401, error: "All Input Required" });
    console.log("Error Caught");
  }
});

router.post;

export default router;
