import * as React from 'react'
import { ITournament } from "../models";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import ruLocale from '@fullcalendar/core/locales/ru';
import { INITIAL_EVENTS, createEventId } from '../event-utils'
import { Dialog, DialogFooter, PrimaryButton, DefaultButton, DialogType} from '@fluentui/react'
import { TournamentDetails } from '../components/TournamentDetails';
import { useBoolean } from '@fluentui/react-hooks';

export interface ICalendarProps{
    events:ITournament[]
}
export function Calendar(props:ICalendarProps){
    //const [open, setOpen] = React.useState(false);
    const [selectedEvent, setSelectedEvent] = React.useState({
      title:'',
      start:new Date(),
      end:new Date()
    } as ITournament)
    const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);
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
        // clickInfo.event.extendedProps
        // clickInfo.event.title
        // clickInfo.event.id
        // clickInfo.event.start
        const tournament:ITournament={
          id:clickInfo.event.id,
          start:clickInfo.event.start,
          end:clickInfo.event.end,
          title:clickInfo.event.title,
          isOnline:clickInfo.event.extendedProps.isOnline,
          city:clickInfo.event.extendedProps.city,
          peopleNumber:clickInfo.event.extendedProps.peopleNumber
        }
        setSelectedEvent(tournament);
        toggleHideDialog();  
        
    }
    const handleEvents = (events:any) => {
        
      }
    const dialogContentProps = {
      type: DialogType.normal,
      title: selectedEvent.title,
      closeButtonAriaLabel: 'Close'
    };
    return (
        <div className='demo-app'>
            <div className='demo-app-main'>
            <FullCalendar
                locale={ruLocale}
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
            <Dialog
              hidden={hideDialog}
              onDismiss={toggleHideDialog}
              dialogContentProps={dialogContentProps}
              // modalProps={modalProps}
            >
              <TournamentDetails tournament={selectedEvent} />
              
              <DialogFooter>
                <PrimaryButton onClick={toggleHideDialog} text="Зарегистрироваться" />
                <DefaultButton onClick={toggleHideDialog} text="Закрыть" />
              </DialogFooter>
            </Dialog>
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