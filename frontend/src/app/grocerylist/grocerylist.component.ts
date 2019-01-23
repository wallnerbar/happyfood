import { Component, OnInit } from '@angular/core';
import {animate, keyframes, style, transition, trigger} from '@angular/animations';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../api/user';
import {GroceryService} from '../grocery.service';
import {Grocery} from '../api/grocery';

@Component({
  selector: 'app-grocerylist',
  templateUrl: './grocerylist.component.html',
  styleUrls: ['./grocerylist.component.scss'],
  animations: [
    trigger('moveInLeft', [
      transition('void=> *', [style({transform: 'translateX(300px)'}),
        animate(200, keyframes([
          style({transform: 'translateX(300px)'}),
          style({transform: 'translateX(0)'})

        ]))]),

      transition('*=>void', [style({transform: 'translateX(0px)'}),
        animate(100, keyframes([
          style({transform: 'translateX(0px)'}),
          style({transform: 'translateX(300px)'})

        ]))])

    ])

  ]
})
export class GrocerylistComponent implements OnInit {
  user: User;
  groceryList: Array<Grocery>;


  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private router: Router,
              private groceryService: GroceryService) {
  }

  ngOnInit(): void {
    const data = this.route.snapshot.data;
    this.user = data.user;

    if (this.user) {
      this.groceryService.getAllByUser(this.user.id)
        .subscribe((response: any) => {
          this.groceryList = response;
        });
    }
  }

  addTodo(value) {
    if (value !== '' ) {
      const data: Grocery = {
        id: null,
        user: this.user.id,
        grocery: value
      }
      this.groceryService.save(data)
        .subscribe(() => {
          this.ngOnInit();
        });
    } else {
      alert('Field required **');
    }
  }

  deleteItem(todo) {
    this.groceryService.delete(todo.id)
      .subscribe(() => {
        this.ngOnInit();
      });
  }

  todoSubmit(value: any) {
  }

}
