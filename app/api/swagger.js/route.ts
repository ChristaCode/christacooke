import { NextRequest, NextResponse } from 'next/server';
import express from 'express';
import { swaggerUi, swaggerSpec } from '../../../swagger';

// Create an Express app instance to use with Swagger
const app = express();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// This function will handle the Swagger request
export async function GET(req: NextRequest) {
  const res = new NextResponse();
  return new Promise((resolve) => {
    app.handle(req as any, res as any, (err) => {
      if (err) throw err;
      resolve(res);
    });
  });
}
