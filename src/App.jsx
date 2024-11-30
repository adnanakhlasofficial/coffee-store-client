import { useLoaderData } from "react-router-dom";
import Coffee from "./components/Coffee";
import { useState } from "react";

export default function App() {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees);

    const handleDeleteFilter = (_id) => {
        console.log(_id);
        const remainingCoffees = coffees.filter((coffee) => coffee._id !== _id);
        setCoffees(remainingCoffees);
    };

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold underline text-center">
                Totol Coffees: {coffees.length}
            </h1>
            <div className="w-3/4 grid grid-cols-2 gap-2 mx-auto">
                {coffees.map((coffee) => (
                    <Coffee
                        key={coffee._id}
                        handleDeleteFilter={handleDeleteFilter}
                        coffee={coffee}
                    ></Coffee>
                ))}
            </div>
        </div>
    );
}
