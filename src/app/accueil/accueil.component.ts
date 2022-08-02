import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  
  constructor(private router:Router) { 
    sessionStorage.setItem('currentUrl', this.router.url) 
  }
  
  titreComponent: string = 'Accueil'

  
  ngOnInit(): void { }
}
