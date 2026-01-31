import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "masonry",
    standalone: false
})
export class MasonryPipe implements PipeTransform {
  transform(value: any[], numColumns: number, colNum: number): any {
    if (value.length === 0) return value;
    if (numColumns < 1 || colNum < 1 || isNaN(numColumns) || isNaN(colNum) || colNum > numColumns) {
      console.error("Invalid column configuration");
      return value;
    }
    return value.filter((val, index) => {
      return index % numColumns === colNum - 1;
    });
  }
}
