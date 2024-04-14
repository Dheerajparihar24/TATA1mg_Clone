
function brands(){
    let filterByBrands = document.querySelector(".filterByBrands")
    let checkBox = document.createElement("input")
    checkBox.type="checkbox"
    checkBox.classList.add('brandsFilter')
    filterByBrands.append(checkBox)
    // console.log(checkBox)
}
brands()