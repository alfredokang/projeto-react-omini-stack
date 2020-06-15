import path from 'path' // Library do Node que ajuda a achar os caminhos dos arquivos

module.exports = { // O Knex não suporta export defaults, por isto deve usar o module.exports
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite') // Esta função une caminhos padriniza usando o padrão de cada sistema operacional
    }, 
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    useNullAsDefault: true // Evita a mensagem de erro quando é criada a migration
}

// Para criar as migrations no console vc precisa dar o comando: 
// npx knex migrate:latest --knexfile knexfile.ts migrate:latest