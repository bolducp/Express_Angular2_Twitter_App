import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'twitterDate' })
export class TwitterDatePipe implements PipeTransform {
  transform(date: string) {
    let dateArray = date.split(" ");
    dateArray.splice(3, 2);
    return dateArray.join(" ");
  }
}

@Pipe({ name: 'twitterDateWithTime' })
export class TwitterDateWithTimePipe implements PipeTransform {
  transform(date: string) {
    let dateArray = date.split(" ");
    dateArray.splice(4, 1);
    return dateArray.join(" ");
  }
}
