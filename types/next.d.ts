// types/next.d.ts

import { NextApiRequest } from 'next';

declare module 'next' {
  export interface NextApiRequest {
    file: {
      fieldname: string;
      originalname: string;
      encoding: string;
      mimetype: string;
      destination: string;
      filename: string;
      path: string;
      size: number;
    } | undefined;
  }
}
