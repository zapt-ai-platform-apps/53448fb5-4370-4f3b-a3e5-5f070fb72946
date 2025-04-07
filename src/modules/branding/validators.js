import { z } from 'zod';
import { createValidator } from '@/modules/core/validators';

// Color palette schema
export const colorPaletteSchema = z.object({
  id: z.string(),
  name: z.string(),
  category: z.string(),
  colors: z.array(z.string()).min(1)
});

// Font pairing schema
export const fontPairingSchema = z.object({
  id: z.string(),
  name: z.string(),
  headingFont: z.string(),
  bodyFont: z.string(),
  description: z.string()
});

// Logo template schema
export const logoTemplateSchema = z.object({
  id: z.string(),
  name: z.string(),
  imageUrl: z.string().url(),
  style: z.string().optional(),
  type: z.string().optional()
});

// Create validator functions
export const validateColorPalette = createValidator(colorPaletteSchema, 'ColorPalette');
export const validateFontPairing = createValidator(fontPairingSchema, 'FontPairing');
export const validateLogoTemplate = createValidator(logoTemplateSchema, 'LogoTemplate');