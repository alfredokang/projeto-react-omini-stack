import Knex from 'knex' // Por padrão usamos a letra maiúscula para variáveis de bibliotecas nativas

export async function up(knex: Knex) {
    // Cria a tabela
    return knex.schema.createTable('point_items', table => {
        table.increments('id').primary() // Sempre tem um campo principal que é o identificador
        table.integer('point_id').notNullable().references('id').inTable('points') // Cria a chave estrangeira associando o id a tabela points
        table.integer('item_id').notNullable().references('id').inTable('items')
    })
}

export async function down(knex: Knex) {
    // Deleta a tabela criada
    return knex.schema.dropTable('point_items')
}