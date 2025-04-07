import { z } from 'zod';
import { createValidator } from '@/modules/core/validators';

// Business niche schema
export const nicheSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  imageUrl: z.string().url(),
  templates: z.number(),
  resources: z.number(),
  businessServices: z.array(z.string()),
  targetClients: z.array(z.string()),
  marketingStrategies: z.array(z.string())
});

// Create validator function
export const validateNiche = createValidator(nicheSchema, 'BusinessNiche');