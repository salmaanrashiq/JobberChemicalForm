let count = 0;

$( document ).ready(function() {
  //handle new chemical
  $('#chemBtn').click((e)=>
  {
    e.preventDefault()

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

    element.click(() => alert())
    $("#insertChemical").append(element)
    if (count === 0 ) {$(".noContent").addClass('hide')}
    count++;
  })



});
