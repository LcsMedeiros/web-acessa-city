import React, { useState } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Dashboard as DashboardView,
  ProductList as ProductListView,
  UserList as UserListView,
  Typography as TypographyView,
  Icons as IconsView,
  Account as AccountView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView,
  Category as CategoryView,
  CityHallCreate as CityHallCreateView,
  MeuExemplo as MeuExemploBanana,
  DenunciationList as DenunciationView,
  GerenciarAprovacaoDeDenuncia as GerenciarAprovacaoDeDenunciaView,
  TelaPrincipalCoordenador as TelaPrincipalCoordenadorView,
  HistoricoDenuncias as HistoricoDenunciasView,
  DenunciaCoordenador as DenunciaCoordenadorView,
  EncerrarDenuncia as EncerrarDenunciaView,
  FormAprovarDenuncia as FormAprovarDenuncia,
  FormNegarDenuncia as FormNegarDenuncia
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/dashboard"
      />
      <RouteWithLayout
        component={CategoryView}
        exact
        layout={MainLayout}
        path="/category"
      />
      <RouteWithLayout
        component={MeuExemploBanana}
        exact
        layout={MainLayout}
        path="/meu-exemplo"
      />
      <RouteWithLayout
        component={CityHallCreateView}
        exact
        layout={MainLayout}
        path="/cityhall-create"
      />
      <RouteWithLayout
        component={DashboardView}
        exact  
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={UserListView}
        exact
        layout={MainLayout}
        path="/users"
      />
      <RouteWithLayout
        component={ProductListView}
        exact
        layout={MainLayout}
        path="/products"
      />
      <RouteWithLayout
        component={TypographyView}
        exact
        layout={MainLayout}
        path="/typography"
      />
      <RouteWithLayout
        component={IconsView}
        exact
        layout={MainLayout}
        path="/icons"
      />
      <RouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path="/account"
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/settings"
      />
      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/sign-up"
      />
      <Route
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/sign-in"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <RouteWithLayout
        component={DenunciationView}
        exact
        layout={MainLayout}
        path="/denunciations"
       />  
      <RouteWithLayout
        component={GerenciarAprovacaoDeDenunciaView}
        exact
        layout={MainLayout}
        path="/gerenciar-aprovacao-de-denuncia"
      />
      <RouteWithLayout
        component={TelaPrincipalCoordenadorView}
        exact
        layout={MainLayout}
        path="/tela-principal-coordenador"
      />
      <RouteWithLayout
        component={HistoricoDenunciasView}
        exact
        layout={MainLayout}
        path="/historico-denuncias"
      />
      <RouteWithLayout
        component={EncerrarDenunciaView}
        exact
        layout={MainLayout}
        path="/encerrar-denuncia/:id"
      />
      <RouteWithLayout
        component={DenunciaCoordenadorView}
        exact
        layout={MainLayout}
        path="/denuncia-coordenador/:id"
      />  
      <RouteWithLayout
        component={FormAprovarDenuncia}
        exact
        layout={MainLayout}
        path="/form-aprovar-denuncia"
      />      
      <RouteWithLayout
        component={FormNegarDenuncia}
        exact
        layout={MainLayout}
        path="/form-negar-denuncia"
      />  

      <Redirect to="/not-found" />      
    </Switch>
  );
};

export default Routes;
