import { useLoaderData } from "react-router-dom";
import Coffee from "./components/Coffee";

export default function App() {
    const coffees = useLoaderData();
    console.log(coffees);
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold underline text-center">
                Totol Coffees: {coffees.length}
            </h1>
            <div className="w-3/4 grid grid-cols-2 gap-2 mx-auto">
              {
                coffees.map(coffee => <Coffee key={coffee._id} coffee={coffee}></Coffee>)
              }
            </div>
        </div>
    );
}
