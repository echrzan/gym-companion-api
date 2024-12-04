import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import connectDatabase from '@configs/db.config'

dotenv.config()

const app: Express = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(express.json())

// Routes
app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'ok' })
})

// Start server
async function startServer() {
    try {
        await connectDatabase()
        app.listen(PORT, () =>
            console.log(`Server running on http://localhost:${PORT}`)
        )
    } catch (error) {
        console.error('Failed to start the server:', error)
    }
}
startServer()
