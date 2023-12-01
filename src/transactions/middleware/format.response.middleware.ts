import { NestMiddleware } from '@nestjs/common';

export class FormatResponseMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const originalJson = res.json;

    res.json = (response) => {
      originalJson.call(res, {
        status: 'success',
        data: response,
      });
    };
    next();
  }
}
