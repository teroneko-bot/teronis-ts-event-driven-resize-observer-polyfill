import { ArgtiveEvent } from "@teronis-js/event-dispatcher";
import ResizeObserver from "resize-observer-polyfill";

export type EventDrivenResizeObserverCallbackType = (entry: ResizeObserverEntry, observer: EventDrivenResizeObserver) => void;

type EventWithTargetType = { target: Element, event: ArgtiveEvent<EventDrivenResizeObserverCallbackType> };

export type UnobserveEventDrivenResizeObserver = () => void;

export class EventDrivenResizeObserver {
    private resizeObserver: ResizeObserver;
    private listOfEventWithTarget: EventWithTargetType[];

    public constructor() {
        this.handleResize = this.handleResize.bind(this);
        this.resizeObserver = new ResizeObserver(this.handleResize);
        this.listOfEventWithTarget = [];
    }

    public observe(target: Element, callback: EventDrivenResizeObserverCallbackType) {
        let eventWithTarget = this.getEventByTarget(target);

        // prepare if first callback of target
        if (!eventWithTarget) {
            eventWithTarget = {
                target,
                event: new ArgtiveEvent<EventDrivenResizeObserverCallbackType>()
            };

            this.listOfEventWithTarget.push(eventWithTarget);
            this.resizeObserver.observe(target);
        }

        // subscribe to event that belongs to target
        eventWithTarget.event.subscribe(callback);

        const unobserve: UnobserveEventDrivenResizeObserver = () => {
            this.unobserve(target, callback);
        };

        return unobserve;
    }

    public unobserve(target: Element, callback: EventDrivenResizeObserverCallbackType) {
        const eventWithTarget = this.getEventByTarget(target);

        if (eventWithTarget) {
            eventWithTarget.event.unsubscribe(callback);

            if (eventWithTarget.event.length === 0) {
                this.listOfEventWithTarget = this.listOfEventWithTarget.filter(function (eventWithTarget) {
                    return !eventWithTarget.target.isSameNode(target);
                });
            }
        }
    }

    public disconnect() {
        this.resizeObserver.disconnect();
    }

    private getEventByTarget(target: Element): EventWithTargetType | null {
        for (const eventWithTarget of this.listOfEventWithTarget) {
            if (eventWithTarget.target.isSameNode(target)) {
                return eventWithTarget;
            }
        }

        return null;
    }

    private handleResize(entries: ResizeObserverEntry[], observer: ResizeObserver) {
        for (const entry of entries) {
            const eventWithTarget = this.getEventByTarget(entry.target);

            if (eventWithTarget) {
                eventWithTarget.event.invoke(entry, this);
            }
        }
    }
}