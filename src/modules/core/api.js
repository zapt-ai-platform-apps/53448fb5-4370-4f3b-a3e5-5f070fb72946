import { eventBus, events } from './events';
import { validateRouteChange } from './validators';

/**
 * Core module public API
 * Provides application-wide services and utilities
 */
export const api = {
  /**
   * Notify application components of a route change
   * @param {Object} routeInfo - Information about the new route
   */
  notifyRouteChange(routeInfo) {
    const validatedRouteInfo = validateRouteChange(routeInfo, {
      actionName: 'notifyRouteChange',
      location: 'core/api.js',
      direction: 'incoming',
      moduleFrom: 'client',
      moduleTo: 'core'
    });
    
    eventBus.publish(events.ROUTE_CHANGED, validatedRouteInfo);
  },

  /**
   * Subscribe to route change events
   * @param {Function} callback - Function to call when route changes
   * @returns {Function} - Unsubscribe function
   */
  onRouteChange(callback) {
    return eventBus.subscribe(events.ROUTE_CHANGED, callback);
  }
};