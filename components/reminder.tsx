import { Reminder } from "@/app/Reminder";

interface ReminderProps {
    test: Reminder,
}

export default function ShowReminder({test} : ReminderProps) {
    console.log(test)
    return (
        <div className="text-lg text-red-600 p-8 border-2 w-full">
            {test.value}
        </div>
    );
}