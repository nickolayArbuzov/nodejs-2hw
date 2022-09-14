import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    const res: any = exception.getResponse()
    console.log('res', res)
    if (status === 400) {
      const errorResponse = {
        errorsMessages: [],
      }
      
      res.message.forEach(m => {
        errorResponse.errorsMessages.push(m)
      })
      response.status(status).json(errorResponse)
    } else {
      response.status(status).json({
        statusCode: status,
        path: request.url,
      })
    }
  }
}