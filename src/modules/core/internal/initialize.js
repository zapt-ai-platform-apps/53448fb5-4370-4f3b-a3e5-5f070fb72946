import { eventBus, events } from '../events';

/**
 * Initialize the core module
 */
export function initializeCore() {
  console.log('Core module initialized');
  
  // Example of publishing an event
  setTimeout(() => {
    eventBus.publish(events.APP_INITIALIZED, { timestamp: new Date() });
  }, 0);
  
  return {
    success: true,
    message: 'Core module initialized successfully'
  };
}