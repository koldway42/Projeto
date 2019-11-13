import React from 'react'

import Main from "../template/main";

import "./roadmap.css"

export default function roadmap() {
    return (
        <Main>
            <div className="container-fluid p-2">
                <h2 className="display-4">Roadmap</h2>
                <hr/>
                <h4>28/07/2019 - Início</h4>
                <ul className="Roadmap">
                    <li>
                        <p>
                            - O diretório no GitHub foi criado e clonado para dar início ao projeto.
                        </p>
                    </li>
                    <li>
                        <p>
                            - Dentro do diretório, já em uma máquina física, foram criados dois diretórios:
                            <ul className="my-3">
                                <li>
                                    <p>
                                        - <strong>Frontend</strong> -> Arquivos que serão executados do lado
                                        cliente.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        - <strong>Backend</strong> -> Arquivos que serão executados do lado
                                        servidor.
                                    </p>
                                </li>
                            </ul>
                        </p>
                    </li>
                    <li>
                        <p>
                            - Dentro da pasta "Backend", foi iniciado um projeto "NPM", juntamente à instalação
                            da dependência Express.
                        </p>
                    </li>
                    <li>
                        <p>
                            - Dentro da pasta "Frontend", utilizando o "create-react-app", foi criada uma aplicação
                            "React", juntamente à instalação das dependências Axios, Bootstrap, Font-Awesome, React Router
                            e React DOM.
                        </p>
                    </li>
                    <li>
                        <p>
                            - Dentro da pasta raiz do projeto "React", foi criado um diretório, onde ficarão
                            todos os componentes da página.
                        </p>
                    </li>
                    <li>
                        <p>
                            - Os componentes primários da página foram criados
                            <ul className="my-3">
                                <li>
                                    <p>
                                        - <strong>Header</strong> -> cabeçalho
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        - <strong>Footer</strong> -> Rodapé
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        - <strong>Logo</strong> -> Logotipo
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        - <strong>Main</strong> -> Principal
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        - <strong>Nav</strong> -> Navegação
                                    </p>
                                </li>
                            </ul>
                        </p>
                    </li>
                    <li>
                        <p>
                            - Cada componente possui um arquivo de estilo para sí.
                        </p>
                    </li>
                    <li>
                        <p>
                            - Foi feita a criação do componente "App", que constituí na junção
                            de todos os componentes da página.
                        </p>
                    </li>
                    <li>
                        <p>
                            - O componente "App" foi adicionado à renderização para página web, utilizando
                            "React DOM".
                        </p>
                    </li>
                    <li>
                        <p>
                            - Foi realizado a estilização do componente "App", formando o esqueleto da página.
                        </p>
                    </li>
                    <li>
                        <p>
                            - Cada componente foi estilizado separadamente, com um padrão de cores claro.
                        </p>
                    </li>
                    <li>
                        <p>
                            - Mais dois componentes foram criados. Estes serão o conteúdo em sí da página
                            <ul className="my-3">
                                <li>
                                    <p>
                                        - <strong>Home</strong> -> Página inicial e documentação.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        - <strong>Projetos</strong> -> Onde ficará o registro dos projetos
                                        adicionado ao sistema.
                                    </p>
                                </li>
                            </ul>
                        </p>
                    </li>
                    <li>
                        <p>
                            - Os dois componentes foram adicionados à navegação.
                        </p>
                    </li>
                    <li>
                        <p>
                            - Utilizando "React Router", foi organizado a alteração dinâmica do conteúdo
                            dentro do componente "Main", permitindo assim, navegação pelos conteúdos.
                        </p>
                    </li>
                </ul>
                <h4>29/07/2019</h4>
                <ul className="Roadmap">
                    <li>
                        <p>
                            - Após uma sugestão de alteração no padrão de cores, ele passou a ser Escuro.
                        </p>
                    </li>
                    <li>
                        <p>
                            - Foi adicionado um botão para testes e um botão para redirecionamento para uma página que realizará
                            o cadastro dos projetos.
                        </p>
                    </li>
                    <li>
                        <p>
                            - O componente de conteúdo foi criado e adicionado à navegação do "React Router".
                        </p>
                    </li>
                </ul>
                <h4>16/08/2019</h4>
                <ul className="Roadmap">
                    <li>
                        <p>
                            - Uma reunião em grupo ocorreu para discutir sobre o design mobile da página.
                        </p>
                    </li>
                    <li>
                        <p>
                            - Uma nova logo foi sugerida.
                        </p>
                    </li>
                    <li>
                        <p>
                            - Novo nome foi decidido, "Aiki".
                        </p>
                    </li>
                </ul>
                <h4>17/08/2019</h4>
                <ul className="Roadmap">
                    <li>
                        <p>
                            - A logo foi desenhada utilizando o aplicativo de edição de imagem "gimp".
                        </p>
                    </li>
                    <li>
                        <p>
                            - A logo reserva foi substituída pela Logo oficial.
                        </p>
                    </li>
                    <li>
                        <p>
                            - Foi adicionado o design mobile à responsividade da página, ainda não estando 100% implementado
                        </p>
                    </li>
                </ul>
                <h4>22/08/2019</h4>
                <ul className="Roadmap">
                    <li>
                        <p>
                            - Foram feitas alterações na barra de navegação
                        </p>
                    </li>
                    <li>
                        <p>
                            - Componente contato foi criado e adicionado ao "React-Router"
                        </p>
                    </li>
                </ul>
                <h4>14/09/2019</h4>
                <ul className="Roadmap">
                    <li>
                        <p>
                            - Na pasta "Backend", foi criada uma pasta "src" ou "pasta raíz".
                        </p>
                    </li>
                    <li>
                        <p>
                            - Dentro da pasta raíz, foram criados 3 diretórios:
                            <ul className="my-3">
                                <li>
                                    <p>
                                        - <strong>config</strong> -> Configurações do sistema.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        - <strong>controllers</strong> -> Regras de negócio do sistema.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        - <strong>models</strong> -> Modelo de banco de dados do sistema.
                                    </p>
                                </li>
                            </ul>
                            <li>
                                <p>
                                    - No diretório raiz, foi criado um arquivo "index", que é responsável
                                    por centralizar e unificar todo o funcionamento do sistema.
                                </p>
                            </li>
                            <li>
                                <p>
                                    - No diretório config, foram criados 3 arquivos:
                                    <ul className="my-3">
                                        <li>
                                            <p>
                                                - <strong>middlewares</strong> -> Configuração dos middlewares utilizados
                                                no sistema.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                - <strong>routes</strong> -> Configuração dos "endpoints" do sistema.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                - <strong>upload</strong> -> Configuração do upload de imagem do sistema.
                                            </p>
                                        </li>
                                    </ul>
                                </p>
                                <li>
                                    <p>
                                        - No diretório "models", foi criado o modelo de Postagem de projetos.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        - No diretório "controllers", foi criado o controlador das Postagens de Projetos.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        - O controlador das postagens de projeto possui dois métodos principais, um para salvar dados,
                                        e outro para obter todos os dados.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        - Os dois métodos foram adicionados ao endpoint "/projects". O store no Método POST,
                                        e o get no método GET
                                    </p>
                                </li>
                            </li>
                        </p>
                    </li>
                </ul>
                <h4>15/09/2019</h4>
                <ul className="Roadmap">
                    <li>
                        <p>
                            - Foi feita a integracão entre o backend e o frontend.
                        </p>
                    </li>
                </ul>
                <h4>22/09/2019</h4>
                <ul className="Roadmap">
                    <li>
                        <p>
                            - Foi adicionado tratamento de erro e validações no backend da página.
                        </p>
                    </li>
                </ul>
            </div>
        </Main>
    )
}
