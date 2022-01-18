import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dog } from 'src/dog';
import { DogsService } from '../dogs.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  dogs$: Observable<Dog[]>;

  constructor( private dogsService: DogsService) { }

  ngOnInit(): void {
    this.dogs$ = this.dogsService.getDogs();
  }

}
