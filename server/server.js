const koa = require('koa');


class App {
    constructor(){
        this.serverOptions = [process.argv[2]];
        this.serverOptions.push(process.argv[3] || '8080');
        this.server = new koa();
    }
    start(){
        
        this.server.listen()
    }
}