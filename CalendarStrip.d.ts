import * as React from "react";


interface CalendarStripProps {
    selectedDate: Date,
    onPressDate: (e) => void,
    onPressGoToday: (e) => void,
    markedDate: any[],
    onSwipeDown: () => {},
    showWeekNumber:boolean,
    showChineseLunar: boolean,
    weekStartsOn: number,
};

export const CalendarStrip: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<CalendarStripProps>
    >;