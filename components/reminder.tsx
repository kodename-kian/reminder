import { Reminder } from "@/app/Reminder";

interface ReminderProps {
    data: Reminder,
}

export default function ShowReminder({data} : ReminderProps) {
    return (
        <div className="text-lg p-8 mt-4 border-2 w-11/12 bg-gray-100">
            {data.value} {data.date.getDate()}
        </div>
    );
}