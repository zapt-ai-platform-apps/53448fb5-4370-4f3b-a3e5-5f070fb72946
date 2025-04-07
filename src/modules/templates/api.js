import { validateNiche } from './validators';
import { nicheData } from './internal/data/nicheData';

/**
 * Templates module public API
 * Provides access to business template data and functionality
 */
export const api = {
  /**
   * Get all available business niches
   * @returns {Array} Array of niche data objects
   */
  getAllNiches() {
    return nicheData.map(niche => 
      validateNiche(niche, {
        actionName: 'getAllNiches',
        location: 'templates/api.js',
        direction: 'outgoing',
        moduleFrom: 'templates',
        moduleTo: 'client'
      })
    );
  },

  /**
   * Get a specific niche by ID
   * @param {string} nicheId - ID of the niche to retrieve
   * @returns {Object|null} Niche data object or null if not found
   */
  getNicheById(nicheId) {
    const niche = nicheData.find(n => n.id === nicheId);
    if (!niche) return null;
    
    return validateNiche(niche, {
      actionName: 'getNicheById',
      location: 'templates/api.js',
      direction: 'outgoing',
      moduleFrom: 'templates',
      moduleTo: 'client'
    });
  }
};