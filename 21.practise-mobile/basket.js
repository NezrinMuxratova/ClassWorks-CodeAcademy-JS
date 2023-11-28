

function cartItem() {
    card.forEach((item) => {
      basgetDiv.innerHTML += `
      <div class="box-1">
      <img src="${data.thumbnail}" alt="" />
  
      <h3>"${data.title}"</h3>
      <h3>"${data.price}"</h3>
  
      <p>
       "${data.description}"
      </p>
      <div class="btn-icon ">
  
          <button type="button" class=" btn-primary" onClick=addToCart("${data._id}")>Add to Basket</button>
          <i class="fa-regular fa-heart"></i>
      </div>
    </div>
      `
      renderTable(item)
    })
  }