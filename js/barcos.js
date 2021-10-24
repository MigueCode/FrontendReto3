const render = data => {

  const $d = document,
           $tablaBarcos = $d.getElementById("tablaBarcos").content,
           $tablaFragment = $d.createDocumentFragment(),
           $tablaBarcosDiv = $d.getElementById("tablaBarcosDiv")

  data.forEach(element => {
    console.log(element)

    $tablaBarcos.querySelector(".brand").textContent = element.brand
    $tablaBarcos.querySelector(".name").textContent = element.name
    $tablaBarcos.querySelector(".model").textContent = element.model
    $tablaBarcos.querySelector(".description").textContent = element.description

    let clone = $d.importNode($tablaBarcos, true)

    $tablaFragment.appendChild(clone)
    
  });

$tablaBarcosDiv.appendChild($tablaFragment)
}

export const getBarcos = () => {

  fetch("./js/barcos.json")
  .then(response => response.json())
  .then(data => render(data));
}