module.exports = {
    read: (req,res) => {
        const db = req.app.get('db');
        db.get_inventory().then(resp => {
        res.status(200).send(resp);
    });
    },

    create: (req, res) => {
        console.log(req.body)
        let db = req.app.get('db')
        db.create_product(req.body).then((response) => {
            console.log(77777,response)
            res.send(response)
        } )
    },

    delete: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
    
        db.delete_product([id]).then(resp => {
          res.status(200).send(resp);
        });
      },
    
      update: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
        const { name, image, price } = req.body;
    
        db.update_product([id, name, image, price]).then(resp => {
          res.status(200).send(resp);
        });
      }


}