import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  private initialColor: string = '#f5f5f5'; 
  private defaultColor: string = '#5f526b'; 
  private defautHeight: number = 180; 
  // ppt

  constructor(private el: ElementRef) { 

    this.setHeight(this.defautHeight);
    this.setBorder(this.initialColor || this.defaultColor);

  }

    @Input("appBorderCard") borderColor: string; //alias
    // décla ppt d'entrée de la directive
    // @Input() appBorderCard: string; //sans alias, obli d'utiliser le nom de la directive pour nommer la ppt
    


    @HostListener('mouseenter') onMouseEnter() {
      this.setBorder(this.borderColor || this.defaultColor);
      // si aucune couleur défini par l'user dans le template prend la couleur fixée par défaut
    }

    @HostListener('mouseleave') onMouseLeave() {
      this.setBorder(this.initialColor);
    }


  // setHeight(height: number){
  //   this.el.nativeElement.style.height = `${height}px`;
  // }

  // setBorder(color: string) {
  //   this.el.nativeElement.style.border = `solid 4px ${color}`;
  // }

  private setHeight(height: number){
    this.el.nativeElement.style.height = height + 'px';
  }

  private setBorder(color: string) {
    let border = 'solid 4px' + color;
    this.el.nativeElement.style.border = border;
  }

}
// import directive, mise en place du sélecteur comme pour un composant mais [] acr directive d'attr donc on bind l'attr de l'élement du DOM.
// ElementRef vient du coeur d'Angular et représente une réf vers les cards
// ppt nativeElement puisquel' Element Ref est un encapsuleur, un wrapper par dessus l'el natif du DOM
// il faut appliquer la directive