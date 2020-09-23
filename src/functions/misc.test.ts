import {catchInfiniteDate, catchInfiniteInterval, directionToInt, isEmpty, isWithinSchedule, stripTime} from "./misc"
import {isEqual, parseISO} from "date-fns"
import {DateInfinity, ScheduleFromIntervals} from "../index"

test('Empty array', () => {
    expect(isEmpty([])).toStrictEqual(true)
})

test('Not empty array', () => {
    expect(isEmpty([1])).toStrictEqual(false)
})

test('Positive infinite date', () => {
    expect(isEqual(catchInfiniteDate(Infinity), DateInfinity)).toStrictEqual(true)
})

test('Negative infinite date', () => {
    expect(isEqual(catchInfiniteDate(-Infinity), -DateInfinity)).toStrictEqual(true)
})

test('Finite date', () => {
    expect(38914).toBe(38914)
})

test('Catch Infinite interval', () => {
    let dirtyInterval = {start: -Infinity, end: Infinity}
    let cleanInterval = catchInfiniteInterval(dirtyInterval)
    expect(isEqual(cleanInterval.start, -DateInfinity)).toStrictEqual(true)
    expect(isEqual(cleanInterval.end, DateInfinity)).toStrictEqual(true)
})

test('isWithinSchedule 1', () => {
    let schedule = ScheduleFromIntervals({start: 0, end: 10}, {start: 30, end: 40}, {start: 60, end: 70})
    let date = new Date(50)
    expect(isWithinSchedule(date, schedule)).toBeFalsy()
})


test('isWithinSchedule 2', () => {
    let schedule = ScheduleFromIntervals({start: 0, end: 10}, {start: 30, end: 40}, {start: 60, end: 70})
    let date = new Date(65)
    expect(isWithinSchedule(date, schedule)).toBeTruthy()
})


test('directionToInt', () => {
    expect(directionToInt("forward")).toStrictEqual(1)
    expect(directionToInt(1)).toStrictEqual(1)
    expect(directionToInt("backward")).toStrictEqual(-1)
    expect(directionToInt(-1)).toStrictEqual(-1)
    // @ts-ignore
    expect(() => directionToInt("Test")).toThrowError()
})

test('stripTime', () => {
    expect(isEqual(stripTime(parseISO("2020-10-01T18:23Z")), parseISO("2020-10-01T00:00Z"))).toStrictEqual(true)
})