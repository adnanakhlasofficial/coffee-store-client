const Coffee = ({ coffee }) => {
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
                        <button className="btn btn-primary">Update</button>
                        <button className="btn btn-primary">Remove</button>
                    </div>
                </div>
            </div>
            ;
        </div>
    );
};

export default Coffee;
