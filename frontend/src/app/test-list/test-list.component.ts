import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss']
})
export class TestListComponent implements OnInit {

  neuesteRezeptListe;

  constructor() { }

  ngOnInit() {
    //getRezepteListe() muss implementiert werden... gibt alle Rezepte aus
    // speichert alle rezepte in eine liste und holt die 3 mit die höchsten indexes in die neuesteRezeptListe



  }

}
