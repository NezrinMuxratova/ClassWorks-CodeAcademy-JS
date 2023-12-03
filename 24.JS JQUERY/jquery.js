let arr = JSON.parse(localStorage.getItem("key")) ?? [];

$(".btn-add").on("click", function () {
  let text = document.createElement("p");
  text.innerText = $("input").val();
  $(".lists").append(text);

  $("p").css({
    backgroundColor: "pink",
    padding: "5px",
    borderRadius: "5px",
    margin: "10px",
    width: "150px",
  });

  $("p").on("click", function () {
    this.remove();
  });

  arr.push(text.innerText);
  localStorage.setItem("key", JSON.stringify(arr));

  $("input").val("");
});

function inputArr(element) {
  element.forEach((item) => {
    let word = document.createElement("p");
    word.innerText = item;
    $(".lists").append(word);
    $("p").css({
      backgroundColor: "pink",
      padding: "5px",
      borderRadius: "5px",
      margin: "10px",
      width: "150px",
    });

    word.addEventListener("click", function (e) {
      arr = arr.filter((el) => el != e.target.innerText);
      console.log(arr);
      localStorage.setItem("key", JSON.stringify(arr));

      this.remove();
    });
  });
}
inputArr(arr);
