const db = require('./database'); 

exports.create = (req, res) => {

  const id = req.body.id;
  const name = req.body.name;
  const speed = req.body.speed;
  const weight = req.body.weight;

  const sql_insert = 'INSERT INTO table1 (id, name, speed, weight) VALUES (?, ?, ?, ?);';
  db.query(sql_insert, [id, name, speed, weight], (err, result) => {
    if (err) {
      console.error('Error adding table1:', err);
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json({ message: 'Insect added successfully' });
    }
  });
};

exports.getall = (req, res) => {
  const sql_get_all = "SELECT * FROM table1;";
  db.query(sql_get_all, (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Database error' });
    } else {
      const dataArray = data.map((row) => ({
        id: row.id,
        name: row.name,
        speed: row.speed,
        weight: row.weight,
      }));
      res.setHeader('Content-Type', 'application/json');
      res.json({ data: dataArray });
    }
  });
};

exports.update = (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const speed = req.body.speed;
  const weight = req.body.weight;

  const updateQuery = 'UPDATE table1 SET name = ?, speed = ?, weight = ? WHERE id = ?;';
  db.query(updateQuery, [name, speed,weight, id], (err, result) => {
    if (err) {
      console.error('Помилка бази даних:', err);
      res.status(500).json({ error: 'Database error' });
    }

    res.status(200).json({ message: 'Дані успішно додані до бази даних' });
  });
};

exports.delete = (req, res) => {
  const id = req.body.id;

  const deleteQuery = 'DELETE FROM table1 WHERE id = ?';
  db.query(deleteQuery, [id], (err, result) => {
    if (err) {
      console.error('Error database:', err);
    } else {
      res.status(200).json({ message: 'insect deleted' });
    }});
};
