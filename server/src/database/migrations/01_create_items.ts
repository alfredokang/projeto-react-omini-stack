import Knex from 'knex' // Por padrão usamos a letra maiúscula para variáveis de bibliotecas nativas

export async function up(knex: Knex) {
    // Cria a tabela
    return knex.schema.createTable('items', table => {
        table.increments('id').primary() // Sempre tem um campo principal que é o identificador
        table.string('image').notNullable()
        table.string('title').notNullable()
    })
}

export async function down(knex: Knex) {
    // Deleta a tabela criada
    return knex.schema.dropTable('items')
}