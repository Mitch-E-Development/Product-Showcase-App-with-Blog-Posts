// const Message = require("../models/messageModel");
const axios = require('axios');
const config = require('../config')

exports.sendMessage = async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const response = await axios.post(config.MESSAGING_URL, {
        name,
        email,
        subject,
        message,
      }, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error submitting form:", error);
    res
      .status(500)
      .json({ error: "An error occurred while submitting the form" });
  }
};
