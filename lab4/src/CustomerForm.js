import NameStep from './NameStep';
import AddressStep from './AddressStep';
import SummaryStep from './SummaryStep';
import { useState } from 'react';
function CustomerForm(props) {

    const [formStep, setStep] = useState(0);

    function nextStep (e) {
        e.preventDefault();
        setStep(previous => previous + 1);
    }

    function whichStep () {
        if(formStep === 0 ) return <NameStep formStep={formStep} nextStep={nextStep}/>;
        else if(formStep === 1) return <AddressStep formStep={formStep} nextStep={nextStep}/>
        else return <SummaryStep/>
    }

    return (
        <div>
            {whichStep()}
        </div>
    );
}

export default CustomerForm;
