import { Result, response } from '../models/response.model';

export class Response implements response {
  count: number;
  next: string;
  previous: string;
  results: Result;

  constructor(res: response) {
    this.count = res.count;
    this.next = res.next;
    this.previous = res.previous;
    this.results = res.results;
  }
}
