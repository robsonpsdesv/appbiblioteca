import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { createDrawerNavigator } from 'react-navigation-drawer';

import GeneroCad from './pages/genero-cadastro';
import GeneroList from './pages/genero-lista';
import AutorCad from './pages/autor-cadastro';
import AutorList from './pages/autor-lista';
import EditoraCad from './pages/editora-cadastro';
import EditoraList from './pages/editora-lista';
import LivroCad from './pages/livro-cadastro';
import LivroList from './pages/livro-lista';

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
        ListaAutor: {
            screen: AutorList,
            navigationOptions: {
                drawerLabel: "Lista de autor"
            }
        },
        CadastroAutor: {
            screen: AutorCad,
            navigationOptions: {
                drawerLabel: "Cadastro de autor"
            }
        },
        ListaEditora: {
            screen: EditoraList,
            navigationOptions: {
                drawerLabel: "Lista de editora"
            }
        },
        CadastroEditora: {
            screen: EditoraCad,
            navigationOptions: {
                drawerLabel: "Cadastro de editora"
            }
        },
        ListaLivro: {
            screen: LivroList,
            navigationOptions: {
                drawerLabel: "Lista de livro"
            }
        },
        CadastroLivro: {
            screen: LivroCad,
            navigationOptions: {
                drawerLabel: "Cadastro de livro"
            }
        }
    })
);

export default Routes;