import { IEvent } from "../../../models/IEvent";
import { IUser } from '../../../models/IUser';
import { EventActionEnum, SetGuestsAction, SetEventsAction } from "./types";
import { AppDispatch } from '../../index';
import axios from "axios";
import UserService from "../../../api/userService";


export const EventActionCreators = {
    SetGuests: (payload:IUser[]): SetGuestsAction => ({type: EventActionEnum.SET_GUESTS, payload}),
    SetEvents: (payload:IEvent[]): SetEventsAction => ({type: EventActionEnum.SET_EVENTS, payload}),
    fetchGuests: () => async (dispatch: AppDispatch) => {
        try {
            const response = await UserService.getUser()
            dispatch(EventActionCreators.SetGuests(response.data))
        }catch (e) {
            console.log(e)
        }
    },
    createEvent: (event:IEvent) => async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem('events') || '[]'
            const json = JSON.parse(events) as IEvent[]
            json.push(event);
            dispatch(EventActionCreators.SetEvents(json));
            localStorage.setItem('events', JSON.stringify(json))
        } catch(e) {
            console.log(e)
        }
    },
    fetchEvents:(username: string) => async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem('events') || '[]'
            const json = JSON.parse(events) as IEvent[]
            const currentUserEvents = json.filter(ev => ev.author === username || ev.guest === username)
            dispatch(EventActionCreators.SetEvents(currentUserEvents))
        } catch(e) {

        }
    }

}