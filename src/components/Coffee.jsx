import { Link } from "react-router-dom";

const Coffee = ({ coffee }) => {

    const handleRemove = _id => {
        console.log(_id)
        fetch(`http://localhost:5000/coffees/${_id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    
    return (
        <div>
            <div className="card min-h-72 card-side bg-base-100 shadow-xl">
                <figure>
                    <img src={coffee.photo} alt="Movie" />
                </figure>
                <div className="card-body">
                    <div className="grow">
                        <h2 className="card-title">{coffee.name}</h2>
                        <p>{coffee.chef}</p>
                    </div>
                    <div className="card-actions w-full justify-end flex-nowrap">
                        <button className="btn btn-primary">View</button>
                        <Link to={`/updateCoffee/${coffee._id}`}><button className="btn btn-primary">Update</button></Link>
                        <button onClick={() => handleRemove(coffee._id)} className="btn btn-primary">Remove</button>
                    </div>
                </div>
            </div>
            ;
        </div>
    );
};

export default Coffee;
