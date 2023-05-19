import { useDispatch, useSelector } from "react-redux";
import {
  onAddNewEvent,
  onDeleteEvent,
  onSetActiveEvent,
  onUpdateEvent,
} from "../Store/Calendar/calendarSlice";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    //Todo: llegar al backend

    //Todo: Si la Resp sale bien =>
    if (calendarEvent._id) {
      // Actualizando Nota
      dispatch(onUpdateEvent({ ...calendarEvent }));
    } else {
      // Creando Nota
      dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }));
    }
  };

  const startDeletingEvent = () => {
    // Todo: Llegar al backend

    dispatch(onDeleteEvent());
  };

  return {
    //* Properties
    events,
    activeEvent,
    hasEventSelected: !!activeEvent,
    //* Methods
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent,
  };
};
