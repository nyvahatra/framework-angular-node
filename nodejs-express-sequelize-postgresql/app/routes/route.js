const express = require('express'); //import express
const router  = express.Router(); 

const menuController = require('../controllers/menu_controller'); 
router.post('/get-menu', menuController.getMenu); 
router.post('/get-login', menuController.getLogin); 
router.get('/get-max-rang-menu', menuController.getMaxRangMenu)
router.post('/update-menu', menuController.updateMenu)
router.post('/update-rang-menu', menuController.updateRangMenu)
router.post('/supprimer-menu', menuController.supprimerMenu)
router.post('/insert-menu', menuController.insertMenu)
router.post('/update_sous_menu', menuController.updateSousMenu)

const usersController = require('../controllers/users_controller'); 
router.get('/get-all-users', usersController.getAllUsers);
router.post('/delete-user', usersController.deleteUser);
router.post('/insert-users', usersController.insertUser);
router.post('/update-users', usersController.updateUser);
router.post('/get-user', usersController.getUser);

module.exports = router; // export to use in server.js
