import { Component, OnInit } from '@angular/core';
import {animate, keyframes, style, transition, trigger} from '@angular/animations';
import {FormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

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
export class GrocerylistComponent {
  todoArray = [];
  todo;
  // todoForm: new FormGroup()


  addTodo(value) {
    if (value !== '' ) {
      this.todoArray.push(value);
      // console.log(this.todos)
    } else {
      alert('Field required **');
    }

  }

  /*delete item*/
  deleteItem(todo) {
    for (let i = 0 ; i <= this.todoArray.length ; i++) {
      if (todo === this.todoArray[i]){
        this.todoArray.splice(i, 1);
      }
    }
  }

// submit Form
  todoSubmit(value: any) {
    if (value !== '') {
      this.todoArray.push(value.todo);
      // this.todoForm.reset()
    } else {
      alert('Field required **');
    }

  }
}
