<p align="center">
    <img src="https://github.com/GeeksHubsAcademy/2020-geekshubs-media/blob/master/image/logo.png" >	
</p>


    Considere el siguiente problema:

    Escriba un programa corto donde se tenga un array de enteros como par�metro de entrada y otro como resultado de salida.
    Se necesita calcular las siguientes operaciones.

    Clasifica :
    N�meros positivos.
    N�meros negativos.
    N�meros igual a 0.
         
    Calcula el n�mero de elementos de cada clasificaci�n, dividido por el n�mero del array.
    Represente el n�mero de cada operaci�n con un redondeo de 4 decimales.
    Devuelva un array de salida con cada operaci�n en el siguiente orden [Npositivos, Nnegativos, Nzero]
     
    Se atiente al siguiente ejemplo:
   
    Array: [1, 2 ,-8, -2, 0, 9]
    
    N�meros positivos = 1, 2, 9
    N�meros negativos = -8, -2
    N�meros igual a 0 = 0
   
    Resultado: [(Npositivios/Array.size), (Nnegativos/Array.size), (Nzero/Array.size)]
    
   
            

    En la carpeta 'test/test01.js' se encuentra el fichero con la definici�n de nuestro m�todo vac�o.
    
    El modus operandi de trabajo es el siguiente:
    
    Debes 'forkear' el proyecto a tu cuenta.
    Puedes probar que cumpla los test con: npm test
    Puedes trabajar en local y subir la soluci�n haciendo un PR a nuestro repositorio.
    Cuando se env�e la PR final, debes indicar el tiempo de dedicaci�n y los intentos que has hecho.
    Tambi�n puedes a�adir un comentario para dar cualquier tipo de feedback.
    
    



   [Suite Tests]
    
    const clasificaElementos = require('./test01.js');

    test('clasificaElementos with Array [0]', function () {
        var expected = ["0.0000", "0.0000", "1.0000"] ;
        var result = clasificaElementos([0]);
        expect(result).toEqual(expected);
    });

    test('clasificaElementos with Array [-1]', function () {
        var expected = ["0.0000", "1.0000", "0.0000"] ;
        var result = clasificaElementos([-4]);
        expect(result).toEqual(expected);
    });

    test('clasificaElementos with Array [6]', function () {
        var expected = ["1.0000", "0.0000", "0.0000"] ;
        var result = clasificaElementos([10]);
        expect(result).toEqual(expected);
    });

    test('clasificaElementos with Array [-4, 3, -9, 0, 4, 1]', function () {
        var expected = ["0.5000", "0.3333", "0.1667"] ;
        var result = clasificaElementos([-4, 3, -9, 0, 4, 1]);
        expect(result).toEqual(expected);
    });

    test('clasificaElementos with Array [5, -2, -9, 2, 0, 9]', function () {
        var expected = ["0.5000","0.3333", "0.1667"] ;
        var result = clasificaElementos([5, -2, -9, 2, 0, 9]);
        expect(result).toEqual(expected);
    });

    test('clasificaElementos with Array [0, 0, 0, 10, 0, -8]', function () {
        var expected = ["0.1667","0.1667", "0.6667"] ;
        var result = clasificaElementos([0, 0, 0, 10, 0, -8]);
        expect(result).toEqual(expected);
    });

    test('clasificaElementos with Array [-5, -6, -9, -6, 0, 0]', function () {
        var expected = ["0.0000", "0.6667", "0.3333"] ;
        var result = clasificaElementos([-5, -6, -9, -6, 0, 0]);
        expect(result).toEqual(expected);
    });

    test('clasificaElementos with Array [5, 2, 9, -2, -2, -9]', function () {
        var expected = ["0.5000","0.5000", "0.0000"] ;
        var result = clasificaElementos([5, 2, 9, -2, -2, -9]);
        expect(result).toEqual(expected);
    });

    test('clasificaElementos with Array [10, 0,-8]', function () {
        var expected = ["0.3333", "0.3333","0.3333"] ;
        var result = clasificaElementos([10, 0, -8]);
        expect(result).toEqual(expected);
    });


    /**
     PASS  ./suite.test.js
     v clasificaElementos with Array [0] (3ms)
     v clasificaElementos with Array [-1] (1ms)
     v clasificaElementos with Array [6]
     v clasificaElementos with Array [-4, 3, -9, 0, 4, 1] (6ms)
     v clasificaElementos with Array [5, -2, -9, 2, 0, 9]
     v clasificaElementos with Array [0, 0, 0, 10, 0, -8] (1ms)
     v clasificaElementos with Array [-5, -6, -9, -6, 0, 0] (1ms)
     v clasificaElementos with Array [5, 2, 9, -2, -2, -9]
     v clasificaElementos with Array [10, 0,-8] (1ms)

     Test Suites: 1 passed, 1 total
     Tests:       9 passed, 9 total
     Snapshots:   0 total
     Time:        3.829s
     Ran all test suites.
     **/
