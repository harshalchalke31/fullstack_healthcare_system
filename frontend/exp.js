const algorithm = () => {
    const allslots = []
    let today = new Date()
    let daysAdded = 0
    let currentDate = new Date(today)

    while (daysAdded < 7) {
        if (currentDate.getDay() === 0) {
            currentDate.setDate(currentDate.getDate()+1)
            currentDate.setHours(0,0,0,0)
            continue
        }

        const dayAnchor = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate(),
            
        )

        let start = new Date(dayAnchor)
        start.setHours(8,0,0,0)
        let end = new Date(dayAnchor)
        end.setHours(18,0,0,0) 

        const isToday = dayAnchor.toDateString() === today.toDateString()
        if (isToday){
            let rounded = new Date(today)
            rounded.setSeconds(0,0)
            const mins = rounded.getMinutes()
            const next = Math.ceil(mins/30) * 30

            if (next === 60) {
                rounded.setHours(rounded.getHours()+1,0,0,0)
            } else {
                rounded.setMinutes(next)
            }

            if (rounded.getTime() > start.getTime()) start = rounded
        }
        if (start.getTime() >= end.getTime()) {
            currentDate.setDate(currentDate.getDate() + 1)
            currentDate.setHours(0,0,0,0)
            continue}

        const slots = []
        const cursor = new Date(start)
        while (cursor < end) {
            slots.push(cursor.toLocaleTimeString('en-US', {hour:'2-digit',minute:'2-digit'}))
            cursor.setMinutes(cursor.getMinutes()+30)
        }

        allslots.push({
            'key': new Date(dayAnchor),
            'date': [String(dayAnchor.getDate()),
                dayAnchor.toLocaleString('en-US', {weekday: 'short'}),
                dayAnchor.toLocaleString('en-US', {month: 'short'}),
            String(dayAnchor.getFullYear())
            ],
            'slots': slots
        })


        daysAdded++
        currentDate.setDate(currentDate.getDate()+1)
        currentDate.setHours(0,0,0,0)


        
    }
    return allslots
}

const calc = () => {
    let curr = new Date()
    let date = curr.toLocaleTimeString('en-US', {hour:'2-digit',minute:'2-digit'})
    console.log(date)
}

let allslots = algorithm()
console.log(allslots[4]['slots'][0])