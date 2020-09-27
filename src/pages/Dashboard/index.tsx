import React from 'react';

import logoSvg from '../../assets/logo.svg';

import {Title, Form} from './styles';

/*
Sempre tipar o componente com React.FC
*/
const Dashboard:React.FC = () => {

    return (
        <>
            <img src={logoSvg} alt="Github Explorer"/>
            <Title>Explore repositórios no Github</Title>

            <Form>
                <input placeholder="Digite o nome do repositório"/>
                <button type="submit">Pesquisar</button> 

            </Form>
        </>
    );
};

export default Dashboard;