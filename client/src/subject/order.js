// OBSERVER DESIGN PATTERN

class OrderSubject {
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

    removeItem(item) {
        console.log(this.order)
        console.log(this.order[item.item_id])
        if(this.order[item.item_id] && this.order[item.item_id].amount === 1) {
            delete this.order[item.item_id]
        }else{
            this.order[item.item_id].amount--
        }
        this.notifyObservers()
    }
}

const orderSubject = new OrderSubject()

export default orderSubject;
