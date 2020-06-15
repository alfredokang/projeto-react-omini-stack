import Knex from 'knex' // Por padrão usamos a letra maiúscula para variáveis de bibliotecas nativas

export async function up(knex: Knex) {
    // Cria a tabela
    return knex.schema.createTable('points', table => {
        table.increments('id').primary() // Sempre tem um campo principal que é o identificador
        table.string('image').notNullable()
        table.string('name').notNullable()
        table.string('email').notNullable()
        table.string('whatsapp').notNullable()
        table.decimal('latitude').notNullable()
        table.decimal('longitude').notNullable()
        table.string('city').notNullable()
        table.string('uf', 2).notNullable()
    })
}

export async function down(knex: Knex) {
    // Deleta a tabela criada
    return knex.schema.dropTable('points')
}