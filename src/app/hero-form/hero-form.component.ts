import { Component } from '@angular/core';

import { Hero }    from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  debugger;
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  hero : string;

  submitted = false;

  onSubmit() { this.submitted = true; }

 newHero() {
   
   debugger;
   
   if(this.hero == undefined){
      this.hero = this.model[0];      
    }

    alert(this.model.name);

  
    


   this.model = new Hero(42, '', '');
}

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}