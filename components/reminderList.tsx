import { Reminder } from "@/app/Reminder";
import ShowReminder from "@/components/reminder";

interface ReminderListProps {
    reminders: Reminder[],
}

export default function ReminderList({reminders} : ReminderListProps) {

    return (
        <div className="bg-green-800 pb-4 rounded-lg z-10 w-2/3 flex-col max-w-5xl items-center justify-between font-mono text-lg lg:flex"> 
            {reminders.map(reminder => (
                <ShowReminder key={reminder.id} data={reminder} />
            ))}
        </div>
    );
}