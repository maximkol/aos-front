import * as React from 'react';
import { ITournament } from '../models';
import { Label } from '@fluentui/react/lib/Label';

export interface ITournamentDetailsProps {
    tournament:ITournament
}
export function TournamentDetails(props:ITournamentDetailsProps){
    return(
        <div>
            <Label>Начало</Label>
            <Label>{props.tournament.start && props.tournament.start.toLocaleString("ru-RU", )}</Label>
            <Label>Окончание</Label>
            <Label>{props.tournament.end && props.tournament.end.toLocaleString("ru-RU", )}</Label>
            <Label>Количество человек</Label>
            <Label>{props.tournament.peopleNumber}</Label>
            {props.tournament.isOnline ? <div><Label>Тип</Label> <Label>Онлайн</Label></div>
                : <div><Label>Город</Label> <Label>{props.tournament.city}</Label></div>
            }
        </div>
    )
}