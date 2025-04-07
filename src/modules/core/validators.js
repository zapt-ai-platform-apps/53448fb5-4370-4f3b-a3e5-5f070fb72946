import { z } from 'zod';
import { createValidator } from './validators';

export const routeChangeSchema = z.object({
  path: z.string(),
  params: z.record(z.string()).optional(),
  search: z.string().optional()
});

export const validateRouteChange = createValidator(routeChangeSchema, 'RouteChange');