import {v4 as uuidv4} from 'uuid';
import type {HttpFunction} from '@google-cloud/functions-framework/build/src/functions';

export const helloWorld: HttpFunction = (req, res) => {
  res.status(200).send({
    ok: true,
    uuid: uuidv4(),
    env1: process.env.VAL1 ?? 'not set',
    env2: process.env.VAL2 ?? 'not set',
  });
};
