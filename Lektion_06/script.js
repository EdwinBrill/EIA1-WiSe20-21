var Africa08 = 1028;
var Africa18 = 1235.5;
var SouthAmerica08 = 1132.6;
var SouthAmerica18 = 1261.5;
var Europe08 = 4965.7;
var Europe18 = 4209.3;
var NorthAmerica08 = 6600.4;
var NorthAmerica18 = 6035.6;
var Asia08 = 12954.7;
var Asia18 = 16274.1;
var Australia08 = 1993;
var Australia18 = 2100.5;
var Gesamt = Africa18 + SouthAmerica18 + Europe18 + NorthAmerica18 + Asia18 + Australia18;
var relAfrica = (Africa18 / Gesamt * 100);
var AfricaPro = (100 - (Africa08 / Africa18 * 100));
var AfricaAbs = (Africa18 - Africa08);
var relSAmerica = (SouthAmerica18 / Gesamt * 100);
var SAmericaPro = (100 - (SouthAmerica08 / SouthAmerica18 * 100));
var SAmericaAbs = (SouthAmerica18 - SouthAmerica08);
var relEurope = (Europe18 / Gesamt * 100);
var EuropePro = (100 - (Europe08 / Europe18 * 100));
var EuropeAbs = (Europe18 - Europe08);
var relNAmerica = (NorthAmerica18 / Gesamt * 100);
var NAmericaPro = (100 - (NorthAmerica08 / NorthAmerica18 * 100));
var NAmericaAbs = (NorthAmerica18 - NorthAmerica08);
var relAsia = (Asia18 / Gesamt * 100);
var AsiaPro = (100 - (Asia08 / Asia18 * 100));
var AsiaAbs = (Asia18 - Asia08);
var relAustralia = (Australia18 / Gesamt * 100);
var AustraliaPro = (100 - (Australia08 / Australia18 * 100));
var AustraliaAbs = (Australia18 - Australia08);
function Smogmog(name, value18, valueRel, valuePro, valueAbs) {
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in" + name;
    document.querySelector(".Emi").innerHTML = value18.toString() + "kg CO2";
    document.querySelector(".Rel").innerHTML = Math.round(value18 / Gesamt * 100) + "%";
    document.querySelector(".Pro").innerHTML = Math.round(valuePro) + "%";
    document.querySelector(".Abs").innerHTML = valueAbs + "kg CO2";
    document.querySelector("p").innerHTML = "Emission absolute of " + name + " in 2018";
    document.querySelector(".chart").setAttribute('style', 'height:' + Math.round(value18 / Gesamt * 100) + '%');
}
document.querySelector(".europe").addEventListener("click", Smogmog.bind(null, " Europe", Europe18, relEurope, EuropePro, EuropeAbs));
document.querySelector(".asia").addEventListener("click", Smogmog.bind(null, " Asia", Asia18, relAsia, AsiaPro, AsiaAbs));
document.querySelector(".africa").addEventListener("click", Smogmog.bind(null, " Africa", Africa18, relAfrica, AfricaPro, AfricaAbs));
document.querySelector(".australia").addEventListener("click", Smogmog.bind(null, " Australia", Australia18, relAustralia, AsiaPro, AustraliaAbs));
document.querySelector(".northamerica").addEventListener("click", Smogmog.bind(null, " North America", NorthAmerica18, relNAmerica, NAmericaPro, NAmericaAbs));
document.querySelector(".southamerica").addEventListener("click", Smogmog.bind(null, " South America", SouthAmerica18, relSAmerica, SAmericaPro, SAmericaAbs));
//# sourceMappingURL=script.js.map