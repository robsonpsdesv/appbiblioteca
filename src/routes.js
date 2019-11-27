import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { createDrawerNavigator } from 'react-navigation-drawer';

import GeneroCad from './pages/genero-cadastro';
import GeneroList from './pages/genero-lista';


const Routes = createAppContainer(
    createDrawerNavigator({
        ListaGenero: {
            screen: GeneroList,
            navigationOptions: {
                drawerLabel: "Lista de genero"
            }
        },
        CadastroGenero: {
            screen: GeneroCad,
            navigationOptions: {
                drawerLabel: "Cadastro de genero"
            }
        }
    })
);

export default Routes;