import { Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.headers?.authorization?.split(' ')[1] === new Buffer('admin:qwerty').toString('base64')){
      next()
    } else {
      res.sendStatus(401)
    }
  }
}