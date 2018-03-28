
//initialize count to determine if any chemicals have been added
let count = 0;


$( document ).ready(function() {

  //click handler for the "save changes" button on the modal
  $('#chemBtn').click((e)=>
  {
    //prevents page from reloading
    e.preventDefault()

    //create a jQuery element based on form inputs
    const element = $(`<div class="chemical row" >
      <div class="col-sm" >
        <span>` + $('#inputChemName').val() + `</span> <br>
        <span>` + $('#inputChemNum').val()+ `</span>
      </div>
      <div class="col-sm">
        <span>` + $('#inputOperatorName').val() + `</span> <br>
        <span>` + $('#inputOperatorNum').val() + `</span>
      </div>
      <div class="col-sm">
        <span>`+ $('#inputAmount').val() + " "+ $('#inputUnits').val()+`</span>
      </div>
    </div>`)

    //enables interactivity with each generated element
    element.click(() => alert('This click should allow you to create a form or edit the item '))

    //add new element to the page
    $("#insertChemical").append(element)

    //remove placeholder message if this is the first document
    if (count === 0 ) {$(".noContent").addClass('hide')}

    //increment count
    count++;
  })



});
