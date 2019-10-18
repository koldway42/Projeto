import React, { Component } from 'react'
import * as V from "victory";
import api from "../../../services/api"

const VictoryPie = V.VictoryPie;
const VictoryContainer = V.VictoryContainer;
const VictoryLabel = V.VictoryLabel;
const VictoryTheme = V.VictoryTheme;

    const defaultState = {
        ratings: [
            {x: "Péssimo", y: 0, label: null},
            {x: "Ruim", y: 0, label: null},
            {x: "Mediano", y: 0, label: null},
            {x: "Bom", y: 0, label: null},
            {x: "Otimo", y: 0, label: null}
        ],
        TotalRatings: 0,
    }
export default class PieGraph extends Component {

    state = defaultState;

    async componentDidMount() {
        this.state = defaultState;

        const response = await api.get("/visitors")
    
        let TotalRatings = 0

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
                    console.log("Não há projetos registrados.");
            }
            TotalRatings++
        })

        this.state.TotalRatings = TotalRatings;

        const ratings = [];
        this.state.ratings.forEach((item, index, array ) => {
            if(item.y > 0) {
                item.label = item.x + " " + ((100 * item.y) / this.state.TotalRatings).toFixed(1) + "%"; 
                ratings.push(item)
            }
            console.log(array)
        })
        this.setState( {ratings} )
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
                <h2>Feedback de Usuário</h2>
                <hr/>
                <h3>Total de avaliações: {this.state.TotalRatings}</h3>
                {runGraph ?
                    <div id="RatingGraph">
                            <VictoryPie 
                                data={data}
                                theme={VictoryTheme.material}
                                labelComponent={<VictoryLabel
                                     
                                    />}
                                width={500}
                                height={500}
                                padding={{
                                    top: 10,
                                    bottom: 10,
                                    left: 100,
                                    right: 110
                                }}
                                containerComponent={<VictoryContainer   
                                    responsive={false}
                                    animate={animation}
                                    />}
                            />
                    </div>
                : <h3><strong> Sem avaliacões </strong></h3>}
            </div>
        )
    }
}
