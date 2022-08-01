// import React from 'react'

// export default function Checkbox() {
//     const options = [
//         { name: 'OptionA', value: '1', checked: true },
//         { name: 'OptionB', value: '2', checked: false },
//         { name: 'OptionC', value: '3', checked: false }
//     ]

//     const selectedOptions = () => { // right now: ['1','3']
//         return options
//             .filter(opt => opt.checked)
//             .map(opt => opt.name)
//         // .map(opt => opt.name)
//     }

//     return (
//         <div>{selectedOptions()}</div>
//     )
// }
import React, { Component } from 'react'

export default class checkbox extends Component<
    {}, Istate

> {
    constructor(props: {}) {
        super(props);
        this.state = {
            categories: [
                { id: 1, value: "Angular", isChecked: false },
                { id: 2, value: "React", isChecked: false },
                { id: 3, value: "PHP", isChecked: false },
                { id: 4, value: "Laravel", isChecked: false }
            ],
            selected: [],

        }

    }
    onChange(id: any, value: string) {
        let a = id.concat(value);
        console.log(a);
        let selected = this.state.selected
        let find = selected.indexOf(id)

        if (find > -1) {
            selected.splice(find, 1)
        } else {
            selected.push(id)
        }

        this.setState({ selected })
    }

    handleDestination(event: any) {
        console.log(event)
        // const options = this.state.options
        // let index
        // if (event.target.checked) {
        //     options.push(+event.target.value)
        // }
        // else {
        //     index = options.indexOf(+event.target.value)
        //     options.splice(index, 1)
        // }
        // this.setState({ options: options })

    }

    render() {
        return (
            <div>
                <form>
                    <p>
                        {JSON.stringify(this.state.selected)}
                    </p>
                    <p>categories</p>
                    {/* {
                        this.state.categories.map(({ id, value }: any) => {
                            return (
                                <label key={id}>
                                    <input type="checkbox" onChange={() => this.onChange(id, value)}
                                    ></input>
                                    <span>{value}</span>
                                </label>
                            )
                        })
                    } */}
                    {
                        this.state.categories.map(({ id, value }: any) => {
                            return (
                                <label key={id}>
                                    {/* <input type="checkbox" onChange={() => this.onChange(id, value)}
                                    ></input> */}
                                    <input type="checkbox" onClick={event => this.handleDestination(event)}
                                    ></input>
                                    <span>{value}</span>
                                </label>
                            )
                        })
                    }
                </form>
            </div >
        )
    }
}
interface Istate {
    // no props
    categories: Array<{ id: number, value: string, isChecked: boolean }>;
    selected: Array<boolean>;

}
