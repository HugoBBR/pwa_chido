/**
=========================================================
* Soft UI Dashboard PRO React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/**
  This file is used for controlling the global states of the components,
  you can customize the states for the different components here.
*/
import * as React from 'react';
import { ReactNode, createContext, useContext, useMemo, useReducer } from 'react';

// prop-types is a library for typechecking of props

// The Soft UI Dashboard PRO React main context
const SoftUI = createContext<any>(null);

// Setting custom name for the context which is visible on react dev tools
SoftUI.displayName = 'SoftUIContext';
interface StateTypes {
  miniSidenav: boolean;
  transparentSidenav: boolean;
  whiteSidenav: boolean;
  sidenavColor:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | 'light'
    | 'dark';
  transparentNavbar: boolean;
  fixedNavbar: boolean;
  openConfigurator: boolean;
  direction: 'ltr' | 'rtl';
  layout: 'dashboard' | 'page';
  darkMode: boolean;
}

interface ActionTypes {
  type:
    | 'MINI_SIDENAV'
    | 'TRANSPARENT_SIDENAV'
    | 'WHITE_SIDENAV'
    | 'SIDENAV_COLOR'
    | 'TRANSPARENT_NAVBAR'
    | 'FIXED_NAVBAR'
    | 'OPEN_CONFIGURATOR'
    | 'DIRECTION'
    | 'LAYOUT'
    | 'DARKMODE';
  value: any;
}

// Soft UI Dashboard PRO React reducer
function reducer(state: any, action: any) {
  switch (action.type) {
    case 'MINI_SIDENAV': {
      return { ...state, miniSidenav: action.value };
    }
    case 'TRANSPARENT_SIDENAV': {
      return { ...state, transparentSidenav: action.value };
    }
    case 'SIDENAV_COLOR': {
      return { ...state, sidenavColor: action.value };
    }
    case 'TRANSPARENT_NAVBAR': {
      return { ...state, transparentNavbar: action.value };
    }
    case 'FIXED_NAVBAR': {
      return { ...state, fixedNavbar: action.value };
    }
    case 'OPEN_CONFIGURATOR': {
      return { ...state, openConfigurator: action.value };
    }
    case 'DIRECTION': {
      return { ...state, direction: action.value };
    }
    case 'LAYOUT': {
      return { ...state, layout: action.value };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

// Soft UI Dashboard PRO React context provider
function SoftUIControllerProvider({ children }: { children: ReactNode }) {
  const initialState = {
    miniSidenav: true,
    transparentSidenav: false,
    sidenavColor: 'dark',
    transparentNavbar: true,
    fixedNavbar: false,
    openConfigurator: false,
    direction: 'ltr',
    layout: 'dashboard',
  };

  const [controller, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => [controller, dispatch], [controller, dispatch]);

  return <SoftUI.Provider value={value}>{children}</SoftUI.Provider>;
}

// Soft UI Dashboard PRO React custom hook for using context
function useSoftUIController() {
  const context = useContext(SoftUI);

  if (!context) {
    throw new Error('useSoftUIController should be used inside the SoftUIControllerProvider.');
  }

  return context;
}

// Typechecking props for the SoftUIControllerProvider

// Context module functions
const setMiniSidenav = (dispatch: (arg0: { type: string; value: any }) => any, value: boolean) =>
  dispatch({ type: 'MINI_SIDENAV', value });
const setTransparentSidenav = (dispatch: (arg0: { type: string; value: any }) => any, value: any) =>
  dispatch({ type: 'TRANSPARENT_SIDENAV', value });
const setSidenavColor = (dispatch: (arg0: { type: string; value: any }) => any, value: any) =>
  dispatch({ type: 'SIDENAV_COLOR', value });
const setTransparentNavbar = (dispatch: (arg0: { type: string; value: any }) => any, value: any) =>
  dispatch({ type: 'TRANSPARENT_NAVBAR', value });
const setFixedNavbar = (dispatch: (arg0: { type: string; value: any }) => any, value: any) =>
  dispatch({ type: 'FIXED_NAVBAR', value });
const setOpenConfigurator = (dispatch: (arg0: { type: string; value: any }) => any, value: any) =>
  dispatch({ type: 'OPEN_CONFIGURATOR', value });
const setDirection = (dispatch: (arg0: { type: string; value: any }) => any, value: any) =>
  dispatch({ type: 'DIRECTION', value });
const setLayout = (dispatch: (arg0: { type: string; value: any }) => any, value: any) =>
  dispatch({ type: 'LAYOUT', value });

export {
  SoftUIControllerProvider,
  useSoftUIController,
  setMiniSidenav,
  setTransparentSidenav,
  setSidenavColor,
  setTransparentNavbar,
  setFixedNavbar,
  setOpenConfigurator,
  setDirection,
  setLayout,
};
