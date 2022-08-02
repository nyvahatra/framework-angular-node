const { range } = require("rxjs");
const pool = require("../config/db.config");

// Get All Users
const getAllUsers = (req, res, next) => {     
    pool.query("select * from utilisateur order by id_utilisateur ASC", [], function (err, result) {
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

// delete User
const deleteUser = (req, res, next) => { 
    const id_utilisateur = req.body.id_utilisateur
    pool.query("delete from utilisateur where id_utilisateur = $1", [id_utilisateur], function (err, result) {
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
// insertion user
const insertUser = (req, res, next) => { 
    const nom_user = req.body.nom_user
    const prenom_user = req.body.prenom_user
    const matricule = req.body.matricule
    const password_user = req.body.password_user 
    const role_user = req.body.role_user    
    pool.query("insert into utilisateur (nom_user, prenom_user, matricule, password_user, role_user) values ($1,$2,$3,$4,$5)", [nom_user, prenom_user, matricule, password_user, role_user], function (err, result) {
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
// modifier User
const updateUser = (req, res, next) => {  
    const id_utilisateur = req.body.id
    const matricule = req.body.matricule 
    const nom_user = req.body.nom_user
    const prenom_user = req.body.prenom_user
    const role_user = req.body.role_user
    const password_user = req.body.password_user
    pool.query("update utilisateur set matricule = $1, nom_user = $2, prenom_user = $3, role_user = $4, password_user = $5 where id_utilisateur = $6", [matricule,nom_user,prenom_user,role_user,password_user,id_utilisateur], function (err, result) {
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

// Get Users Where Matricule
const getUser = (req, res, next) => {     
    const matricule = req.body.matricule
    pool.query("select * from utilisateur where matricule = $1", [matricule], function (err, result) {
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

module.exports = {getAllUsers, deleteUser, insertUser, updateUser, getUser};