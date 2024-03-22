import type { AnyAction } from 'redux';

/**
 * The prefix.
 */
const PREFIX = 'collection';

/**
 * Server version changed action.
 */
export const SERVER_VERSION_CHANGED = `${PREFIX}/server-version/SERVER_VERSION_CHANGED`;

/**
 * The initial state.
 */
export const INITIAL_STATE = '4.0.0';

/**
 * Reducer function for handle state changes to server version.
 *
 * @param {String} state - The version state.
 * @param {Object} action - The action.
 *
 * @returns {String} The new state.
 */
export default function reducer(
  state = INITIAL_STATE,
  action: AnyAction
): string {
  if (action.type === SERVER_VERSION_CHANGED) {
    return action.version || state;
  }
  return state;
}

/**
 * Action creator for server version changed events.
 *
 * @param {String} version - The version value.
 *
 * @returns {Object} The server version changed action.
 */
export const serverVersionChanged = (version: string): any => ({
  type: SERVER_VERSION_CHANGED,
  version: version,
});
