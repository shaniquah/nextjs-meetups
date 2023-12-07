import Image from "next/image";
import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://blog.stickerstars.de/static/267bfd57668b625c7a61fd375a07870e/92f8c/stickerstars-business-event-planen.webp"
      title="First Meetup"
      alt="First Meetup"
      address="Some Street 123, Random City"
      description="This is a first meetup"
    />
  );
}
