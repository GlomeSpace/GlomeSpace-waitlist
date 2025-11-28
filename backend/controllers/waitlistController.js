import { Email } from "../models/waitlistModel";

/*
endpoint: get-emails
receives: nothing
does: queries the database for a list of all the emails available
returns: a list of emails available in the database
*/
const getEmails = async (req, res) => {
  // todo
};

/*
endpoint: add-email
receives: an email
does: adds the email to the database, sends an email notification with a verification endpoint
returns: nothing
*/
const addEmail = async (req, res) => {
  // todo
};

/*
endpoint: verify-email
receives: unique verification id
does: queries the email database for the verification id and sets the verification field to true if the entry exists
returns: nothing
*/
const verifyEmail = async (req, res) => {
  // todo
};
