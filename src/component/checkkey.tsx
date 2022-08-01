import React, { Component } from 'react'
class CalenderSettingsModal extends React.Component<
    {}, Istate

>  {

    constructor(props: {}) {
        super(props);
        this.state = {
            workStart: 8,
            workEnd: '',
            workDays: [],
        }
    }

    handleCheckboxChange = (event: any) => {
        if (event.target.checked) {
            if (!this.state.workDays.includes(event.target.value)) {
                this.setState(prevState => ({ workDays: [...prevState.workDays, event.target.value] }))
            }
        } else {
            this.setState(prevState => ({ workDays: prevState.workDays.filter(day => day !== event.target.value) }));
        }
        console.log(this.state.workDays);

    }


    render() {
        return (
            <React.Fragment>
                <form>
                    <div>
                        <h5>Select your workday(s):</h5>
                        <div className="custom-control custom-checkbox" >
                            {
                                ["Monday", "Tuesday", /*... */].map(day => {
                                    return (
                                        <div >
                                            <input type="checkbox" id={day} value={day} onChange={this.handleCheckboxChange} />
                                            <label >{day}</label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </form>
                <button >Save settings</button>
            </React.Fragment>

        );
    }
}
interface Istate {
    // no props
    workStart: number;
    workEnd: string;
    workDays: Array<string>
    // categories: Array<{ id: number, value: string, isChecked: boolean }>;
    // selected: Array<boolean>;

}
export default CalenderSettingsModal
