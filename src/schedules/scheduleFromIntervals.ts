import {isWithinInterval} from "date-fns"

import {Interval, Schedule} from "../index"
import {mergeIntervals} from "../functions/intervals"
import {directionToInt} from "../functions/misc"

/**
 * Returns a schedule from the given intervals.
 *
 * @param intervals
 * @constructor
 * @category Schedules
 */
export function ScheduleFromIntervals(...intervals: Array<Interval>): Schedule {
    return function* (startDate, direction = "forward") {
        let directionInt = directionToInt(direction)

        if (directionInt === 1) {
            intervals = mergeIntervals(...intervals).filter(interval => interval.end >= startDate)
        } else {
            intervals = mergeIntervals(...intervals).filter(interval => interval.start <= startDate).reverse()
        }

        for (const interval of intervals) {
            if (directionInt === 1 && isWithinInterval(startDate, interval)) {
                yield {start: startDate, end: interval.end}
            } else if (directionInt === -1 && isWithinInterval(startDate, interval)) {
                yield {start: interval.start, end: startDate}
            } else {
                yield interval
            }
        }
    }
}