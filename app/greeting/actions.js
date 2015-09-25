export const CHANGE_GREETING = 'CHANGE_GREETING';

export function changeGreeting(value) {
  return {
    type: CHANGE_GREETING,
    greeting: value
  }
}
