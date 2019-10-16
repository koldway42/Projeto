import React, { Component } from 'react'
import * as V from "victory";
import api from "../../../services/api"

import "./PieGraph.css"

const VictoryBar = V.VictoryBar;
const VictoryChart = V.VictoryChart;
const VictoryContainer = V.VictoryContainer;

export default class PieGraph extends Component {

    state = {
        ratings: [
            {x: "Péssimo", y: 0},
            {x: "Ruim", y: 0},
            {x: "Mediano", y: 0},
            {x: "Bom", y: 0},
            {x: "Ótimo", y: 0}
        ],
        TotalRatings: 0,
        HigestRatingCount: 0
    }

    async componentDidMount() {
        const response = await api.get("/visitors")

        const visitors = response.data;
        visitors.map(item => {
            let rating = item.rating;

            switch(rating) {
                case "Péssimo":
                    this.state.ratings[0].y++;
                    break;
                case "Ruim":
                    this.state.ratings[1].y++;
                    break;
                case "Mediano":
                    this.state.ratings[2].y++;
                    break;
                case "Bom":
                    this.state.ratings[3].y++;
                    break;
                case "Ótimo":
                    this.state.ratings[4].y++;
                    break;
                default:
                    alert("Erro");
            }
            this.state.TotalRatings++
        })

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
            
            <React.Fragment>
                <h2>Feedback de Usuário</h2>
                <hr/>
                {runGraph ?
                    <div id="RatingGraph">
                            <VictoryChart
                                theme={V.VictoryTheme.material}
                                domainPadding={15}
                                height={150}
                                padding={{top: 10, bottom: 30, left: 80, right: 120}}
                                animate={animation}
                            >
                                <VictoryBar 
                                    data={data} 
                                    horizontal={true}
                                    domain={{
                                        x: [1, 5]
                                    }}
                                    style={{
                                        data: {fill: "#f06543"},
                                        labels: {fill: "#333"}
                                    }}
                                />
                            </VictoryChart>
                    </div>
                : <h3><strong> Sem avaliacões </strong></h3>}
            </React.Fragment>
        )
    }
}
