import React, { Component } from 'react';

import CityCountyData from '../../data/taiwan city country/CityCountyData.json'

class CitySelect extends Component {
    state = {}
    render() {
        return (
            <select>
                {CityCountyData.map((item, index) => {
                    return (
                        <option key={index}>{item.CityName}</option>
                    )
                })}
            </select>
        );
    }
}

export default CitySelect;