import React, {Component} from "react";
import Maps from 'react-router-dom';

class Maps extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {

        fetch('https://foodish-api.com/api/')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            })

    }

    render() {

        var { isLoaded, items } = this.state;

        if(!isLoaded) {
            return <div>Loading...</div>;
        }

        else {

            return (
                <div className="Maps">
                    
                    <ul>
                        {items.map(items => (
                            <li key={items.id}>
                                {items.name} | {items.pizza57}
                            </li>
                        ))};
                    </ul>

                </div>
            );
        }


    }
}

export default Maps;