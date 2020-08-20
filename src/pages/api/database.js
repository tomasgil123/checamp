const { google } = require('googleapis')
const path = require('path')
const { v4: uuidv4 } = require('uuid')

const sheets = google.sheets('v4')

export default async (req, res) => {
  let auth
  let result
  try {
    auth = new google.auth.GoogleAuth({
      keyFile: path.join(path.resolve('.'), 'client_secret.json'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })
  } catch (err) {
    result = { success: false, err: err.message }
    res.json(result ? { ...result } : null)
    return
  }

  const ownersData = req.body
  // we add a special id
  ownersData.uid = uuidv4()

  google.options({ auth })

  // we check if the first row has values
  let dataFirstRow
  try {
    dataFirstRow = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREAD_SHEET_ID,
      range: '1:1',
    })
  } catch (err) {
    result = { success: false, err: err.message }
    res.json(result ? { ...result } : null)
    return
  }
  // If first row does not have values it means the sheet does not have column names
  // we will add them
  if (!dataFirstRow.data.values) {
    try {
      result = await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.SPREAD_SHEET_ID,
        range: '1:1',
        valueInputOption: 'RAW',
        requestBody: {
          values: [Object.keys(ownersData)],
        },
      })
    } catch (err) {
      result = { success: false, err: err.message }
      res.json(result ? { ...result } : null)
      return
    }
  }

  // we add a new row
  try {
    result = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREAD_SHEET_ID,
      range: '1:1',
      valueInputOption: 'RAW',
      requestBody: {
        values: [Object.values(ownersData)],
      },
    })
    result.success = true
  } catch (err) {
    result = { success: false, err: err.message }
    res.json(result ? { ...result } : null)
    return
  }

  res.json(result ? { ...result } : null)
}
