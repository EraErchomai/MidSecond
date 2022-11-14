function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}

class Message {
    constructor(name, date, text) {
        this.name = name
        this.date = date
        this.text = text
    }
}

class Messenger extends Message{
    constructor(name, date, text) {
        super(name, date, text)
        this.arr = []
    }
    show_history() {
        for(let i = 0; i<this.arr.length; i++) {
            let l = this.arr[i]
            let k = l.join(' ')
            console.log(k)
        }
    }
    send(author, text) {
        this.name = author
        this.text = text
        let time = gettime()
        this.data = time
        let str = [this.data, `${this.name}:`, this.text]
        this.arr.push(str)
    }
}

let messenger = new Messenger()
messenger.send('Артем', 'Первое сообщение')
messenger.send('Мария', 'Второе сообщение')
messenger.show_history()