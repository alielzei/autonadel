// OBSERVER DESIGN PATTERN

class UserSubject {
    observers = []
    order = {}
    
    registerObserver(o) {
        this.observers.push(o)
    }

    removeObserver(o) {
        this.observers = this.observers.filter(e => e !== o)
    }

    notifyObservers() {
        for (let o of this.observers) {
            o(this.order)
        }
    }

    addItem(item) {
        if(this.order[item.item_id]) {
            this.order[item.item_id].amount++
        }else{
            item.amount = 1
            this.order[item.item_id] = item
        }
        this.notifyObservers()
    }
}

const userSubject = new UserSubject()

export default userSubject;
