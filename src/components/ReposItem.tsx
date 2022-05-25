import { Repositorio } from "./ReposList";

interface RepositorioItem {
    repositorio: Repositorio
}

export function ReposItem(props: RepositorioItem){
    return(
        <>
        <div className="col col-2">
            <div className="itemConteudoMargin">
                <div className="itemConteudoRepositorio">
                    <div className="col">
                        <div className="col col-2-itemTituloRepositorio">
                            <div className="itemConteudoTituloRepositorio">
                                <a className="AnchorRepositorio" href={props.repositorio.html_url} target="_blank">
                                    <h1 className="tituloItemRepositorio">{props.repositorio.name}</h1>
                                </a>
                            </div>
                        </div>

                        <div className="col col-2-itemStatusRepositorio">
                            <div className="itemConteudoTituloRepositorio">
                                <p className="statusItemRepositorio"> {props.repositorio.visibility} </p>
                            </div>
                        </div>
                    </div>
                    <p className="descricaoItemRepositorio">{props.repositorio.description}</p>
                    <p className="linguageItemRepositorio"> {props.repositorio.language } </p>
                </div>
            </div>
        </div>
        </>
    );
}