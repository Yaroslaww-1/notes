export class EventManager {
  constructor () {
    this.listeners = new Map();
  }

  subscribe = (eventType, listener) => {
    if (this.listeners.get(eventType)) {
      this.listeners.get(eventType).push(listener);
    } else {
      this.listeners.set(eventType, [listener]);
    }
  }

  unsubscribe = (eventType, listener) => {
    this.listeners.set(
      eventType,
      this.listeners.get(eventType).filter(_listener => _listener !== listener),
    )
  }

  notify = (eventType, data) => {
    if (this.listeners.get(eventType)) {
      this.listeners.get(eventType).forEach(listener => listener(data));
    }
  }
}