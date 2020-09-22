import {Schedule} from "../index"
import {isWithinInterval} from "date-fns"
import {mergeIntervals} from "../functions/intervals"

export function ScheduleFromIntervals(...intervals: Array<Interval>): Schedule {
    return function* (startDate) {
        intervals = mergeIntervals(...intervals).filter(interval => interval.end >= startDate)
        for (const interval of intervals) {
            if (isWithinInterval(startDate, interval)) {
                yield {start: startDate, end: interval.end}
            } else {
                yield interval
            }
        }
    }
}