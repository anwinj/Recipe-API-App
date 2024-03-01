import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(allRecipes: any[], category:string): any[] {
    
    const result:any = []

    if((!allRecipes || category=="")){
      return allRecipes
    }
    allRecipes.forEach((item)=>{
      if(item.mealType?.includes(category)){
        result.push(item)
      }
    })
    return result
  }

}
