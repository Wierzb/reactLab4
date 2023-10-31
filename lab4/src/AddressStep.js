function AddressStep (props) {

    return (
        <div className="d-flex justify-content-center align-items-center border border-2 border-black p-5 m-5 ">
            <form onSubmit={props.nextStep} className="w-50">
                <fieldset>
                    <legend>Delivery address</legend>
                    <div className="form-group">
                        <label htmlFor="inputDeliveryStreet" className="mb-2">Street</label>
                        <input type="text" className="form-control" id="inputDeliveryStreet" placeholder="Enter street" required/>
                        <label htmlFor="inputDeliveryZip" className="my-2">Zip code</label>
                        <input type="text" className="form-control" id="inputDeliveryZip" placeholder="Enter zip code" required
                               pattern="[0-9]{2}-[0-9]{3}"/>
                        <label htmlFor="inputDeliveryCity" className="my-2">City</label>
                        <input type="text" className="form-control" id="inputDeliveryCity" placeholder="Enter city" required/>
                    </div>
                </fieldset>
                <fieldset className="mt-3">
                    <legend>Invoice address</legend>
                    <div className="form-group">
                        <label htmlFor="inputInvoiceStreet">Street</label>
                        <input type="text" className="form-control" id="inputInvoiceStreet" placeholder="Enter street" required/>
                        <label htmlFor="inputInvoiceZip">Zip code</label>
                        <input type="text" className="form-control" id="inputInvoiceZip" placeholder="Enter zip code" required
                               pattern="[0-9]{2}-[0-9]{3}"/>
                        <label htmlFor="inputInvoiceCity">City</label>
                        <input type="text" className="form-control" id="inputInvoiceCity" placeholder="Enter city" required/>
                    </div>
                </fieldset>
                <input type="submit" value="Next" className="mt-5"></input>
            </form>
        </div>
    );
}

export default AddressStep;
