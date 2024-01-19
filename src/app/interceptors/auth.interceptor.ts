import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { LocalStorageServiceService } from '../services/local-storage-service.service';


export const authInterceptor: HttpInterceptorFn = (req, next) => {
  let localStorageService:LocalStorageServiceService = new LocalStorageServiceService;
  let token = localStorageService.getFromLocalStorage('token');
  let newRequest : HttpRequest<any>;
  newRequest = req.clone({
    headers: req.headers.set("Authorization","Bearer " + token)
  });
  return next(newRequest);
};
