function jsDemo(){


    let number = 12.5;

    console.log(Math.floor(number)); //Закръгляне на долу.
    console.log(Math.ceil(number)); //Закръгляне на горе.
    console.log(Math.trunc(number));
    console.log(Math.round(number)); //Форматира до по близкото цяло число.
    console.log(Math.pow(number,7)); // повдига чиесло на степен.
    console.log(number**7); // същото повдига на степен.
    console.log(Math.min(12,6,-1,5,1000,-109)); //изкарва най -малкото чиесло
    console.log(Math.max(12,6,-1,5,1000,-109)); //изкарва най -високото
    console.log(number.toFixed(2)); //Форматира до 2 знака след запетая. Само за краен резултат.
}
jsDemo()