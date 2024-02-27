const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors"); // Import the cors middleware

const app = express();
const port = 3001; // Choose the port you want to use

app.use(cors()); // Enable CORS for all routes
// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Define your route to handle form submissions
app.post("/submit-form", async (req, res) => {
  const { username, tel, email, city, category, time, agreetoterms } = req.body;
  console.log(req.body);

  try {
    // Process form data and send email using nodemailer

    // Example nodemailer setup (you may need to configure this)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "saikumargeeri@gmail.com", // Your Gmail email
        pass: "inqpsloqqpjcoldj", // Your Gmail password
      },
    });

    const mailOptions = {
      from: "saikumargeeri@gmail.com",
      to: "newdirectionsmedia.ai@gmail.com",
      subject: "Enquiry from Health-care Contact",
      html: `
      <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#dedede">
      <tr>
          <td align="center" valign="top">
              <table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell">
                  <tr>
                      <td class="td container" style="width:650px; min-width:650px; font-size:0pt; line-height:0pt; margin:0; font-weight:normal; padding:55px 0px;">
                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                  <td>
                                      <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff" >
                                          <tr>
                                              <td class="p30-15" style="padding: 50px 30px;">
                                                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="padding-left:50px;">
                                                      <tr>
                                                          <td class="text pb20" style="color:#777777; font-family:\'Noto Sans\', Arial,sans-serif; font-size:13px; line-height:15px; text-align:left; padding-top:20px; width:30%;"><b> Name :</b>  </td>
                                                          <td class="text pb20" style="color:#777777; font-family:\'Noto Sans\', Arial,sans-serif; font-size:13px; line-height:15px; text-align:left; padding-top:20px;">  ${username} </td>
                                                      </tr>
                                                      <tr>
                                                          <td class="text pb20" style="color:#777777; font-family:\'Noto Sans\', Arial,sans-serif; font-size:13px; line-height:15px; text-align:left; padding-top:20px; width:30%;"> <b> Mobile NO :</b>  </td>
                                                          <td class="text pb20" style="color:#777777; font-family:\'Noto Sans\', Arial,sans-serif; font-size:13px; line-height:15px; text-align:left; padding-top:20px;"> ${tel} </td>
                                                      </tr>
                                                      <tr>
                                                          <td class="text pb20" style="color:#777777; font-family:\'Noto Sans\', Arial,sans-serif; font-size:13px; line-height:15px; text-align:left; padding-top:20px; width:30%;"> <b> Email ID :</b>  </td>
                                                          <td class="text pb20" style="color:#777777; font-family:\'Noto Sans\', Arial,sans-serif; font-size:13px; line-height:15px; text-align:left; padding-top:20px;">  ${email} </td>
                                                      </tr>
                                                      <tr>
                                                          <td class="text pb20" style="color:#777777; font-family:\'Noto Sans\', Arial,sans-serif; font-size:13px; line-height:15px; text-align:left; padding-top:20px; width:30%;"> <b> City :</b>  </td>
                                                          <td class="text pb20" style="color:#777777; font-family:\'Noto Sans\', Arial,sans-serif; font-size:13px; line-height:15px; text-align:left; padding-top:20px;">  ${city}</td>
                                                      </tr>
                                                      <tr>
                                                          <td class="text pb20" style="color:#777777; font-family:\'Noto Sans\', Arial,sans-serif; font-size:13px; line-height:15px; text-align:left; padding-top:20px; width:30%;"> <b> Category :</b>  </td>
                                                          <td class="text pb20" style="color:#777777; font-family:\'Noto Sans\', Arial,sans-serif; font-size:13px; line-height:15px; text-align:left; padding-top:20px;"> ${category}</td>
                                                      </tr>
                                                
                                                      <tr>
                                                          <td class="text pb20" style="color:#777777; font-family:\'Noto Sans\', Arial,sans-serif; font-size:13px; line-height:15px; text-align:left; padding-top:20px; width:30%;"> <b> Schedule Time :</b>  </td>
                                                          <td class="text pb20" style="color:#777777; font-family:\'Noto Sans\', Arial,sans-serif; font-size:13px; line-height:15px; text-align:left; padding-top:20px;">  ${time} </td>
                                                      </tr

                                               
                                                
                                                      
                                                  </table>
                                              </td>
                                          </tr>
                                      </table>
                                  </td>
                              </tr>
                          </table>
                      </td>
                  </tr>
              </table>
          </td>
      </tr>
  </table>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent:", info.response);

    // Respond to the client
    res.json({ success: true });
  } catch (error) {
    console.error("Error processing form:", error);

    // Respond to the client with an error
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
