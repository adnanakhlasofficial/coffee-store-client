import Swal from "sweetalert2";

const AddCoffee = () => {

    const handleAddCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = {
            name,
            chef,
            supplier,
            taste,
            category,
            details,
            photo,
        };
        console.log(newCoffee);

        fetch("http://localhost:5000/coffees", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newCoffee),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Congratulation",
                        text: "Your Coffee has successfully added.",
                        icon: "success"
                      });
                }
            });
        form.reset();
    };

    return (
        <div className="min-h-screen grid place-content-center bg-slate-400">
            <h2 className="text-center mb-12 text-4xl font-semibold">
                Add Coffee
            </h2>
            <form
                onSubmit={handleAddCoffee}
                className="grid grid-cols-2 gap-y-2 gap-x-4"
            >
                <div className="space-y-2">
                    <label className="font-medium">Name:</label>
                    <input
                        className="w-full bg-slate-200 px-4 py-2 rounded-lg"
                        type="text"
                        name="name"
                        placeholder="Enter coffee name"
                    />
                </div>
                <div className="space-y-2">
                    <label className="font-medium">Chef:</label>
                    <input
                        className="w-full bg-slate-200 px-4 py-2 rounded-lg"
                        type="text"
                        name="chef"
                        placeholder="Enter coffee chef"
                    />
                </div>

                <div className="space-y-2">
                    <label className="font-medium">Supplier:</label>
                    <input
                        className="w-full bg-slate-200 px-4 py-2 rounded-lg"
                        type="text"
                        name="supplier"
                        placeholder="Enter coffee supplier"
                    />
                </div>
                <div className="space-y-2">
                    <label className="font-medium">Taste:</label>
                    <input
                        className="w-full bg-slate-200 px-4 py-2 rounded-lg"
                        type="text"
                        name="taste"
                        placeholder="Enter coffee taste"
                    />
                </div>

                <div className="space-y-2">
                    <label className="font-medium">Category:</label>
                    <input
                        className="w-full bg-slate-200 px-4 py-2 rounded-lg"
                        type="text"
                        name="category"
                        placeholder="Enter coffee category"
                    />
                </div>
                <div className="space-y-2">
                    <label className="font-medium">Details:</label>
                    <input
                        className="w-full bg-slate-200 px-4 py-2 rounded-lg"
                        type="text"
                        name="details"
                        placeholder="Enter coffee details"
                    />
                </div>

                <div className="w-full col-span-full space-y-2">
                    <label className="font-medium">Photo: </label>
                    <input
                        className="w-full bg-slate-200 px-4 py-2 rounded-lg"
                        type="text"
                        name="photo"
                        placeholder="Enter coffee photo url"
                    />
                </div>
                <div className="col-span-full mt-6">
                    <input
                        type="submit"
                        value="Add Coffee"
                        className="bg-gray-800 cursor-pointer hover:bg-gray-700 transition-colors duration-300 text-base-300 w-full inline-block py-2 rounded-lg"
                    />
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;
