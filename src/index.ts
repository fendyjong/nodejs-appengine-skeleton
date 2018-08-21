import * as express from 'express'

const app = express()

app.get('/', (req, res) => {
	res.send('Hello World!')
})

const server = app.listen(8080, () => {
	const host = 'localhost'
	const port = server.address().port

	console.info(`Example app listening at http://${host}:${port}`)
})
