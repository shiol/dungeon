import { Component, ViewChild, ComponentFactoryResolver, ComponentRef, ComponentFactory, ViewContainerRef } from '@angular/core';
import { MonstroComponent } from './monstro/monstro.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('container', { read: ViewContainerRef }) container;
  componentRef: ComponentRef<MonstroComponent>;
  mensagem: string;

  constructor(private resolver: ComponentFactoryResolver) { }

  novoMonstro() {
    this.mensagem = '';
    this.container.clear();
    const factory: ComponentFactory<MonstroComponent> = this.resolver.resolveComponentFactory(MonstroComponent);
    this.componentRef = this.container.createComponent(factory);
  }

  atacar() {
    if (this.componentRef && this.componentRef.instance) {
      if (this.componentRef.instance.vida > 0) {
        this.componentRef.instance.vida -= 3;
      }

      if (this.componentRef.instance.vida <= 0) {
        if (this.mensagem === 'Morreu') {
          this.mensagem = 'Já morreu';
        } else {
          this.mensagem = 'Morreu';
        }
      }
    } else {
      this.mensagem = 'Crie novo monstro primeiro';
    }
  }

  ngOnDestroy() {
    this.componentRef.destroy();
  }
}
