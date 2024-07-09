'use client';

import ReminderList from "@/components/reminderList";
import Button from "@/components/Button";
import { Reminder } from "@/app/Reminder";

export default function Home() {

  const obj1 = {id: "1", value: "hello",   date: new Date("2024-06-20")}   as Reminder;
  const obj2 = {id: "2", value: "2",       date: new Date("2024-06-25")}   as Reminder;
  const obj3 = {id: "3", value: "goodbye", date: new Date("2024-07-01")}   as Reminder;

  const comb = [obj1, obj2, obj3] as Reminder[];

  return (
    <main className="flex min-h-screen flex-col items-center p-16 bg-beige-200">
      <div className="font-mono font-bold text-3xl pb-6">
        My Reminders List [DEMO]
      </div>
      <div className="font-mono text-xl pb-6">
        <Button onClick={()=>console.log("create button pressed")} value="NEW REMINDER" styles="bg-green-200" />
      </div>
      <ReminderList reminders={comb}/>
    </main>
  );
}
