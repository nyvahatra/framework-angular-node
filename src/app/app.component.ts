import { Component, HostListener } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './services/auth/auth.service';
import { MenuService } from './services/menu/menu.service';
import { UsersService } from './services/users/users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  constructor(private router:Router, private formBuilder:UntypedFormBuilder, private authService: AuthService, private menuService:MenuService, private cookies:CookieService, private userService:UsersService) {
    if(sessionStorage.getItem('hide') == 'true' && this.cookies.get('matricule') != '' && this.router.url == '/'){
      this.router.navigate([sessionStorage.getItem('currentUrl')])
    }
  }

  nameApp: any = "Nom de l'application"

  title = 'demo-angular'
  innerWidth: any;

  hide: boolean
  hideLogin: boolean = true
  hideMenu: boolean = false

  menu:boolean

  matricule: any
  password: any
  resultat: any
  element: any
  liste_menu: any
  erreur: boolean = false
  status: boolean = false
  show: boolean = true
  buttonName:any
  role:any

  authentificationForm = this.formBuilder.group({
    matricule: ['',Validators.required],
    password: ['',Validators.required]
  })
  
  @HostListener('window:resize', ['$event'])
  
  ngOnInit(){
    
    caches.delete
    this.hide = JSON.parse(sessionStorage.getItem('hide'))

    if(this.hide == false || this.hide == undefined || this.hide == null){
      this.hideLogin = true
      this.hideMenu = false
    } else {
      this.hideLogin = false
      this.hideMenu = true
      this.matricule = this.cookies.get('matricule')
    }
    this.listeMenu()
  }

  deconnexion(){
    this.authService.logout()
    this.hideLogin = true
    this.hideMenu = false
  }

  listeMenu(){
    this.role = this.cookies.get('role')
    let accessibilite

    if(this.role == 'Administrateur'){
      accessibilite = 3
    } else if(this.role == 'Responsable'){
      accessibilite = 2
    } else {
      accessibilite = 1
    }

    this.menuService.getMenu(accessibilite).subscribe(
      data => {this.liste_menu = data},
      error => {},
      () => {
        for(let i=0; i<this.liste_menu.length; i++){
          this.liste_menu[i].sous_menu = JSON.parse(this.liste_menu[i].sous_menu)
        }
      }
    )
  }

  connexion(data: any){        
    this.matricule = data.matricule
    this.password = data.password
    if(this.authentificationForm.status == 'INVALID'){
      this.status = true
      this.erreur = false
    } else {
      this.menuService.getLogin(this.matricule, this.password).subscribe(
        data => {this.resultat = data[0].count
          console.log(data[0])},
        error => {},
        () => {   
          if(this.resultat == 0){
            this.erreur = true
            this.status = false
            this.hideLogin = true
            this.hideMenu = false
          } else {
            this.authService.login(this.matricule, this.resultat).subscribe(
              data => {console.log(data)},
              error => {},
              () => {
                let matricule = this.cookies.get('matricule')
                let role
                this.userService.getUser(matricule).subscribe(
                  data => {
                    this.cookies.set('nom', data[0].nom_user)
                    this.cookies.set('prenom', data[0].prenom_user)
                    this.cookies.set('fullname', data[0].nom_user + ' ' + data[0].prenom_user)
                    this.cookies.set('role', data[0].role_user)
                    this.cookies.set('id_utilisateur', data[0].id_utilisateur)
                    role = data[0].role_user
                  }, 
                  error => {},
                  () => {
                    this.role = role
                    this.listeMenu()
                    this.hideLogin = false
                    this.hideMenu = true
                  }
                )
                let hide = sessionStorage.getItem('hide')
                if(matricule != ''){
                  if(this.router.url == '/'){
                    this.hide = JSON.parse(hide)
                    this.router.navigate(['/accueil'])
                  } else {
                    this.hide = JSON.parse(hide)
                  }
                }
              }
            )
            this.authentificationForm.reset()
            this.erreur = false
            this.status = false
          }
        }
      )
    }
  }

}

