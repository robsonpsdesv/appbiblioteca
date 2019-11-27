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
import ClienteCad from './pages/cliente-cadastro';
import ClienteList from './pages/cliente-lista';
import EnderecoCad from './pages/endereco-cadastro';
import EnderecoList from './pages/endereco-lista';
import EmprestimoCad from './pages/emprestimo-cadastro';
import EmprestimoList from './pages/emprestimo-lista';

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
        },
        ListaCliente: {
            screen: ClienteList,
            navigationOptions: {
                drawerLabel: "Lista de cliente"
            }
        },
        CadastroCliente: {
            screen: ClienteCad,
            navigationOptions: {
                drawerLabel: "Cadastro de cliente"
            }
        },
        ListaEndereco: {
            screen: EnderecoList,
            navigationOptions: {
                drawerLabel: "Lista de endereço"
            }
        },
        CadastroEndereco: {
            screen: EnderecoCad,
            navigationOptions: {
                drawerLabel: "Cadastro de endereço"
            }
        },
        ListaEmprestimo: {
            screen: EmprestimoList,
            navigationOptions: {
                drawerLabel: "Lista de emprestimo"
            }
        },
        CadastroEmprestimo: {
            screen: EmprestimoCad,
            navigationOptions: {
                drawerLabel: "Cadastro de empréstimo"
            }
        }
    })
);

export default Routes;