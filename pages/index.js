import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://blog.stickerstars.de/static/267bfd57668b625c7a61fd375a07870e/92f8c/stickerstars-business-event-planen.webp",
    address: "Some address, 1234 Random Str",
    description: "Attend this first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://entrepreneurhandbook.co.uk/wp-content/uploads/2019/10/London-business-event.jpg.webp",
    address: "Some address, 456 Random Str",
    description: "Attend this second meetup!",
  },
  {
    id: "m3",
    title: "A Third Meetup",
    image:
      "https://addicted2success.com/wp-content/uploads/2018/06/8-Reasons-You-Should-Join-a-Meetup-Group-Today.jpg",
    address: "Online",
    description: "Attend this third meetup!",
  },
  {
    id: "m4",
    title: "A Fourth Meetup",
    image:
      "https://i.pinimg.com/736x/81/ac/cc/81accc20a62f5835e2ec63b5775f4819.jpg",
    address: "Some address, 0002 Random Str",
    description: "Attend this fourth meetup!",
  },
];

export default function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}
