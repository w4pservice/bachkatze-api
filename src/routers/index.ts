import { Router } from 'express';

const index: Router = Router();

index.get('/', function(req, res, next) {
  res.send('Index')
});

export default index;