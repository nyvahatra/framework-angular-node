const { range } = require("rxjs");
const pool = require("../config/db.config");

// Add Menu
const getMenu = (req, res, next) => {   
    const accessibilite = req.body.accessibilite  
    pool.query("select * from menu where accessibilite between 1 and $1 order by rang_menu asc", [accessibilite], function (err, result) {
       if (err) {
        res.status(400).send(err);
    }
    if (Object.keys(result).length > 0) {
        res.status(200).send(result.rows);
    } else {
        res.status(200).send();
    }
});
};

// Add Menu
const getDateNow = (req, res, next) => {     
    pool.query("select now()", [], function (err, result) {
       if (err) {
        res.status(400).send(err);
    }
    if (Object.keys(result).length > 0) {
        res.status(200).send(result.rows);
    } else {
        res.status(200).send();
    }
});
};

// Get Max Rank Menu
const getMaxRangMenu = (req, res, next) => {     
    pool.query("select max(rang_menu) from menu", [], function (err, result) {
       if (err) {
        res.status(400).send(err);
    }
    if (Object.keys(result).length > 0) {
        res.status(200).send(result.rows);
    } else {
        res.status(200).send();
    }
});
};

// Insert Menu
const insertMenu = (req, res, next) => { 
    const nom_menu = req.body.nom_menu
    const route_menu = req.body.route_menu
    const rang_menu = req.body.rang_menu    
    const icon_menu = req.body.icon_menu   
    const accessibilite = req.body.accessibilite
    pool.query("insert into menu (nom_menu, route_menu, rang_menu, icon_menu, sous_menu, accessibilite) values ($1,$2,$3,$4,$5,$6)", [nom_menu, route_menu, rang_menu, icon_menu, '[]', accessibilite], function (err, result) {
       if (err) {
        res.status(400).send(err);
    }
    if (Object.keys(result).length > 0) {
        res.status(200).send(result.rows);
    } else {
        res.status(200).send();
    }
});
};

// Update Menu
const updateMenu = (req, res, next) => { 
    const id_menu = req.body.id_menu
    const nom_menu = req.body.nom_menu
    const route_menu = req.body.route_menu
    const rang_menu = req.body.rang_menu    
    const icon_menu = req.body.icon_menu 
    const accessibilite = req.body.accessibilite   
    pool.query("update menu set nom_menu = $1, route_menu = $2, rang_menu = $3, icon_menu = $4, accessibilite = $6 where id_menu = $5", [nom_menu, route_menu, rang_menu, icon_menu, id_menu, accessibilite], function (err, result) {
       if (err) {
        res.status(400).send(err);
    }
    if (Object.keys(result).length > 0) {
        res.status(200).send(result.rows);
    } else {
        res.status(200).send();
    }
});
};

// Delete Menu
const supprimerMenu = (req, res, next) => { 
    const id_menu = req.body.id_menu   
    pool.query("delete from menu where id_menu = $1", [id_menu], function (err, result) {
       if (err) {
        res.status(400).send(err);
    }
    if (Object.keys(result).length > 0) {
        res.status(200).send(result.rows);
    } else {
        res.status(200).send();
    }
});
};

// Login
const getLogin = (req, res, next) => {  
    const matricule = req.body.matricule
    const password = req.body.password   
    pool.query("select count(*) from utilisateur where matricule = $1 and password_user = $2", [matricule, password], function (err, result) {
       if (err) {
        res.status(400).send(err);
    }
    if (Object.keys(result).length > 0) {
        res.status(200).send(result.rows);
    } else {
        res.status(200).send();
    }
});
};

// Update Rang Menu
const updateRangMenu = (req, res, next) => {  
    const range = req.body.range
    const id_menu = req.body.id_menu
    pool.query("update menu set rang_menu = $1 where id_menu = $2", [range,id_menu], function (err, result) {
        if (err) {
            res.status(400).send(err);
        }
        if (Object.keys(result).length > 0) {
            res.status(200).send(result.rows);
        } else {
            res.status(200).send();
        }
    });
};

// Update Rang Menu
const updateSousMenu = (req, res, next) => {  
    const id_menu = req.body.id_menu
    const restSousMenu = req.body.restSousMenu
    pool.query("update menu set sous_menu = $1 where id_menu = $2", [restSousMenu,id_menu], function (err, result) {
        if (err) {
            res.status(400).send(err);
        }
        if (Object.keys(result).length > 0) {
            res.status(200).send(result.rows);
        } else {
            res.status(200).send();
        }
    });
};
module.exports = {getMenu, getLogin, getMaxRangMenu, updateMenu, updateRangMenu, supprimerMenu, insertMenu,updateSousMenu};