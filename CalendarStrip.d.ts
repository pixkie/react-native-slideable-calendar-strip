import * as React from "react";


interface CalendarStripProps {
    selectedDate: Date,
    onPressDate: (e:Date) => void,
    onPressGoToday: (e:Date) => void,
    markedDate: any[],
    onSwipeDown: () => {},
    showWeekNumber?:boolean,
    showChineseLunar?: boolean,
    weekStartsOn?: number,
};

export const CalendarStrip: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<CalendarStripProps>
    >;