import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch,Route,Redirect } from 'react-router-dom';
import DefaultLayout from '../../Commons/Layout/DefaultLayout';
import AdminLayout from '../../Commons/Layout/AdminLayout';
import  CartLayout from '../../Commons/Layout/CartLayout';
import { ROUTES,CART, ACCOUNT,PRODUCT, MANAGER } from '../../Contants';
import { withStyles } from '@material-ui/styles'
import style from './style';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../../Commons/Layout/Theme';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import configureStore from './../../Redux/configureStore';
import NotFoundPage from '../../Commons/Layout/NotFoundPage';
import ProductLayout from '../../Commons/Layout/ProductLayout';
import ManagerLayout from '../../Commons/Layout/ManagerLayout';
import GlobalLoading from '../../Components/GlobalLoading';

const store = configureStore();

class App extends Component {

    renderMasterPageRoutes() {
        let xhtml = null;
        xhtml = ROUTES.map((route) => {
            return (
                <AdminLayout
                    key={route.path}
                    path={route.path}
                    name={route.name}
                    component={route.component}
                    exact={route.exact}
                />
            );
        });
        return xhtml;
    }

    renderCartRoutes() {
        let xhtml = null;
        xhtml = CART.map((route) => {
                return (
                    <CartLayout
                        key={route.path}
                        path={route.path}
                        name={route.name}
                        component={route.component}
                    />
                );
        });
    return xhtml;
    }

    
    renderLoginRoutes() {
        let xhtml = null;
        xhtml = ACCOUNT.map((route) => {
            return (
                <DefaultLayout
                    key={route.path}
                    path={route.path}
                    name={route.name}
                    component={route.component}
                    exact={route.exact}
                />
            );
        });
        return xhtml;
    }

    
    renderProductRoutes() {
        let xhtml = null;
        xhtml = PRODUCT.map((route) => {
            return (
                <ProductLayout
                    key={route.path}
                    path={route.path}
                    name={route.name}
                    component={route.component}
                    exact={route.exact}
                />
            );
        });
        return xhtml;
    }

    renderManageRoutes() {
        let xhtml = null;
        xhtml = MANAGER.map((route) => {
            return (
                <ManagerLayout
                    key={route.path}
                    path={route.path}
                    name={route.name}
                    component={route.component}
                    exact={route.exact}
                />
            );
        });
        return xhtml;
    }

    renderRoutes(){
        let xhtml=null;
        xhtml=(
            <Switch>    
                 {this.renderLoginRoutes()}
                 {this.renderMasterPageRoutes()}
                {this.renderCartRoutes()}
                {this.renderProductRoutes()}
                {this.renderManageRoutes()}
                <Route exact path="/404" component={NotFoundPage} />
                <Redirect to="/404" />
            </Switch>
        )
        return xhtml;
    }



    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <BrowserRouter>
                        <ThemeProvider theme={theme}>
                        <GlobalLoading/>
                            <CssBaseline />
                            <Switch>
                                {this.renderRoutes()}
                            </Switch>
                        </ThemeProvider>
                    </BrowserRouter>
                </Fragment>
            </Provider>   

        );
    }
}

export default withStyles(style)(App);
