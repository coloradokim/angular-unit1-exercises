//select element of concern to watch for a change (keydown)
// select where in the DOM we want to inject the changed value
<input type="text" class="input">

<section class="output"></section>

<script>
  var output = document.querySelector('.output');
  document.querySelector('.input').addEventListener('change', function(e) {
    output.innerHTML = e.target.value
  })
</script>
