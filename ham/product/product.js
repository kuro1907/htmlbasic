let product = ["Sony Xperia"];
function showProduct() {
  let tbProducts = document.getElementById("tbProducts");
  tbProducts.innerHTML = "";
  for (let item of product) {
    tbProducts.innerHTML += `<tr>
        <td>${item}</td>
        <td>
          <button type="submit" onclick="editProduct()">Edit</button>
          <button type="submit" onclick="deleteProduct()">Delete</button>
        </td>
      </tr>`;
  }
}
function addProduct() {}
function editProduct() {}
function deleteProduct() {}
function documentReady() {
  showProduct();
}
documentReady();
