import knex from 'knex'
import path from 'path' // Library do Node que ajuda a achar os caminhos dos arquivos

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite') // Esta função une caminhos padriniza usando o padrão de cada sistema operacional
    },                                       // __dirname, retorna o caminho onde ele esta sendo executado
    useNullAsDefault: true // Evita a mensagem de erro quando é criada a migration
})

export default connection

// Vc criar as tabelas via JS através das migrations
// As migrations criam, atualizam e deletam tabelas