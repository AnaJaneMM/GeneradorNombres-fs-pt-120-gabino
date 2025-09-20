/**
 * Genera nombres de dominio a partir de listas en minusculas.
 * Usa Set para evitar duplicados y devuelve un array.
 * 
 * @param {string[]} pronouns Array de strings de pronombres.
 * @param {string[]} adjectives Array de strings de adjetivos.
 * @param {string[]} noun  Array de strings de sustantivos.
 * @returns {string[]} Array de todos los nombres de dominio posibles.
 * 
 *  ¡¡He elegido 'for of' como iterador porque en este caso con tantas anidaciones es más visual!!
 */
function generateDomainName(pronouns, adjectives, noun) {
  let domainNameList = new Set();

  for (const p of pronouns) {
    for (const a of adjectives) {
      for (const n of noun) {
        domainNameList.add(`${p}${a}${n}.com`.toLowerCase());
      }
    }
  }
  // Convertimos Set a Array y lo ordenamos
  return Array.from(domainNameList).sort();
}

/**
 * Función principal del programa.
 *
 * Define las listas de pronombres, adjetivos, sustantivos de dominio,
 * genera todas las combinaciones posibles de nombres de dominio más ".com" y las imprime.
*/
function main() {
  let pronounsList = ['our', 'this', 'them', 'we', 'that', 'it', 'you']
  let adjectivesList = ['great', 'big', 'ugly', 'slow', 'sad', 'small', 'lazy'];
  let nounList = ['Cutiepatootie', 'Gnarly', 'Fluffy', 'Nasty', 'Gubbins', 'Sassy'];

  let domainNameList = generateDomainName(pronounsList, adjectivesList, nounList, extensionsList);
  console.log(`Total de dominios generados: ${domainNameList.length}.`)
  console.log(domainNameList.join('\n'));

}

main();

