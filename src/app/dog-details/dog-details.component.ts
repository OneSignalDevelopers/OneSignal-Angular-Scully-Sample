import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { DogsService } from '../dogs.service';
import { Dog } from 'src/dog';

@Component({
  selector: 'app-dog-details',
  templateUrl: './dog-details.component.html',
  styleUrls: ['./dog-details.component.css']
})
export class DogDetailsComponent implements OnInit {

  id: string;
  dog: Dog;

  constructor(
    private route: ActivatedRoute,
    private productsService: DogsService) {
  }

  ngOnInit(): void {
    this.route.params
      .pipe(map(p => p.dogId))
      .subscribe(id => {
        this.productsService.getDogsById(id)
          .subscribe(product => this.dog = product);
      });
      console.log(this.dog);
  }

}
