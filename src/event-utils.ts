import { ITournament } from "./models"

let eventGuid = 1
let now = new Date();
const tomorrow = new Date(now)
tomorrow.setDate(tomorrow.getDate() + 1)
const afterTomorrow = new Date(now)
afterTomorrow.setDate(tomorrow.getDate() + 2)
export const INITIAL_EVENTS: ITournament[] = [
  {
    id: createEventId(),
    title: 'Турнир 1',
    //start: todayStr + 'T14:00:00',
    start: now,
    end: afterTomorrow,
    city:"Москва",
    isOnline:false,
    peopleNumber:5
  },
  {
    id: createEventId(),
    title: 'Турнир 2',
    //start: todayStr + 'T14:00:00',
    start: now,
    end: tomorrow,
    isOnline:true,
    peopleNumber:10
  }
]

export function createEventId() {
  return String(eventGuid++)
}