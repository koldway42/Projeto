import React, { Component } from 'react';

import Main from "../template/main"
import Graph from "../template/deps/PieGraph"
import GraphMat from "../template/deps/PieGraphMat"
import GraphBio from "../template/deps/PieGraphBio"

export default class visitors extends Component {

    render() {
        return (
            <Main>
                <div className="container-fuild">
                    <h1 className="display-4"> Estatísticas</h1>
                    <hr/>
                    <Graph />
                    <GraphMat />
                    <GraphBio />
                </div>
            </Main>
        )
    }
}
