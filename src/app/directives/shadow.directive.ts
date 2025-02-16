import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appShadow]'
})
export class ShadowDirective implements OnInit {

    @Input() appShadow: string | number = '5px';

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
        this.appShadow = Number(this.appShadow) || 5
    }

    @HostListener('mouseover') onMouseOver() {
        this.renderer.setStyle(
            this.elementRef.nativeElement,
            'boxShadow',
            `0 4px ${this.appShadow}px rgba(0,0,0,0.5)`
        )
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.elementRef.nativeElement.style.boxShadow = 'none';
    }
}