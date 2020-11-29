var Africa08 : number = 1028;
var Africa18 : number = 1235.5;

var SouthAmerica08 : number = 1132.6;
var SouthAmerica18 : number = 1261.5;

var Europe08 : number = 4965.7;
var Europe18 : number = 4209.3;

var NorthAmerica08 : number = 6600.4;
var NorthAmerica18 : number = 6035.6;

var Asia08 : number = 12954.7;
var Asia18 : number = 16274.1;

var Australia08 : number = 1993;
var Australia18 : number = 2100.5;

var Gesamt : number = Africa18 + SouthAmerica18 + Europe18 + NorthAmerica18 + Asia18 + Australia18;


var relAfrica : number = (Africa18 / Gesamt * 100);
var AfricaPro : number = (100 - (Africa08 / Africa18 *100));
var AfricaAbs : number = (Africa18 - Africa08);

var relSAmerica : number = (SouthAmerica18 / Gesamt * 100);
var SAmericaPro : number = (100 - (SouthAmerica08 / SouthAmerica18 *100));
var SAmericaAbs : number = (SouthAmerica18 - SouthAmerica08);

var relEurope : number = (Europe18 / Gesamt * 100);
var EuropePro : number = (100 - (Europe08 / Europe18 *100));
var EuropeAbs : number = (Europe18 - Europe08);

var relNAmerica : number = (NorthAmerica18 / Gesamt * 100);
var NAmericaPro : number = (100 - (NorthAmerica08 / NorthAmerica18 *100));
var NAmericaAbs : number = (NorthAmerica18 - NorthAmerica08);

var relAsia : number = (Asia18 / Gesamt * 100);
var AsiaPro : number = (100 - (Asia08 / Asia18 *100));
var AsiaAbs : number = (Asia18 - Asia08);

var relAustralia : number = (Australia18 / Gesamt * 100);
var AustraliaPro : number = (100 - (Australia08 / Australia18 *100));
var AustraliaAbs : number = (Australia18 - Australia08);


function Smogmog (name: string, value18: number, valueRel: number, valuePro: number, valueAbs: number ) {
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in" + name;
    document.querySelector(".Emi").innerHTML = value18.toString() + "kg CO2";
    document.querySelector(".Rel").innerHTML = Math.round(value18/Gesamt *100) + "%";
    document.querySelector(".Pro").innerHTML =  `${Math.round(valuePro)}%`;
    document.querySelector(".Abs").innerHTML = valueAbs + "kg CO2";
    document.querySelector("p").innerHTML = "Emission absolute of " + name + " in 2018";

    document.querySelector(".chart").setAttribute ('style', 'height:' + Math.round(value18/Gesamt*100) + '%')
}

document.querySelector(".europe").addEventListener("click", Smogmog.bind( null, " Europe", Europe18, relEurope, EuropePro, EuropeAbs));
document.querySelector(".asia").addEventListener("click", Smogmog.bind( null, " Asia", Asia18, relAsia, AsiaPro, AsiaAbs));
document.querySelector(".africa").addEventListener("click", Smogmog.bind( null, " Africa", Africa18, relAfrica, AfricaPro, AfricaAbs));
document.querySelector(".australia").addEventListener("click", Smogmog.bind( null, " Australia", Australia18, relAustralia, AsiaPro, AustraliaAbs));
document.querySelector(".northamerica").addEventListener("click", Smogmog.bind( null, " North America", NorthAmerica18, relNAmerica, NAmericaPro, NAmericaAbs));
document.querySelector(".southamerica").addEventListener("click", Smogmog.bind( null, " South America", SouthAmerica18, relSAmerica, SAmericaPro, SAmericaAbs));