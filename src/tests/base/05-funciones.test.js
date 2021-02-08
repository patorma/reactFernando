import '@testing-library/jest-dom';
import { getUser,getUsuarioActivo } from '../../base/05-funciones';


describe('Pruebas en 05-funciones',()=>{
    
    test('getUser debe retornar un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();

        expect(user).toEqual(userTest);
    

    })

 // getUsuarioActivo debe de retornar un objeto
    test('getUsuarioActivo debe retornar un objeto', () => {

        const nombre = 'Patricio'

        const userTest2 = {
            uid: 'ABC567',
            username: nombre
        }

        const user = getUsuarioActivo(nombre);
        console.log(user)
        expect(user).toEqual(userTest2);
    })
    
})