/**
 * Chatbase.co integration utilities
 * 
 * This module provides functions for interacting with the Chatbase widget.
 * For user identification, you'll need to implement server-side JWT token generation.
 * 
 * Example server-side implementation (Node.js):
 * ```javascript
 * const jwt = require('jsonwebtoken');
 * const secret = process.env.CHATBOT_IDENTITY_SECRET;
 * 
 * const token = jwt.sign(
 *   { 
 *     user_id: user.id,
 *     email: user.email,
 *     // ... other custom attributes
 *   }, 
 *   secret, 
 *   { expiresIn: '1h' }
 * );
 * ```
 * 
 * Then call from client:
 * ```typescript
 * import { identifyUser } from '@/lib/chatbase';
 * const token = await getUserToken(); // Get from your server
 * identifyUser(token);
 * ```
 */

/**
 * Identify a user with Chatbase using a JWT token
 * This should be called after receiving a JWT token from your server
 * 
 * @param token - JWT token generated server-side with Chatbase secret key
 */
export function identifyUser(token: string): void {
  if (typeof window !== 'undefined' && window.chatbase) {
    window.chatbase('identify', { token });
  } else {
    console.warn('Chatbase widget not loaded yet. User identification will be skipped.');
  }
}

/**
 * Check if Chatbase widget is loaded and ready
 */
export function isChatbaseReady(): boolean {
  return typeof window !== 'undefined' && 
         typeof window.chatbase !== 'undefined' && 
         window.chatbase('getState') === 'initialized';
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    chatbase?: {
      (action: string, ...args: any[]): any;
      q?: any[];
    };
  }
}

