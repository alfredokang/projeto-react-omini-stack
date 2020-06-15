import express from 'express'
import cors from 'cors'
import path from 'path'
import routes from './routes'

const app = express()
app.use(cors())
app.use(express.json()) 
app.use(routes)

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads'))) // Função que serve artigos estáticos, __dirname pega o diretório atual, para chegar no diretório upload precisa voltar uma pasta '..'

app.listen(3333)

