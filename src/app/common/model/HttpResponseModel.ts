export class HttpResponseModel<T>{
    response:T|null;
    error?:any;
    isRequestFulfilled:boolean;

    constructor(response: T | null = null, error: any = null, isRequestFulfilled: boolean = false) {
        this.response = response;
        this.error = error;
        this.isRequestFulfilled = isRequestFulfilled;
      }
}