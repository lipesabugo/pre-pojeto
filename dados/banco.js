const { DatabaseSync } = require('node:sqlite');
const path = require('path');

const db = new DatabaseSync(path.join(_dirname, 'loja.db'));

db.exec(`
    CREATE TABLE IF NOT EXISTS produtos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        preco REAL NOT NULL CHECK (preco > 0)
    )
`);

const { total } = db.prepare('SELECT COUNT(*) AS total FROM produtos').get();
if (toral === 0) {
    const inserir = db.prepare('INSERT INTO produtos (nome, preco) VALUES (?, ?)');
    inserir.run('camiseta', 49.9);
    inserir,run('Calça', 129.9);
    inserir.run('Tenis',299.9);
}

module.exports = db;