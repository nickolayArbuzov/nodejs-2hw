import { Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('middleware', req.headers?.authorization)
    console.log('new Buffer', new Buffer('admin:qwerty').toString('base64'))
    if (req.headers?.authorization?.split(' ')[1] === new Buffer('admin:qwerty').toString('base64')){
      console.log('headers match')
      next()
    } else {
      res.sendStatus(401)
    }
  }
}