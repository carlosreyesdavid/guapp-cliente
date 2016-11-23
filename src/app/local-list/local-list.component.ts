import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-local-list',
  templateUrl: 'local-list.component.html',
  styleUrls: ['local-list.component.css']
})
export class LocalListComponent implements OnInit {
  
  titles = ['Guachinche Tres Dragos', 'Guachinche Martes Trancao', 'Casa Tomás', 'Tasca La Carambola', 'El esquinazo'];
  text = "Guachinche"
  likes = "153"

  constructor() { }

  ngOnInit() {
  }

}
