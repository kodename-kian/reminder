import ShowReminder from "@/components/reminder";
import { Reminder } from "@/app/Reminder";

export default function Home() {

  const obj1 = {id: "1", value: "hello"}   as Reminder;
  const obj2 = {id: "2", value: "2"    }   as Reminder;
  const obj3 = {id: "3", value: "goodbye"} as Reminder;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-lg lg:flex">
        <ShowReminder test={obj1} />
        <ShowReminder test={obj2} />
        <ShowReminder test={obj3} />
      </div>
    </main>
  );
}
