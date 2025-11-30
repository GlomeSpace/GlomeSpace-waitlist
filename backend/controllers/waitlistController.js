import fs from "fs";
import mongoose from "mongoose";
import nodemailer from "nodemailer";
import { Email } from "../models/waitlistModel.js";

const VALID_EMAIL = /^[A-z]+[0-9]*@[A-z]+(\.[A-z]+)+$/;

/*
endpoint: /
method: get
receives: nothing
does: queries the database for a list of all the emails available
returns: a list of emails available in the database
*/
const getEmails = async (req, res) => {
  const emails = await Email.find({}).lean();
  if (!emails?.length) {
    return res.status(404).json({ message: "no emails found." });
  }
  return res.status(200).json(emails);
};

/*
endpoint: /
method: post
receives: an email
does: adds the email to the database, sends an email notification with a verification endpoint
returns: nothing
*/
const addEmail = async (req, res) => {
  const { email } = req.body;
  if (!email.trim()) {
    return res.status(400).json({ message: "An email address is required." });
  }
  if (!VALID_EMAIL.test(email)) {
    return res.status(400).json({ message: "Invalid email address." });
  }
  // const newEntry = await Email.create({ email });

  // sending the first email
  const transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    dkim: {
      domainName: "glomespace.com",
      keySelector: "default",
      privateKey: fs.readFileSync("./privateKeyDKIM.pem", "utf8"),
    },
    auth: {
      user: "arihoseth@glomespace.com",
      pass: "CMglomespace1",
    },
  });
  const messageTemplate = `
  <div>
    <p>
      Hi ${email}, Thank you for signing up! We're thrilled to confirm your spot on the official waitlist for GlomeSpace. 
      You're one of the first people who will get access to GlomeSpace services, the new platform that lets you connect 
      packages with verified travelers heading to the right location and ship as fast as possible
    </p>
  
    <h4>
      Next, we’re working hard to prepare for launch. Here’s what you can expect:
    </h4>
    <ol>
      <li>
        Priority Access: You will be among the first users invited to download and use the app when we go live.
      </li>
      <li>
        Updates: We'll send you occasional emails with exciting product milestones, beta testing opportunities, 
        and the official launch date, unless you subscribed to our newsletter.
      </li>
      <li>
        We value your inbox! We'll only contact you with essential launch news and updates.
      </li>
      <li>
        Get Noticed Sooner! Want to jump the line? Share the waitlist link with friends! 
        We can't wait to help you ship smarter and travel lighter. See you on launch day!
      </li>
    </ol>
    
    <span>Best Regards,</span><br>
    <span>Ariho Seth</span><br>
    <span>Founder & CEO,</span><br>
    <span>GlomeSpace | GlomeSpace.com</span>
  </div>
  `;
  const info = await transporter.sendMail({
    from: "'Ariho Seth' <arihoseth@glomespace.com>",
    to: email,
    subject: "GlomeSpace",
    text: "You joined our mailing list",
    html: messageTemplate,
  });
  console.log(info);

  res.status(201).json({ message: "email added." });
};

/*
endpoint: verify-email
method: post
receives: unique verification id
does: queries the email database for the verification id and sets the verification field to true if the entry exists
returns: nothing
*/
const verifyEmail = async (req, res) => {
  const { verificationCode } = req.body;
  if (!verificationCode) {
    return res
      .status(400)
      .json({ message: "verification code is not provided." });
  }
  const email = await Email.findOne({ verificationCode });
  if (!email) {
    return res.status(404).json({
      message:
        "verification failed. No email matches the provided verification Id.",
    });
  }
  email.verified = true;
  await email.save();
  res.status(200).json({ message: "email successfully verified." });
};

/*
endpoint: unsubscribe
method: post
receives: email track id
does: queries the db for the email track Id and sets unsubscribed fiela to true
returns: nothing
*/
const unsubscribe = async (req, res) => {
  const { emailId } = req.body;
  if (!emailId) {
    return res.status(400).json({ message: "email Id is not provided." });
  }
  if (!mongoose.Types.ObjectId.isValid(emailId)) {
    return res
      .status(400)
      .json({ message: "the email id you provided is invalid." });
  }
  const email = await Email.findById(emailId);
  if (!email) {
    return res.status(404).json({ messgae: "email not found." });
  }
  email.unsubscribed = true;
  res.status(200).json({ messgae: "successfully unsubscribed." });
};

export default {
  getEmails,
  addEmail,
  verifyEmail,
  unsubscribe,
};
