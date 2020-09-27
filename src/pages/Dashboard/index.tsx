import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoSvg from '../../assets/logo.svg';

import {Title, Form, Repositories} from './styles';

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

            <Repositories>
                <a href="teste">
                    <img src="https://avatars0.githubusercontent.com/u/13223384?s=460&u=b586bfc0adcbe102b243477042b1a56f826fcccd&v=4"
                        alt="Franciel Leandro"
                    />
                    <div>
                        <strong>francielleandro/appcerto</strong>
                        <p>Uma simples e certa aplicação!</p>
                    </div>
                    <FiChevronRight size={20}/>
                </a>
            </Repositories>
        </>
    );
};

export default Dashboard;