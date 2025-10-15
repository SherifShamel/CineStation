import { HttpInterceptorFn } from '@angular/common/http';

export const bearerInterceptor: HttpInterceptorFn = (req, next) => {
  req = req.clone({
    setHeaders: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MGI4MGY4ZTA0OWNmNGQ3OGM1ODFhYmFkNDdlNTdmMSIsIm5iZiI6MTcxMTI4MzMzNC41NzEsInN1YiI6IjY2MDAxYzg2MGMxMjU1MDE0YjBhZmIyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wuYcRMFhLlh4652e1gAjSDNcWR486gP0aIh-_Dt-fYE',
      accept: 'application/json',
    },
  });

  return next(req);
};
