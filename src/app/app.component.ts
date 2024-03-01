import { Component, OnInit } from '@angular/core';
import { RecipeService } from './services/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  searchKey:string=""
  category:string=""
  allRecipes:any = []
  viewInstruction:boolean = false
  title = 'Recipe-API-App';
  

  constructor(private api:RecipeService){}

  ngOnInit(): void {
    this.getAllRecipes()
  }

  setViewInstruction(){
    this.viewInstruction = !this.viewInstruction
  }

  getAllRecipes(){
    this.api.getAllRecipesAPI().subscribe((res:any)=>{
      console.log(res);
      this.allRecipes = res.recipes
    })
  }

  setCategory(cat:string){
    this.category = cat
  }

}
