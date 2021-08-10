var faunadb = require("faunadb"),
  q = faunadb.query

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async event => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" }
  }
  try {
    var infoBody = JSON.parse(event.body)
    var adminClient = new faunadb.Client({
      secret: "fnAEP8BETdACDP0cwQMeR423anL2pF7dWPC-O-U-",
    })
    const result = await adminClient.query(
      q.Create(q.Collection("add_info"), {
        data: {
          name: infoBody.name,
          fatherName: infoBody.fatherName,
          number: infoBody.number,
        },
      })
    )
    return {
      statusCode: 200,
      body: JSON.stringify({ id: result.ref.id }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
