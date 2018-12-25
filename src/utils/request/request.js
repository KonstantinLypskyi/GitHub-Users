class RequestHandler {
    requests = [];
  
    static instance = new RequestHandler();
  
    constructor() {
      if (RequestHandler.instance) {
        throw new Error('Error: use Request.getInstance() instead of new.');
      }
      RequestHandler.instance = this;
    }
  
    static getInstance() {
      return RequestHandler.instance;
    }
  
    getRequestsArray() {
      return this.requests;
    }
  
    addRequest(requestData) {
      this.requests.push(requestData);
    }
  
    removeRequest(tokenIdx) {
      this.requests = this.requests.filter(request => request.tokenIdx === tokenIdx);
    }
  
    findRequestByToken(tokenIdx) {
      return this.requests.find(request => request.tokenIdx === tokenIdx);
    }
  
    findRequest(method, url, data) {
      return this.requests.find(request => {
        if (request.data && request.data.query)  {
          // console.log('data.query', request.data);
          // console.log('data.query', request.data && request.data.query === data.query);
          return (request.requestMethod === method
            && request.requestUrl === url && request.data.query === data.query);
        }
        return (request.requestMethod === method
          && request.requestUrl === url);
      });
    }
  
    cancelRequest(tokenIdx) {
      const currentRequest = this.findRequestByToken(tokenIdx);
      this.removeRequest(tokenIdx);
      if (currentRequest) currentRequest.cancelToken.cancel();
    }
  
    handleRequest(method, url, source, data) {
      const token = {
        cancelToken: source,
        tokenIdx: this.requests.length,
        requestMethod: method,
        requestUrl: url,
        data,
      };
      this.addRequest(token);
      return true;
    }
  }
  
  export const REQUESTS = RequestHandler.getInstance();
  