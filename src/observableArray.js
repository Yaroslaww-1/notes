export class ObservableArrayEvent {
  constructor ({ type, payload }) {
    this.type = type;
    this.payload = payload;
  }
}

export const ObservableArrayFactory = (array) => {
  const observables = [];

  const observe = (notifyCallback) => {
    const id = Date.now();
    observables.push({ id, notifyCallback, filterByType: null });
    return {
      filterByType: (type) => {
        observables.forEach(observable => {
          if (observable.id === id) observable.filterByType = type;
          return observable;
        });
      }
    }
  }
  const push = (data) => {
    array.push(data);
    const event = new ObservableArrayEvent({ type: 'push', payload: data })
    observables.filter(observable => observable.filterByType === event.type)
               .forEach(observable => observable.notifyCallback(event));
  }

  return {
    observe,
    push,
    array,
  }
}