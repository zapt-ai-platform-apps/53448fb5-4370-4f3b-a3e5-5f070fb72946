import { initializeCore } from './core/internal/initialize';
import { initializeBranding } from './branding/internal/initialize';
import { initializeClientPipeline } from './clientPipeline/internal/initialize';
import { initializeTemplates } from './templates/internal/initialize';
import { initializeWebsites } from './websites/internal/initialize';
import { eventBus, events as coreEvents } from './core/events';

/**
 * Initialize all application modules
 * @returns {Promise<Object>} Results of module initialization
 */
export async function initializeModules() {
  console.log('Initializing application modules...');
  
  try {
    // Initialize modules in dependency order
    const results = await Promise.all([
      initializeCore(),
      initializeBranding(),
      initializeTemplates(),
      initializeWebsites(),
      initializeClientPipeline()
    ]);
    
    // Publish app initialization complete event
    eventBus.publish(coreEvents.APP_INITIALIZED, {
      timestamp: new Date(),
      results
    });
    
    console.log('All modules initialized successfully');
    return {
      success: true,
      results
    };
  } catch (error) {
    console.error('Failed to initialize modules:', error);
    return {
      success: false,
      error
    };
  }
}

// Export all module APIs for use in the application
export { api as coreApi } from './core/api';
export { api as brandingApi } from './branding/api';
export { api as clientPipelineApi } from './clientPipeline/api';
export { api as templatesApi } from './templates/api';
export { api as websitesApi } from './websites/api';