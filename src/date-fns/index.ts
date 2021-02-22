import * as operations from "schedule.js/operations"
import * as schedules from "schedule.js/schedules"
import * as functions from "schedule.js/functions"
import {DateFnsImplementation} from "schedule.js/date-fns/implementation"
import {Schedule} from "schedule.js"
import {Country, Options} from "date-holidays"
import {Duration, formatISO, Interval} from "date-fns"

export function formatIntervalISO(interval: Interval) {
    return formatISO(interval.start) + "/" + formatISO(interval.end)
}

export const intersectSchedules = operations.intersectSchedules(DateFnsImplementation)
export const invertSchedule = operations.invertSchedule(DateFnsImplementation)
export const joinSchedules = operations.joinSchedules(DateFnsImplementation)
export const shiftSchedule = operations.shiftSchedule(DateFnsImplementation)
export const subtractSchedules = operations.subtractSchedules(DateFnsImplementation)
export const symmetricDifferenceOfSchedules = operations.symmetricDifferenceOfSchedules(DateFnsImplementation)
export const DailySchedule = schedules.DailySchedule(DateFnsImplementation)

export function Holidays(country?: Country | string, opts?: Options): Schedule<Date | number, Interval, Duration>
export function Holidays(country?: string, state?: string, opts?: Options): Schedule<Date | number, Interval, Duration>
export function Holidays(country?: string, state?: string, region?: string, opts?: Options): Schedule<Date | number, Interval, Duration>
export function Holidays(...args: any) {
    return schedules.Holidays(DateFnsImplementation)(...args)
}

export const RegularSchedule = schedules.RegularSchedule(DateFnsImplementation)
export const ScheduleFromIntervals = schedules.ScheduleFromIntervals(DateFnsImplementation)
export const From = schedules.From(DateFnsImplementation)
export const Until = schedules.Until(DateFnsImplementation)
export const Mondays = schedules.Mondays(DateFnsImplementation)
export const Tuesdays = schedules.Tuesdays(DateFnsImplementation)
export const Wednesdays = schedules.Wednesdays(DateFnsImplementation)
export const Thursdays = schedules.Thursdays(DateFnsImplementation)
export const Fridays = schedules.Fridays(DateFnsImplementation)
export const Saturdays = schedules.Saturdays(DateFnsImplementation)
export const Sundays = schedules.Sundays(DateFnsImplementation)
export const WorkingDays = schedules.WorkingDays(DateFnsImplementation)
export const Weekends = schedules.Weekends(DateFnsImplementation)
export const addDurationWithinSchedule = functions.addDurationWithinSchedule(DateFnsImplementation)
export const isWithinSchedule = functions.isWithinSchedule(DateFnsImplementation)