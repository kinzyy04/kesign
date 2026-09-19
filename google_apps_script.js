/**
 * ============================================================================
 * KESIGN AGENCY - INQUIRY BACKEND SCRIPT (Google Apps Script)
 * ============================================================================
 * 
 * This script receives project brief submissions from kesign.me,
 * records them into a Google Sheet, and instantly sends an email alert
 * to kesign04@gmail.com.
 * 
 * ----------------------------------------------------------------------------
 * 📌 STEP-BY-STEP DEPLOYMENT INSTRUCTIONS (Takes 1 minute):
 * ----------------------------------------------------------------------------
 * 1. Open Google Sheets (https://sheets.new) while logged into your Google account.
 * 2. Name the spreadsheet "Kesign Website Inquiries".
 * 3. In row 1, add these column headers:
 *    Timestamp | Name | Phone | Email | Project Category
 * 4. In the top menu, click Extensions > Apps Script.
 * 5. Delete any code in the editor, and paste the entire code below.
 * 6. Click the disk icon (💾 Save).
 * 7. Click "Deploy" (blue button at top right) > "New deployment".
 * 8. In the dialog:
 *    - Click the gear icon ⚙️ next to "Select type" and choose "Web app".
 *    - Description: Kesign Contact Webhook
 *    - Execute as: "Me (kesign04@gmail.com)"
 *    - Who has access: "Anyone"  <--- ⚠️ CRUCIAL: Must be set to "Anyone"
 * 9. Click "Deploy".
 * 10. Click "Authorize access", choose your Google account, click "Advanced" > "Go to Untitled project (unsafe)", and click "Allow".
 * 11. Copy the "Web app URL" (ends with /exec).
 * 12. Paste that URL into src/components/ContactSection.jsx as GOOGLE_SCRIPT_URL.
 * 13. Deploy/push your website! Done!
 * ============================================================================
 */

function doPost(e) {
  try {
    var rawData = e.postData.contents;
    var data = {};
    
    try {
      data = JSON.parse(rawData);
    } catch (parseErr) {
      data = e.parameter || {};
    }

    var name = data.name || 'Anonymous';
    var phone = data.phone || 'Not provided';
    var email = data.email || 'Not provided';
    var project = data.project || 'General Inquiry';
    var timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    // 1. Record in Google Sheet
    try {
      var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
      sheet.appendRow([timestamp, name, phone, email, project]);
    } catch (sheetErr) {
      Logger.log("Sheet append error: " + sheetErr);
    }

    // 2. Format HTML Email Notification
    var htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e5e5; border-radius: 16px; background-color: #ffffff;">
        <div style="background: linear-gradient(135deg, #111111, #222222); padding: 20px; border-radius: 12px; margin-bottom: 24px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 22px; letter-spacing: -0.5px;">kesign<span style="color: #FF5733;">.</span></h1>
          <p style="color: #888888; margin: 6px 0 0 0; font-size: 12px; font-family: monospace; text-transform: uppercase; letter-spacing: 2px;">New Project Brief Received</p>
        </div>

        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 12px; margin-bottom: 24px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666666; font-size: 13px; font-weight: bold; width: 140px; text-transform: uppercase;">Client Name:</td>
              <td style="padding: 8px 0; color: #111111; font-size: 15px; font-weight: bold;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666666; font-size: 13px; font-weight: bold; text-transform: uppercase;">Phone Number:</td>
              <td style="padding: 8px 0; color: #111111; font-size: 15px;"><a href="tel:${phone}" style="color: #FF5733; text-decoration: none;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666666; font-size: 13px; font-weight: bold; text-transform: uppercase;">Email Address:</td>
              <td style="padding: 8px 0; color: #111111; font-size: 15px;"><a href="mailto:${email}" style="color: #FF5733; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666666; font-size: 13px; font-weight: bold; text-transform: uppercase;">Project / Scope:</td>
              <td style="padding: 8px 0; color: #111111; font-size: 15px; font-weight: 600;">${project}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666666; font-size: 13px; font-weight: bold; text-transform: uppercase;">Submitted At:</td>
              <td style="padding: 8px 0; color: #666666; font-size: 13px;">${timestamp} IST</td>
            </tr>
          </table>
        </div>

        <div style="text-align: center; margin-top: 20px;">
          <a href="mailto:${email}?subject=Kesign%20Design%20Studio%20-%20Regarding%20your%20project%20inquiry" style="background-color: #FF5733; color: #ffffff; padding: 12px 24px; border-radius: 9999px; text-decoration: none; font-weight: bold; font-size: 14px; display: inline-block;">Reply to Client</a>
        </div>

        <p style="text-align: center; color: #999999; font-size: 11px; margin-top: 28px;">
          Kesign Design Studio • IIT Delhi Founders
        </p>
      </div>
    `;

    // 3. Send Email Alert
    MailApp.sendEmail({
      to: "kesign04@gmail.com",
      replyTo: email !== 'Not provided' ? email : "kesign04@gmail.com",
      subject: "⚡ New Kesign Brief: " + name + " — " + project.split("—")[0].trim(),
      htmlBody: htmlBody
    });

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", message: "Inquiry received" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "active", message: "Kesign Webhook is running" }))
    .setMimeType(ContentService.MimeType.JSON);
}
