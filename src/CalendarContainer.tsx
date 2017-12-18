import * as React from "react";
import { getCalendarEvents } from "./apiHelpers";
import * as moment from "moment";
import Calendar from "./Calendar";

type Props = {
  /* */
};

type CalendarEvent = {
  id: string;
  title: string;
  start: Date;
  end: Date;
};

type State = {
  events?: CalendarEvent[];
};

class CalendarContainer extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      events: []
    };
  }

  async componentDidMount() {
    try {
      let foundEvents: CalendarEvent[] = [];
      const response = await getCalendarEvents();
      if (response && response.data.items) {
        for (const item of response.data.items) {
          const event = {
            id: item.id,
            title: item.summary,
            start: new Date(item.start.dateTime),
            end: new Date(item.end.dateTime)
          };
          foundEvents.push(event);
        }

        this.setState({ events: foundEvents });
      }
    } catch (e) {
      console.error(e); // 💩
    }
  }

  render() {
    return <Calendar events={this.state.events} />;
  }
}

export default CalendarContainer;
