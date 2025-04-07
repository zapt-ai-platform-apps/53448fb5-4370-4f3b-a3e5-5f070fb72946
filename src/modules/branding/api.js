import { validateColorPalette, validateFontPairing, validateLogoTemplate } from './validators';
import { colorPalettes } from './internal/data/colorPalettes';
import { fontPairings } from './internal/data/fontPairings';
import { logoTemplates } from './internal/data/logoTemplates';

/**
 * Branding module public API
 * Provides access to branding related functionality
 */
export const api = {
  /**
   * Get all available color palettes
   * @returns {Array} Array of color palette objects
   */
  getColorPalettes() {
    return colorPalettes.map(palette => 
      validateColorPalette(palette, {
        actionName: 'getColorPalettes',
        location: 'branding/api.js',
        direction: 'outgoing',
        moduleFrom: 'branding',
        moduleTo: 'client'
      })
    );
  },

  /**
   * Get all available font pairings
   * @returns {Array} Array of font pairing objects
   */
  getFontPairings() {
    return fontPairings.map(pairing => 
      validateFontPairing(pairing, {
        actionName: 'getFontPairings',
        location: 'branding/api.js',
        direction: 'outgoing',
        moduleFrom: 'branding',
        moduleTo: 'client'
      })
    );
  },

  /**
   * Get all available logo templates
   * @returns {Array} Array of logo template objects
   */
  getLogoTemplates() {
    return logoTemplates.map(template => 
      validateLogoTemplate(template, {
        actionName: 'getLogoTemplates',
        location: 'branding/api.js',
        direction: 'outgoing',
        moduleFrom: 'branding',
        moduleTo: 'client'
      })
    );
  },

  /**
   * Generate a logo based on business information and template
   * @param {Object} options - Logo generation options
   * @param {string} options.businessName - Name of the business
   * @param {string} options.businessType - Type of business
   * @param {Object} options.template - Selected logo template
   * @returns {Promise<Object>} Generated logo information
   */
  generateLogo({ businessName, businessType, template }) {
    // In a real implementation, this might call an API
    // For now we'll simulate it
    return new Promise(resolve => {
      setTimeout(() => {
        const generatedLogo = {
          ...template,
          name: businessName,
          type: businessType
        };
        
        resolve(validateLogoTemplate(generatedLogo, {
          actionName: 'generateLogo',
          location: 'branding/api.js',
          direction: 'outgoing',
          moduleFrom: 'branding',
          moduleTo: 'client'
        }));
      }, 1000);
    });
  }
};