import {Injectable, EventEmitter} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class InterceptorHttp implements HttpInterceptor {

    public messages: Array<any> = []
    static mostrarLoading = new EventEmitter();
    public contador = 0
    constructor( 

    ) {
    }

    public intercept(req: HttpRequest<any>, next: HttpHandler): any {


        InterceptorHttp.mostrarLoading.emit(true)
        this.contador = 1
        console.log('mostrando loading')
        if (!req.headers.has('Content-Type')) {
            req = req.clone({headers: req.headers.set('Content-Type', 'application/json')});
        }

        return next.handle(req).do((event: HttpEvent<any>) => {
            if(event.type != 0) {
                InterceptorHttp.mostrarLoading.emit(false); 
            }
     
        }).catch((err: HttpEvent<any>) => {
            if (err instanceof HttpErrorResponse) {
                switch((<HttpErrorResponse> err).status ){
                    case 404:
                        InterceptorHttp.mostrarLoading.emit(false) 
                    break
                    case 403:
                        InterceptorHttp.mostrarLoading.emit(false) 
                    break
                    case 500:
                    InterceptorHttp.mostrarLoading.emit(false)
                    break
                    case 400:
                        InterceptorHttp.mostrarLoading.emit(false)            
                    break
                    default:
                        InterceptorHttp.mostrarLoading.emit(false )       
                    break
                }
            }
           
            return Observable.throw(err);
        });
    }

    public extractMessage(msg) {
        for (const field in msg) {
            if(typeof msg[field] === 'object'){
              this.extractMessage(msg[field])
            }else{
                this.messages.push(msg[field]);
            }
        }
        return this.messages;
      }
}