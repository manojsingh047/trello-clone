import {Injectable} from "@angular/core";
import {HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse, HTTP_INTERCEPTORS} from "@angular/common/http";
import { Observable } from "rxjs";
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/materialize';
import 'rxjs/add/operator/dematerialize';
import { LocalStorageService } from "./local-storage.service";

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor{

    constructor(private localStorageService:LocalStorageService){}

    intercept(request:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{
        
        return Observable.of(null).mergeMap(() => {

            console.log(request);

            if(request.url.endsWith('/api/boards') && request.method === "GET"){
                let boards = this.localStorageService.getData('boards');
                return Observable.of(new HttpResponse({status:200,body:boards}));
            }

            return next.handle(request);

        })
        .materialize()
        .delay(500)        
        .dematerialize();
    }
}

export let fakeBackendProvider = {
    provide:HTTP_INTERCEPTORS,
    useClass:FakeBackendInterceptor,
    multi:true
};
