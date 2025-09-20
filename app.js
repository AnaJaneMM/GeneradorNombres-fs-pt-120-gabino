/**
 * Genera nombres de dominio a partir de listas en minusculas.
 * Usa Set para evitar duplicados y devuelve un array.
 * 
 * @param {string[]} pronouns Array de strings de pronombres.
 * @param {string[]} adjectives Array de strings de adjetivos.
 * @param {string[]} noun  Array de strings de sustantivos.
 * @param {string[]} extensions Array de strings de extensiones
 * @returns {string[]} Array de todos los nombres de dominio posibles.
 * 
 *  ¡¡He elegido 'for of' como iterador porque en este caso con tantas anidaciones es más visual!!
 */
function generateDomainName(pronouns, adjectives, noun, extensions) {
  let domainNameList = new Set();

  for (const p of pronouns) {
    for (const a of adjectives) {
      for (const n of noun) {
        for (const e of extensions) {
          domainNameList.add(`${p}${a}${n}${e}`.toLowerCase());
        }
      }
    }
  }
  // Convertimos Set a Array y lo ordenamos
  return Array.from(domainNameList).sort();
}

/**
 * Genera "domain hacks" a partir de una lista de dominios.
 * A cada dominio le pone un punto antes de las últimas 2 letras utilizando map
 * @param {string[]} domainList - Array de nombres de dominio.
 * @returns {string[]} Array con los dominios transformados en formato hack.
 */
const generateDomainHack = (domainList) =>
  domainList.map(element => `${element.slice(0, -2)}.${element.slice(-2)}`);


/**
 * Función principal del programa.
 *
 * Define las listas de pronombres, adjetivos, sustantivos y extensiones de dominio,
 * genera todas las combinaciones posibles de nombres de dominio y las imprime.
 * Luego genera y muestra los "domain hacks" a partir de esas combinaciones.
 *
 * Flujo:
 *  1. Genera todas las combinaciones de dominios y las muestra por consola.
 *  2. Genera los domain hacks y los muestra por consola.
 */
function main() {
  let pronounsList = ['our', 'this', 'them', 'we', 'that', 'it', 'you']
  let adjectivesList = ['great', 'big', 'ugly', 'slow', 'sad', 'small', 'lazy'];
  let nounList = ['Cutiepatootie', 'Gnarly', 'Fluffy', 'Nasty', 'Gubbins', 'Sassy'];
  let extensionsList = ['.com', '.es', '.org', '.info']

  let domainNameList = generateDomainName(pronounsList, adjectivesList, nounList, extensionsList);
  console.log(`Total de dominios generados: ${domainNameList.length}.`)
  console.log(domainNameList.join('\n'));

  let domainHackList = generateDomainHack(domainNameList);
  console.log(domainHackList.join('\n'));
}

main();

