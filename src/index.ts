import {v4 as uuidv4} from 'uuid';
import type {HttpFunction} from '@google-cloud/functions-framework/build/src/functions';

export const helloWorld: HttpFunction = (req, res) => {
  res.status(200).send({
    ok: true,
    uuid: uuidv4(),
  });
};
