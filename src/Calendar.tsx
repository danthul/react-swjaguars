import * as React from "react";
import BigCalendar from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import * as moment from "moment";
import styled from "styled-components";
import Panel from "./Panel";

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

const CalendarDiv = styled.div`
  background-color: #faf9f9;
  height: 70vh;
  width: 75vw;
`;

const CalendarWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

type CalendarProps = {
  events?: CalendarEvent[];
};

type CalendarEvent = {
  id: string;
  title: string;
  start: Date;
  end: Date;
};

const MonthEvent = item => {
  console.log(item);
  return (
    <span>
      {moment(item.event.start).format("hA") + " "}
      <strong>{item.title}</strong>
    </span>
  );
};

const DefaultEvent = event => {
  return (
    <span>
      <strong>{event.title}</strong>
    </span>
  );
};

const formats = {
  dayFormat: (date, culture, localizer) =>
    localizer.format(date, "M/D", culture)
};

const Calendar: React.SFC<CalendarProps> = ({ events }: CalendarProps) => (
  <div className="container">
    <div className="row">
      <main className="col-md-12">
        <Panel heading="Southwest Lacrosse Calendar of Events">
          <CalendarWrapper>
            <CalendarDiv>
              {events ? (
                <BigCalendar
                  events={events}
                  step={30}
                  defaultDate={new Date(Date.now())}
                  defaultView="month"
                  components={{
                    event: DefaultEvent,
                    month: {
                      event: MonthEvent
                    }
                  }}
                  formats={formats}
                />
              ) : (
                <div />
              )}
            </CalendarDiv>
          </CalendarWrapper>
        </Panel>
      </main>
    </div>
  </div>
);

export default Calendar;
