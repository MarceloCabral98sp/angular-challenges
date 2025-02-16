import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnChanges {

  @Input() dados!: { nome: string, email: string };

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
