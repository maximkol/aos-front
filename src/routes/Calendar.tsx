import { ITournament } from "../models";
import { formatDate } from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from '../event-utils'

export interface ICalendarProps{
    events:ITournament[]
}
export function Calendar(props:ICalendarProps){
    const handleDateSelect = (selectInfo:any) => {
        let title = prompt('Please enter a new title for your event')
        let calendarApi = selectInfo.view.calendar
    
        calendarApi.unselect() // clear date selection
    
        if (title) {
          calendarApi.addEvent({
            id: createEventId(),
            title,
            start: selectInfo.startStr,
            end: selectInfo.endStr,
            allDay: selectInfo.allDay
          })
        }
    }
    const handleEventClick = (clickInfo:any) => {
        
          
        
    }
    const handleEvents = (events:any) => {
        
      }
    return (
        <div className='demo-app'>
            <div className='demo-app-main'>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                initialView='dayGridMonth'
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                weekends={true}
                initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                select={handleDateSelect}
                eventContent={renderEventContent} // custom render function
                eventClick={handleEventClick}
                eventsSet={handleEvents}
            />
            </div>
        </div>
    );
}
function renderEventContent(eventInfo:any) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <span> </span>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }