import React from "react"

import Main from "../template/main"

export default props => {
    return (
        <Main>
            <div className="container-fluid p-3">
                <h1 className="display-4">Contato</h1>
                <hr/>
                <form className="row form-group m-3" action="">
                    <div className="col-12 col-md-6 mb-3">
                        <label htmlFor="Name">Nome</label>
                        <input type="text" id="Name" name="Name" className="form-control"
                        placeholder="Digite seu Nome..." required/>
                    </div>
                    <div className="col-12 col-md-6 mb-3">
                        <label htmlFor="Email">Email</label>
                        <input type="email" id="Email" name="Email" className="form-control"
                        placeholder="Digite o endereço de email..." required/>
                    </div>
                    <div className="col-12 mb-4">
                                <label htmlFor="nome-projeto">Descrição</label>
                                <textarea id="nome-projeto" className="form-control"
                                placeholder="Digite sua mensagem..." rows="5" required />
                            </div>
                    <div className="col-12 d-flex justify-content-end mb-3">
                        <button type="reset" className="btn btn-secondary">cancelar</button>
                        <button type="submit" className="btn btn-success ml-2">Enviar</button>
                    </div>
                </form>
            </div>
        </Main>
    )
}