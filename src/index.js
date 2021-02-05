import { render } from '@testing-library/react';
import React  from 'react';
import ReactDom from 'react-dom';
import PrimeraApp from './PrimeraApp';
import './index.css'


const divRoot = document.querySelector('#root');

// renderisar o mostrar vista
// primer parametro el elemento 
ReactDom.render(<PrimeraApp saludo="Hola Mundo"/>,divRoot)