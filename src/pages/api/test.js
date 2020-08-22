const { google } = require('googleapis')
const path = require('path')
const { v4: uuidv4 } = require('uuid')

// https://stackoverflow.com/questions/60574191/what-keyfile-key-does-google-auth-googleauth-need
// Aca usan JWT
// https://github.com/theoephraim/node-google-spreadsheet/blob/250c702ae07212721f0aabe454cd2b17c0ec5ade/lib/GoogleSpreadsheet.js#L77

const sheets = google.sheets('v4')

export default async (req, res) => {
  let auth
  let result
  try {
    auth = new google.auth.GoogleAuth({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })
  } catch (err) {
    result = { success: false, err: err.message }
    res.json(result ? { ...result } : null)
    return
  }

  // const ownersData = req.body
  // we add a special id
  // ownersData.uid = uuidv4()

  google.options({ auth })

  // we check if the first row has values
  let dataFirstRow
  try {
    result = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREAD_SHEET_ID,
      range: '1:1',
    })
  } catch (err) {
    result = { success: false, err: err.message }
    res.json(result ? { ...result } : null)
    return
  }

  res.json(result ? { ...result } : null)
}
