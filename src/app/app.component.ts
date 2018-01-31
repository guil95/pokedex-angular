import { Component } from '@angular/core';
import { DetalhesService } from './services/detalhes.service'
import { InterceptorHttp } from './services/InterceptorHttp.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public detalhesService: DetalhesService,
  ){
    
  }
  title = 'app';
  loading = true;

  ngOnInit() {
    InterceptorHttp.mostrarLoading.subscribe((ret) => {
      console.log(ret)
      this.loading = ret;
    });
  }
}
