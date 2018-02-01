import { Component, OnInit } from '@angular/core';
import { DetalhesService } from '../services/detalhes.service'

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {

  constructor(public detalhesService: DetalhesService) { }

  ngOnInit() {
  }

}
