import { supports } from './globals.js'

/* Native JavaScript for Bootstrap | Initialize Data API
--------------------------------------------------------*/
export const initCallback = function (lookUp){
  lookUp = lookUp || document;
  const initializeDataAPI = function( Constructor, collection ){
    for (let i=0, cl=collection.length; i<cl; i++) {
      new Constructor(collection[i]);
    }
  };
  for (let j=0, sl=supports.length; j<sl; j++) {
    initializeDataAPI( supports[j][1], lookUp.querySelectorAll (supports[j][2]) );
  }
};

/* Native JavaScript for Bootstrap | Remove Data API
--------------------------------------------------------*/
export const removeDataAPI = function (lookUp) {
  lookUp = lookUp || document;
  const removeElementDataAPI = function( Constructor, collection ){
    for (let i=0, cl=collection.length; i<cl; i++) {
      if (collection[i][Constructor]) {
        collection[i][Constructor].dispose();
      } 
    }
  };  
  for (let j=0, sl=supports.length; j<sl; j++) {
    removeElementDataAPI( supports[j][1], lookUp.querySelectorAll (supports[j][2]) );
  }
};