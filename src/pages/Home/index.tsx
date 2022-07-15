import React from "react";
import * as S from "./styles";
import { CardComponent } from "components";
import dados from "services/dados";

const Home = () => {
    return(
        <S.Home>
            <picture>
                <img src="{}" alt= "Imagens do site"/>
            </picture>
            <aside>
                {dados && dados.map((item) => <CardComponent dados={item} />)}
            </aside>
        </S.Home>
    );
};

export default Home;