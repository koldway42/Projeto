import React, { Component } from 'react'
import * as V from "victory";
import api from "../../../services/api"

const VictoryPie = V.VictoryPie;
const VictoryContainer = V.VictoryContainer;
const VictoryLabel = V.VictoryLabel;
const VictoryTheme = V.VictoryTheme;

export default class PieGraph extends Component {

    defaultState = {
        ratings: [],
        TotalRatings: 0,
    }

    state = this.defaultState;

    async componentDidMount() {
        this.state = this.defaultState;

        let response = await api.get("/visitors")
    
        let TotalRatings = response.data.length;

        const visitors = response.data;
        visitors.forEach(item => {
            const obj = {
                x: item.favoriteBiomeProj,
                y: 0,
                label: item.favoriteBiomeProj,
            }
            if(!(this.state.ratings.find(el => el.x === obj.x))) {
                this.state.ratings.push(obj)
            }
        })

        console.log(this.state.ratings);

        this.state.ratings.forEach((item, index) => {
            visitors.map(e => {
                if(item.x === e.favoriteBiomeProj) {
                    this.state.ratings[index].y++;
                }
            })
        })

        this.state.TotalRatings = TotalRatings;

        const ratings = [];
        this.state.ratings.forEach((item, index, array ) => {
            if(item.y > 0) {
                item.label = item.x + " (" + ((100 * item.y) / this.state.TotalRatings).toFixed(1) + "%)"; 
                ratings.push(item)
            }
        })

        console.log(ratings);

        this.setState( {ratings} );
    }

    render() {
        const data = this.state.ratings;
        const animation = {
            duration: 1000,
        }

        let runGraph = false;

        this.state.ratings.map(item => {
            if(item.y > 0) {
                runGraph = true;
            }
        })
        

        return (   
            <div className="mx-auto d-block p-3">
                <h2>Ranking(Biomas)</h2>
                {runGraph ?
                    <div id="RatingGraph">
                            <VictoryPie 
                                data={data}
                                theme={VictoryTheme.material}
                                labelComponent={<VictoryLabel
                                     
                                    />}
                                width={500}
                                padding={{
                                    top: 0,
                                    bottom: 0,
                                    left: 150,
                                    right: 150
                                }}
                                style={{
                                    labels:{fontSize: 6}
                                }}
                                containerComponent={<VictoryContainer   
                                    responsive={true}
                                    animate={animation}
                                    />}
                            />
                    </div>
                : <h3><strong> Sem avaliacões </strong></h3>}
                <hr/>
            </div>
        )
    }
}
