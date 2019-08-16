const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const welcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "memanejaz97@gmail.com",
    subject: "Welcome!",
    text: `Hey ${name}, thansk for joining us!`
  });
};

const byeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "memanejaz97@gmail.com",
    subject: "Alas :(",
    text: `We are sorry to leave you ${name}, thanks for being with us!`
  });
};

module.exports = {
  welcomeEmail,
  byeEmail
};
