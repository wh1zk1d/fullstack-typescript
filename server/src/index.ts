import express from 'express'
import namor from 'namor'
import cors from 'cors'

const app = express()
const port = 8080

app.use(cors())

app.get('/', (req, res) => {
  const name = namor.generate()
  res.status(200).json({ name })
})

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`)
})
