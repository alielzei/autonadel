// OBSERVER DESIGN PATTERN

class LoadingSubject {
    observers = []
    loading = false
    
    registerObserver(o) {
        this.observers.push(o)
    }

    removeObserver(o) {
        this.observers = this.observers.filter(e => e !== o)
    }

    notifyObservers() {
        for (let o of this.observers) {
            o(this.loading)
        }
    }

    setLoading(l) {
        this.loading = l
        this.notifyObservers()
    }
}

const loadingSubject = new LoadingSubject()

export default loadingSubject;
