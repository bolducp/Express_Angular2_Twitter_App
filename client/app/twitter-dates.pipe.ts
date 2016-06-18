import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'twitterDate' })
export class TwitterDatePipe implements PipeTransform {
  transform(date: string) {
    if (isExpectedDateFormat(date)){
      let dateArray = date.split(" ");
      dateArray.splice(3, 2);
      return dateArray.join(" ");
    }
    return "Not Available";
  }
}

@Pipe({ name: 'twitterDateWithTime' })
export class TwitterDateWithTimePipe implements PipeTransform {
  transform(date: string) {
    if (isExpectedDateFormat(date)){
      let dateArray = date.split(" ");
      dateArray.splice(4, 1);
      return dateArray.join(" ");
    }
    return "Not Available";
  }
}

function isExpectedDateFormat(date: string){
  let dateArray = date.split(" ");
  return dateArray.length === 6 &&
  (dateArray[3].match(/:/g)).length === 2 &&
  dateArray[4].charAt(0) === "+";
}
