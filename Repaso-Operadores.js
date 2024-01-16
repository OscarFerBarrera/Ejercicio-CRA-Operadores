// OPERADOR ||
console.log(false || {});        //Devuelve un objeto porque el primer argumento es false y JS con Or devuelve el segundo argumento
console.log("string" || true);   //Devuelve "String" porque es el primer argumento y JS lo considera verdadero 
console.log([] || 100);          //Devuelve "String" porque es el primer argumento y JS lo considera verdadero 
console.log(null || "Prueba");   //Devuelve "Prueba" porque null es considerado false y JS onsidera verdadero el segundo argumento 
console.log("" || true);         //Devuelve true porque un cadena vacia JS lo considera false 
console.log(undefined || false); //Devuelve false porque el primer argumento JS lo considera false y con Or devuelve el segundo argumento

// Operador &&
console.log(false && {});         //Devuelve false porque los dos argumentos son considerados falsos
console.log("string" && true);    //Devuelve verdadero porque los dos argumentos son verdaderos
console.log([] && 100);           //Devuelve 100 porque los dos argumentos son verdaderos y && devuelve el segundo argumento vedadero
console.log(null && "Prueba");    //Devuelve null porque el resultado de la evaluacion es false por el primer argumento
console.log("" && true);          //Devuelve null porque el resultado de la evaluacion es false por el primer argumento
console.log(undefined && false);  //Devuelve null porque el resultado de la evaluacion es false por el primer argumento


// Operador ??
console.log(false ?? {});         //Devuelve false porque el primer argumento se considera true
console.log("string" ?? true);    //Devuelve 'string' porque el primer argumento se considera true
console.log([] ?? 100);           //Devuelve [] porque el primer argumento se considera true
console.log(null ?? "Prueba");    //Devuelve "Prueba" porque el primer argumento se considera false
console.log("" ?? true);          //Devuelve "" porque el primer argumento se considera true
console.log(undefined ?? false);  //Devuelve false porque el primer argumento se considera false