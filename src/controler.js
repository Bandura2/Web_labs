const db = require('./database'); 

exports.read = (req, res) => {
    const { searchValue, selectedKind, selectedType } = req.query;

    let sqlSelect = 'SELECT * FROM table1';

    if (searchValue) {
        sqlSelect += ` WHERE name LIKE '%${searchValue}%'`;
    }

    if (selectedType && selectedType !== 'all') {
        if (searchValue) {
            sqlSelect += ` AND type = '${selectedType}'`;
        } else {
            sqlSelect += ` WHERE type = '${selectedType}'`;
        }
    }

    if (selectedKind !== "none") {
        sqlSelect += ` ORDER BY price ${selectedKind}`;
    }

    db.query(sqlSelect, (err, results) => {

        if (err) {
            res.status(500).json({ error: 'Database error' });
        } else {
            const data = results;
            const dataArray = data.map(row => ({
                id: row.id,
                name: row.name,
                price: row.price,
                description: row.description,
                type: row.type,
                image_name: row.image_name,
            }));

            res.setHeader('Content-Type', 'application/json');
            res.json( dataArray );
        }
    });
};

exports.getById = (req, res) => {
    const insectID = req.params.insectId;
  
    const sqlById = `SELECT * FROM table1 WHERE id = '${insectID}'`;
  
    db.query(sqlById, (err, results) => {
      if (err) {
        console.error('Database error:', err);
        res.status(500).json({ error: 'Database error' });
      } else {
        if (results.length > 0) {
          const insect = results.map(row => ({
            id: row.id,
            name: row.name,
            price: row.price,
            description: row.description,
            type: row.type,
            image_name: row.image_name,
          }));
  
          res.setHeader('Content-Type', 'application/json');
          res.json( insect );
        } else {
          res.status(404).json({ error: 'Insect not found' });
        }
      }
    });
  };
