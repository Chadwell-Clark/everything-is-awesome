console.log("hello beautiful")
import { loadLegos, useLegos } from './legos/LegoData.js'
import { makeLegoList } from './legos/LegoList.js';

const navElement = document.querySelector("nav");

navElement.addEventListener("click", (event) => {
	if (event.target.id === "showRed") {
    filterLegos("Red");
  } else if (event.target.id === "showGreen") {
    filterLegos("Green");
  } else if (event.target.id === "showAll") {
    makeLegoList(useLegos());
  }
})

// navElement.addEventListener("change", event => {
// 	const legoMaterial = 

navElement.addEventListener("change", event => {
	switch (event.target.value) {
    case "Solid":
      filterLegoMaterial("Solid");
      break;
    case "Transparent":
      filterLegoMaterial("Transparent");
      break;
    case "Pearl":
      filterLegoMaterial("Pearl");
      break;
    case "Chrome":
      filterLegoMaterial("Chrome");
      break;
    case "Metallic":
      filterLegoMaterial("Metallic");
      break;
    case "Milky":
      filterLegoMaterial("Milky");
      break;
    case "Glitter":
      filterLegoMaterial("Glitter");
      break;
    case "Speckle":
      filterLegoMaterial("Speckle");
      break;
    case "Ink":
      filterLegoMaterial("Ink");
      break;
    case "Process":
      filterLegoMaterial("Process");
      break;
    case "Modulex":
      filterLegoMaterial("Modulex");
      break;
  }
})

const filterLegos = (whatFilter) => {
	const filterArray = useLegos().filter(singleLego => {
		if (singleLego.LegoName.includes(whatFilter)) {
			return singleLego;
		}
	})
	makeLegoList(filterArray);
}
const filterLegoMaterial = (whatFilter) => {
  const filterArray = useLegos().filter((singleLego) => {
    if (singleLego.Material.includes(whatFilter)) {
      return singleLego;
    }
  });
  makeLegoList(filterArray);
};


const startEIA = () => {
	loadLegos()
	.then(legoArray => {
		makeLegoList(legoArray)
	})

}

startEIA();