function NameStep (props) {
    return (
        <div className="d-flex justify-content-center align-items-center border border-2 border-black p-5 m-5">
            <form onSubmit={props.nextStep} className="w-50">
                <fieldset>
                    <legend className="mb-5">Info</legend>
                    <div className="form-group">
                        <label htmlFor="inputFirstName" className="mb-2">First name</label>
                        <input type="text" className="form-control" id="inputFirstName" placeholder="Enter first name" required/>
                        <label htmlFor="inputLastName" className="my-2">Last name</label>
                        <input type="text" className="form-control" id="inputLastName" placeholder="Enter last name" required/>
                        <label htmlFor="inputEmail" className="my-2">Email address</label>
                        <input type="email" className="form-control" id="inputEmail" placeholder="Enter email" required/>
                    </div>
                </fieldset>

                <input type="submit" value="Next" className="mt-5"/>
            </form>
        </div>
    );
}

export default NameStep;
