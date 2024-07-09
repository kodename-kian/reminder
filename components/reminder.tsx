import { Reminder } from "@/app/Reminder";
import Button from "@/components/Button";
import { useState } from "react";

interface ReminderProps {
    data: Reminder,
}

export default function ShowReminder({data} : ReminderProps) {

    const [complete, setComplete] = useState(false);

    if (data.complete) { setComplete(true); }

    return (
        <div className="text-lg flex flex-row p-8 mt-4 border-2 w-11/12 bg-gray-100">
            <div className="w-2/3">
                {data.value} {data.date.getDate()}
            </div>
            { complete ? <Button onClick={()=>setComplete(!complete)} value="INCOMPLETE" styles="bg-red-400" />
                       : <Button onClick={()=>setComplete(!complete)} value="COMPLETE" styles="bg-green-400" />}
            <Button onClick={()=>console.log("edit clicked")} value="EDIT" styles="bg-purple-400" />
            <Button onClick={()=>console.log("delete clicked")} value="DELETE" styles="bg-red-400" />
        </div>
    );
}