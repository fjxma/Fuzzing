const mysql = require('mysql2');
const conn = mysql.createConnection({
    host: 'db', user: 'dbuser', 
    password: '1d9a73956ca666f99b409c05a6a2a9ee', 
    database: 'ecommerce'
});
conn.connect(err => {
    if (err) { console.log('❌ Failed:', err.message); return; }
    console.log('✅ Connected!');
    conn.query('SELECT COUNT(*) as count FROM users', (err, res) => {
        console.log('Users:', err ? err.message : res[0].count);
        conn.end();
    });
});
