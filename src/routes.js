import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { createDrawerNavigator } from 'react-navigation-drawer';

import GeneroCad from './pages/genero/generoCad';
import GeneroList from './pages/genero/generoList';
import LivroCad from './pages/livro/livroCad';
import LivroList from './pages/livro/livroList';

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
        },
        ListaLivro: {
            screen: LivroList,
            navigationOptions: {
                drawerLabel: "Lista de livros"
            }
        },
        CadastroLivro: {
            screen: LivroCad,
            navigationOptions: {
                drawerLabel: "Cadastro de Livro"
            }
        }
    })
);

export default Routes;