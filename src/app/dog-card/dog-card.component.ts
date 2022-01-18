import { Component, Input, OnInit } from '@angular/core';
import { Dog } from 'src/dog';

@Component({
  selector: 'app-dog-card',
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.css']
})
export class DogCardComponent implements OnInit {
  constructor() { }

  @Input() dog: Dog;
  @Input() type: 'horizontal' | 'vertical' = 'vertical';

  ngOnInit(): void {}

}
