import {AfterViewInit, Component, OnInit} from '@angular/core';

declare var slickInit: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'slider';
  public medios = [
    {imagen: 'assets/medios/forbes.png', link: 'https://www.forbes.com.mx/30-promesas-emprendedores-ecolana-mapa-dice-donde-reciclar-basura/'},
    {imagen: 'assets/medios/entrepreneur.png', link: 'https://www.entrepreneur.com/article/345616'},
    {imagen: 'assets/medios/foro.png', link: 'https://noticieros.televisa.com/videos/ecolana-una-guia-reciclar-basura/'},
    {imagen: 'assets/medios/happening.png', link: 'https://thehappening.com/conoce-ecolana-reciclaje/ '},
    {imagen: 'assets/medios/heraldo.png', link: 'https://heraldodemexico.com.mx/tendencias/2020/8/6/gana-dinero-con-tu-basura-estos-desechos-cotidianos-tienen-gran-valor-198187.html'},
    {imagen: 'assets/medios/universal.png', link: 'https://www.eluniversal.com.mx/opinion/orgullomexicano/mexicanas-crean-plataforma-para-vender-y-reciclar-basura'},
    {imagen: 'assets/medios/adn.png', link: 'https://twitter.com/adn40/status/1205223907269079041'},
  ];
  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    slickInit();
  }


}
